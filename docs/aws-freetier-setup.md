# AWS Free Tier Configuration

This document outlines the Free Tier optimizations made to ensure Gig Grid stays within AWS Free Tier limits during development and initial deployment.

## Overview

All environments (dev, sit, uat, production) have been configured to use AWS Free Tier services with appropriate limits to minimize costs while maintaining functionality.

## Service Configurations

### 1. DynamoDB
- **Billing Mode**: PAY_PER_REQUEST (no upfront provisioning)
- **Read/Write Capacity**: 5 units each (within Free Tier)
- **Backup**: Disabled to save costs
- **Point-in-Time Recovery**: Disabled

### 2. Amazon SES (Email Service)
- **Sandbox Mode**: Enabled (allows testing with verified emails)
- **Monthly Limit**: 200 emails (within Free Tier)
- **DKIM**: Disabled to reduce complexity
- **Test Domain**: @example.amazonses.com for development

### 3. AWS Cognito (Authentication)
- **Monthly Active Users**: Limited to 50,000 (Free Tier limit)
- **MFA**: Disabled to reduce costs
- **Two-Factor Auth**: Disabled for development

### 4. S3 Storage
- **Storage Limit**: 5GB (Free Tier limit)
- **Max File Size**: 5MB (reduced from 100MB)
- **Request Limit**: 20,000 requests/month
- **CDN**: Disabled (CloudFront has separate costs)
- **Versioning**: Disabled
- **Encryption**: Disabled

### 5. Lambda Functions
- **Memory Size**: 128MB (minimum to reduce costs)
- **Timeout**: 15-30 seconds
- **Request Limit**: 1,000,000 requests/month (Free Tier)
- **Duration Limit**: 400,000 GB-seconds/month
- **Dead Letter Queue**: Disabled
- **X-Ray Tracing**: Disabled

### 6. API Gateway
- **Request Limit**: 1,000,000 requests/month (Free Tier)
- **Caching**: Disabled (additional cost)
- **Custom Domain**: Disabled
- **Throttling**: Disabled for development

### 7. CloudWatch (Monitoring)
- **Log Retention**: 7 days (reduced from 30 days)
- **Detailed Metrics**: Disabled
- **Alarms**: Disabled
- **X-Ray Tracing**: Disabled

### 8. Features Disabled for Cost Optimization
- **Social Login**: Uses external APIs with potential costs
- **Payment Processing**: Stripe/PayPal integration costs
- **Real-time Messaging**: WebSocket connections cost extra
- **Push Notifications**: SNS costs for mobile notifications
- **Advanced Analytics**: CloudWatch detailed metrics
- **Automated Backups**: S3 backup storage costs
- **WAF Security**: Additional security service costs

## Environment-Specific Notes

### Development
- Uses local mocks for most services
- No real AWS integration
- Zero cost environment

### SIT/UAT
- Limited AWS integration for testing
- Reduced limits and disabled expensive features
- Minimal cost for integration testing

### Production
- All Free Tier limits applied
- Core functionality maintained
- Non-essential features disabled

## Cost Monitoring

To stay within Free Tier:

1. **Monitor AWS Billing Dashboard** regularly
2. **Set up Billing Alerts** at $1, $5, and $10
3. **Review usage monthly** before Free Tier expires
4. **Use AWS Cost Calculator** for planning

## Upgrading Beyond Free Tier

When ready to scale beyond Free Tier:

1. Enable disabled features in config files
2. Increase resource limits
3. Enable monitoring and alerting
4. Add backup and security features
5. Consider reserved instances for cost optimization

## Free Tier Limits Summary

| Service | Free Tier Limit | Our Configuration |
|---------|----------------|-------------------|
| DynamoDB | 25 GB storage, 25 RCU/WCU | PAY_PER_REQUEST |
| SES | 62,000 emails/month | 200 emails/month |
| Cognito | 50,000 MAU | 50,000 MAU limit |
| S3 | 5 GB storage, 20,000 requests | 5 GB, 20,000 requests |
| Lambda | 1M requests, 400,000 GB-seconds | 128MB, limited timeout |
| API Gateway | 1M requests | 1M requests |
| CloudWatch | 10 metrics, 5GB logs | 7-day retention |

## Important Notes

- Free Tier is available for **12 months** from AWS account creation
- Some services like DynamoDB have **always free** tiers
- Monitor usage to avoid unexpected charges
- Test with small datasets initially
- Scale gradually as user base grows

## Support and Resources

- [AWS Free Tier Documentation](https://aws.amazon.com/free/)
- [AWS Cost Management](https://aws.amazon.com/aws-cost-management/)
- [DynamoDB Free Tier](https://aws.amazon.com/dynamodb/pricing/)
- [SES Pricing](https://aws.amazon.com/ses/pricing/)
