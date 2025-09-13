#!/bin/bash

# CRM Landing Page AWS Setup Script
set -e

echo "🚀 Setting up AWS S3 + CloudFront deployment for CRM Landing Page"
echo "=================================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI is not installed${NC}"
    echo "Please install AWS CLI first:"
    echo "https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
    exit 1
fi

# Check if AWS is configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}❌ AWS CLI is not configured${NC}"
    echo "Please configure AWS CLI first:"
    echo "aws configure"
    exit 1
fi

echo -e "${GREEN}✅ AWS CLI is installed and configured${NC}"

# Get AWS account info
AWS_ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
AWS_REGION=$(aws configure get region || echo "us-east-1")
echo -e "${BLUE}📋 AWS Account: ${AWS_ACCOUNT}${NC}"
echo -e "${BLUE}📋 AWS Region: ${AWS_REGION}${NC}"

# Prompt for bucket name
echo ""
echo -e "${YELLOW}🪣 S3 Bucket Configuration${NC}"
read -p "Enter S3 bucket name (must be globally unique): " BUCKET_NAME

if [ -z "$BUCKET_NAME" ]; then
    echo -e "${RED}❌ Bucket name cannot be empty${NC}"
    exit 1
fi

# Check if bucket name is available
if aws s3api head-bucket --bucket "$BUCKET_NAME" 2>/dev/null; then
    echo -e "${YELLOW}⚠️  Bucket '$BUCKET_NAME' already exists${NC}"
    read -p "Do you want to use this existing bucket? (y/N): " USE_EXISTING
    if [[ ! $USE_EXISTING =~ ^[Yy]$ ]]; then
        echo "Please choose a different bucket name"
        exit 1
    fi
fi

# Update .env.deploy file
echo ""
echo -e "${YELLOW}📝 Updating configuration files...${NC}"

cat > .env.deploy << EOF
# AWS Configuration for Deployment
AWS_REGION=${AWS_REGION}
AWS_S3_BUCKET=${BUCKET_NAME}
CLOUDFRONT_DISTRIBUTION_ID=

# AWS Credentials (using AWS CLI profile)
# AWS_ACCESS_KEY_ID=your-access-key
# AWS_SECRET_ACCESS_KEY=your-secret-key
# AWS_PROFILE=default

# Custom Domain (optional)
# CUSTOM_DOMAIN=landing.yourcrm.com
EOF

echo -e "${GREEN}✅ Configuration updated${NC}"

# Test build
echo ""
echo -e "${YELLOW}🔨 Testing build process...${NC}"
if npm run build:static; then
    echo -e "${GREEN}✅ Build successful${NC}"
else
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi

# Deploy to AWS
echo ""
echo -e "${YELLOW}🚀 Deploying to AWS...${NC}"
if node deploy-aws.js; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    
    # Show URLs
    echo ""
    echo -e "${GREEN}🎉 Deployment Complete!${NC}"
    echo "================================"
    echo -e "${BLUE}📦 S3 Website URL:${NC} http://${BUCKET_NAME}.s3-website-${AWS_REGION}.amazonaws.com"
    echo -e "${BLUE}🌐 CloudFront URL:${NC} Will be available in ~15 minutes"
    echo ""
    echo -e "${YELLOW}📋 Next Steps:${NC}"
    echo "1. Wait for CloudFront distribution to deploy (~15 minutes)"
    echo "2. Update CLOUDFRONT_DISTRIBUTION_ID in .env.deploy"
    echo "3. Set up custom domain (optional)"
    echo "4. Configure GitHub Actions for auto-deployment"
    echo ""
    echo -e "${BLUE}📚 See DEPLOYMENT.md for detailed instructions${NC}"
else
    echo -e "${RED}❌ Deployment failed${NC}"
    exit 1
fi