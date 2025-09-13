#!/usr/bin/env node

import { S3Client, PutObjectCommand, CreateBucketCommand, PutBucketWebsiteCommand, PutBucketPolicyCommand } from '@aws-sdk/client-s3';
import { CloudFrontClient, CreateDistributionCommand, GetDistributionCommand, CreateInvalidationCommand } from '@aws-sdk/client-cloudfront';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';
import { lookup } from 'mime-types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  bucketName: process.env.AWS_S3_BUCKET || 'crm-landing-page-bucket',
  region: process.env.AWS_REGION || 'us-east-1',
  distributionId: process.env.CLOUDFRONT_DISTRIBUTION_ID || null,
  buildDir: path.join(__dirname, 'dist/public'),
  profile: process.env.AWS_PROFILE || 'default'
};

// Initialize AWS clients
const s3Client = new S3Client({ 
  region: config.region,
  ...(process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY ? {
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
  } : {})
});

const cloudFrontClient = new CloudFrontClient({ 
  region: config.region,
  ...(process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY ? {
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
  } : {})
});

// Helper function to get all files recursively
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

// Create S3 bucket if it doesn't exist
async function createBucket() {
  try {
    console.log(`Creating S3 bucket: ${config.bucketName}`);
    
    await s3Client.send(new CreateBucketCommand({
      Bucket: config.bucketName,
      ...(config.region !== 'us-east-1' && {
        CreateBucketConfiguration: {
          LocationConstraint: config.region
        }
      })
    }));

    // Configure bucket for static website hosting
    await s3Client.send(new PutBucketWebsiteCommand({
      Bucket: config.bucketName,
      WebsiteConfiguration: {
        IndexDocument: { Suffix: 'index.html' },
        ErrorDocument: { Key: 'index.html' } // SPA routing
      }
    }));

    // Skip bucket policy - will use CloudFront OAC instead
    console.log('✅ Bucket configured for CloudFront access');

    console.log('✅ S3 bucket created and configured');
  } catch (error) {
    if (error.name === 'BucketAlreadyOwnedByYou') {
      console.log('✅ S3 bucket already exists');
    } else {
      console.error('❌ Error creating bucket:', error.message);
      throw error;
    }
  }
}

// Upload files to S3
async function uploadToS3() {
  console.log('📤 Uploading files to S3...');
  
  if (!fs.existsSync(config.buildDir)) {
    throw new Error(`Build directory not found: ${config.buildDir}. Run 'npm run build' first.`);
  }

  const files = getAllFiles(config.buildDir);
  const uploadPromises = files.map(async (filePath) => {
    const relativePath = path.relative(config.buildDir, filePath);
    const key = relativePath.replace(/\\/g, '/'); // Convert Windows paths to Unix
    
    const contentType = lookup(filePath) || 'application/octet-stream';
    const fileStream = createReadStream(filePath);
    
    // Set cache control headers
    let cacheControl = 'public, max-age=31536000'; // 1 year for assets
    if (key === 'index.html' || key.endsWith('.html')) {
      cacheControl = 'public, max-age=0, must-revalidate'; // No cache for HTML
    }

    const command = new PutObjectCommand({
      Bucket: config.bucketName,
      Key: key,
      Body: fileStream,
      ContentType: contentType,
      CacheControl: cacheControl
    });

    try {
      await s3Client.send(command);
      console.log(`✅ Uploaded: ${key}`);
    } catch (error) {
      console.error(`❌ Failed to upload ${key}:`, error.message);
      throw error;
    }
  });

  await Promise.all(uploadPromises);
  console.log('✅ All files uploaded to S3');
}

