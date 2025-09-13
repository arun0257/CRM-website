# AWS S3 + CloudFront Deployment Guide

This guide explains how to deploy the CRM Landing Page to AWS S3 with CloudFront CDN for optimal performance and global distribution.

## Prerequisites

1. **AWS Account** with appropriate permissions
2. **AWS CLI** installed and configured (optional)
3. **Node.js** 18+ installed

## Setup Instructions

### 1. Configure AWS Credentials

Choose one of these methods:

#### Option A: AWS CLI (Recommended)
```bash
aws configure
# Enter your AWS Access Key ID, Secret Access Key, and region
```

#### Option B: Environment Variables
```bash
export AWS_ACCESS_KEY_ID=your-access-key
export AWS_SECRET_ACCESS_KEY=your-secret-key
export AWS_REGION=us-east-1
```

#### Option C: Update .env.deploy file
```bash
cp .env.deploy .env.deploy.local
# Edit .env.deploy.local with your credentials
```

### 2. Configure Deployment Settings

Edit `.env.deploy` or set environment variables:

```bash
# Required
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-unique-bucket-name

# Optional
CLOUDFRONT_DISTRIBUTION_ID=E1234567890ABC  # Leave empty for first deployment
```

### 3. Deploy to AWS

#### First-time deployment:
```bash
npm run deploy:setup
```

#### Subsequent deployments:
```bash
npm run deploy:aws
```

## What the Deployment Does

1. **Creates S3 Bucket** (if it doesn't exist)
   - Configures static website hosting
   - Sets public read permissions
   - Optimizes cache headers

2. **Uploads Built Files**
   - Builds the React application
   - Uploads all assets to S3
   - Sets appropriate MIME types

3. **Creates CloudFront Distribution** (first deployment)
   - Global CDN for fast content delivery
   - HTTPS redirect enabled
   - SPA routing support (404 → index.html)

4. **Invalidates Cache**
   - Clears CloudFront cache for immediate updates

## Manual Deployment Steps

If you prefer manual deployment:

### 1. Build the application
```bash
npm run build:static
```

### 2. Create S3 bucket
```bash
aws s3 mb s3://your-bucket-name --region us-east-1
```

### 3. Configure bucket for static hosting
```bash
aws s3 website s3://your-bucket-name --index-document index.html --error-document index.html
```

### 4. Upload files
```bash
aws s3 sync dist/public/ s3://your-bucket-name --delete
```

### 5. Set bucket policy for public access
```bash
aws s3api put-bucket-policy --bucket your-bucket-name --policy '{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::your-bucket-name/*"
  }]
}'
```

## GitHub Actions Deployment

For automated deployments on every push:

### 1. Set GitHub Secrets
Go to your repository → Settings → Secrets and variables → Actions

**Secrets:**
- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key

**Variables:**
- `AWS_REGION`: Your AWS region (e.g., us-east-1)
- `AWS_S3_BUCKET`: Your S3 bucket name
- `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID (after first deployment)

### 2. Push to main branch
The workflow will automatically:
- Build the application
- Deploy to S3
- Invalidate CloudFront cache
- Comment deployment URL on PRs

## Custom Domain Setup

To use a custom domain (e.g., landing.yourcrm.com):

### 1. Add domain to CloudFront
```bash
# Update CloudFront distribution with your domain
aws cloudfront update-distribution --id YOUR_DISTRIBUTION_ID --distribution-config file://cloudfront-config.json
```

### 2. Create SSL certificate
```bash
# Request certificate in us-east-1 (required for CloudFront)
aws acm request-certificate --domain-name landing.yourcrm.com --validation-method DNS --region us-east-1
```

### 3. Update DNS
Point your domain's CNAME to the CloudFront distribution domain.

## Performance Optimizations

The deployment script automatically:

- **Cache Headers**: Long cache for assets, no cache for HTML
- **Compression**: Gzip enabled via CloudFront
- **CDN**: Global edge locations for fast delivery
- **HTTPS**: Automatic redirect from HTTP to HTTPS

## Monitoring and Logs

- **CloudFront Logs**: Enable in AWS Console for detailed analytics
- **S3 Access Logs**: Monitor bucket access patterns
- **CloudWatch**: Set up alarms for errors and performance

## Cost Optimization

- **S3**: Pay only for storage and requests
- **CloudFront**: Free tier includes 1TB transfer and 10M requests/month
- **Route 53**: ~$0.50/month for hosted zone (if using custom domain)

## Troubleshooting

### Common Issues:

1. **Bucket name already exists**
   - S3 bucket names are globally unique
   - Choose a more specific name

2. **Permission denied**
   - Check AWS credentials
   - Ensure IAM user has S3 and CloudFront permissions

3. **Build fails**
   - Run `npm run build:static` locally first
   - Check for TypeScript errors

4. **404 errors on refresh**
   - Ensure CloudFront has custom error page configured
   - Check that index.html is set as error document

### Required IAM Permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:CreateBucket",
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:PutBucketWebsite",
        "s3:PutBucketPolicy"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateDistribution",
        "cloudfront:GetDistribution",
        "cloudfront:UpdateDistribution",
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "*"
    }
  ]
}
```

## Support

For issues with deployment:
1. Check AWS CloudTrail for detailed error logs
2. Verify IAM permissions
3. Test AWS CLI access: `aws s3 ls`
4. Check the deployment script logs for specific errors