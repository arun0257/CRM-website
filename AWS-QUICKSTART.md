# 🚀 AWS S3 + CloudFront Quick Start

Deploy your CRM Landing Page to AWS in minutes with global CDN distribution.

## Prerequisites

- AWS Account with appropriate permissions
- AWS CLI installed and configured
- Node.js 18+ installed

## Quick Deploy (5 minutes)

### 1. Configure AWS CLI
```bash
aws configure
# Enter your AWS Access Key ID, Secret Access Key, and region
```

### 2. Run Setup Script
```bash
./setup-aws.sh
```

The script will:
- ✅ Verify AWS configuration
- 🪣 Create S3 bucket with static hosting
- 🔨 Build your React application
- 📤 Upload files to S3
- 🌐 Create CloudFront distribution
- 🔄 Configure cache invalidation

### 3. Access Your Site
- **S3 URL**: Available immediately
- **CloudFront URL**: Available in ~15 minutes

## Manual Deploy

If you prefer manual control:

```bash
# 1. Install dependencies
npm install

# 2. Build application
npm run build:static

# 3. Deploy to AWS
npm run deploy:aws
```

## Environment Configuration

Edit `.env.deploy` to customize:

```bash
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-unique-bucket-name
CLOUDFRONT_DISTRIBUTION_ID=E1234567890ABC  # After first deployment
```

## GitHub Actions Auto-Deploy

Set up automatic deployment on every push:

### 1. Add GitHub Secrets
Repository → Settings → Secrets and variables → Actions

**Secrets:**
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

**Variables:**
- `AWS_REGION`
- `AWS_S3_BUCKET`
- `CLOUDFRONT_DISTRIBUTION_ID`

### 2. Push to main branch
Automatic deployment will trigger on every push to main/master.

## Custom Domain Setup

To use your own domain (e.g., `landing.yourcrm.com`):

1. **Request SSL Certificate** (in us-east-1):
   ```bash
   aws acm request-certificate --domain-name landing.yourcrm.com --validation-method DNS --region us-east-1
   ```

2. **Update CloudFront Distribution** with your domain

3. **Update DNS** to point to CloudFront distribution

## Performance Features

✅ **Global CDN** - Fast loading worldwide  
✅ **HTTPS** - Automatic SSL/TLS  
✅ **Compression** - Gzip enabled  
✅ **Caching** - Optimized cache headers  
✅ **SPA Support** - Client-side routing works  

## Cost Estimate

- **S3**: ~$1-5/month for storage and requests
- **CloudFront**: Free tier includes 1TB transfer
- **Total**: Usually under $10/month for most sites

## Troubleshooting

### Common Issues:

**"Bucket name already exists"**
- S3 bucket names are globally unique
- Try a more specific name like `yourcompany-crm-landing-2024`

**"Access Denied"**
- Check AWS credentials: `aws sts get-caller-identity`
- Verify IAM permissions for S3 and CloudFront

**"Build fails"**
- Run `npm run build:static` locally first
- Check for TypeScript/React errors

### Get Help

1. Check `DEPLOYMENT.md` for detailed instructions
2. Review AWS CloudTrail for error details
3. Test AWS access: `aws s3 ls`

## What's Included

- 📦 **Automated S3 setup** with static hosting
- 🌐 **CloudFront CDN** with global distribution
- 🔄 **Cache invalidation** for instant updates
- 🔒 **HTTPS redirect** for security
- 📱 **SPA routing** support
- 🚀 **GitHub Actions** workflow
- 📚 **Comprehensive documentation**

Ready to deploy? Run `./setup-aws.sh` and you'll be live in minutes! 🎉