// Create CloudFront distribution
async function createCloudFrontDistribution() {
  if (config.distributionId) {
    console.log('✅ Using existing CloudFront distribution');
    return config.distributionId;
  }

  console.log('🌐 Creating CloudFront distribution...');
  
  const distributionConfig = {
    CallerReference: `crm-landing-${Date.now()}`,
    Comment: 'CRM Landing Page Distribution',
    DefaultCacheBehavior: {
      TargetOriginId: 'S3Origin',
      ViewerProtocolPolicy: 'redirect-to-https',
      AllowedMethods: {
        Quantity: 2,
        Items: ['GET', 'HEAD']
      },
      ForwardedValues: {
        QueryString: false,
        Cookies: { Forward: 'none' }
      },
      TrustedSigners: {
        Enabled: false,
        Quantity: 0
      },
      MinTTL: 0,
      DefaultTTL: 86400,
      MaxTTL: 31536000
    },
    Origins: {
      Quantity: 1,
      Items: [{
        Id: 'S3Origin',
        DomainName: `${config.bucketName}.s3.${config.region}.amazonaws.com`,
        S3OriginConfig: {
          OriginAccessIdentity: ''
        }
      }]
    },
    Enabled: true,
    DefaultRootObject: 'index.html',
    CustomErrorResponses: {
      Quantity: 1,
      Items: [{
        ErrorCode: 404,
        ResponsePagePath: '/index.html',
        ResponseCode: '200',
        ErrorCachingMinTTL: 300
      }]
    },
    PriceClass: 'PriceClass_100' // Use only US, Canada, Europe edge locations
  };

  try {
    const command = new CreateDistributionCommand({
      DistributionConfig: distributionConfig
    });
    
    const response = await cloudFrontClient.send(command);
    const distributionId = response.Distribution.Id;
    const domainName = response.Distribution.DomainName;
    
    console.log('✅ CloudFront distribution created');
    console.log(`📋 Distribution ID: ${distributionId}`);
    console.log(`🌐 Domain Name: ${domainName}`);
    console.log(`🔗 URL: https://${domainName}`);
    
    return distributionId;
  } catch (error) {
    console.error('❌ Error creating CloudFront distribution:', error.message);
    throw error;
  }
}

// Invalidate CloudFront cache
async function invalidateCloudFront(distributionId) {
  console.log('🔄 Invalidating CloudFront cache...');
  
  const command = new CreateInvalidationCommand({
    DistributionId: distributionId,
    InvalidationBatch: {
      Paths: {
        Quantity: 1,
        Items: ['/*']
      },
      CallerReference: `invalidation-${Date.now()}`
    }
  });

  try {
    const response = await cloudFrontClient.send(command);
    console.log('✅ CloudFront invalidation created:', response.Invalidation.Id);
  } catch (error) {
    console.error('❌ Error creating invalidation:', error.message);
    throw error;
  }
}

// Main deployment function
async function deploy() {
  try {
    console.log('🚀 Starting deployment to AWS...');
    console.log(`📦 Build directory: ${config.buildDir}`);
    console.log(`🪣 S3 Bucket: ${config.bucketName}`);
    console.log(`🌍 Region: ${config.region}`);
    
    // Step 1: Create S3 bucket
    await createBucket();
    
    // Step 2: Upload files to S3
    await uploadToS3();
    
    // Step 3: Create or use existing CloudFront distribution
    const distributionId = await createCloudFrontDistribution();
    
    // Step 4: Invalidate CloudFront cache
    if (distributionId) {
      await invalidateCloudFront(distributionId);
    }
    
    console.log('🎉 Deployment completed successfully!');
    console.log(`🔗 S3 Website URL: http://${config.bucketName}.s3-website-${config.region}.amazonaws.com`);
    
    if (distributionId) {
      // Get distribution details
      const getDistCommand = new GetDistributionCommand({ Id: distributionId });
      const distResponse = await cloudFrontClient.send(getDistCommand);
      const domainName = distResponse.Distribution.DomainName;
      console.log(`🌐 CloudFront URL: https://${domainName}`);
    }
    
  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
  }
}

// Run deployment
deploy();