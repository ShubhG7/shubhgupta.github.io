# Security Guide - ShubhGPT Portfolio

## 🔐 Security Features Implemented

### API Security
- ✅ **Environment Variables**: API keys stored securely in environment variables
- ✅ **Input Validation**: Message length and type validation
- ✅ **Bot Protection**: Basic user-agent filtering
- ✅ **Error Handling**: Sanitized error messages in production
- ✅ **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.

### Application Security
- ✅ **XSS Protection**: Content Security Policy headers
- ✅ **Clickjacking Protection**: X-Frame-Options header
- ✅ **MIME Sniffing Protection**: X-Content-Type-Options header
- ✅ **Referrer Policy**: Controlled referrer information
- ✅ **Permissions Policy**: Restricted browser permissions

## 🛡️ Security Checklist for Deployment

### Before Deployment
- [ ] Remove any hardcoded API keys or secrets
- [ ] Verify `.env.local` is in `.gitignore`
- [ ] Set up environment variables on deployment platform
- [ ] Test API key restrictions in Google Cloud Console
- [ ] Review all console.log statements for sensitive data
- [ ] Ensure error messages don't expose internal details

### API Key Security
- [ ] Create separate API keys for development and production
- [ ] Set up HTTP referrer restrictions in Google Cloud Console
- [ ] Enable API key restrictions for specific APIs only
- [ ] Set up billing alerts to monitor usage
- [ ] Regularly rotate API keys (recommended: every 90 days)

### Deployment Platform Security
- [ ] Enable HTTPS/SSL certificates
- [ ] Set up proper CORS policies
- [ ] Configure security headers
- [ ] Enable DDoS protection if available
- [ ] Set up monitoring and alerting

## 🚨 Security Monitoring

### What to Monitor
- API usage patterns and anomalies
- Failed authentication attempts
- Unusual traffic patterns
- Error rates and types
- Response times and performance

### Recommended Tools
- **Google Cloud Console**: API usage monitoring
- **Vercel Analytics**: Performance and security insights
- **Sentry**: Error tracking and monitoring
- **Uptime Robot**: Availability monitoring

## 🔧 Additional Security Measures (Optional)

### Rate Limiting
Consider implementing rate limiting for production:
```typescript
// Example: Simple in-memory rate limiting
const rateLimiter = new Map();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 50; // Max requests per window
  
  const requests = rateLimiter.get(ip) || [];
  const validRequests = requests.filter((time: number) => now - time < windowMs);
  
  if (validRequests.length >= maxRequests) {
    return false;
  }
  
  validRequests.push(now);
  rateLimiter.set(ip, validRequests);
  return true;
}
```

### Content Security Policy
For enhanced security, consider implementing a strict CSP:
```typescript
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;
```

### Input Sanitization
For additional protection against XSS:
```bash
yarn add dompurify
yarn add @types/dompurify
```

## 🚫 Security Don'ts

### Never Do This
- ❌ Commit API keys to version control
- ❌ Log sensitive information to console
- ❌ Expose internal error details to users
- ❌ Use the same API key for development and production
- ❌ Skip input validation on API endpoints
- ❌ Ignore security headers
- ❌ Use HTTP in production (always use HTTPS)

### API Key Management
- ❌ Share API keys in chat, email, or documentation
- ❌ Use overly permissive API key restrictions
- ❌ Ignore API usage monitoring and alerts
- ❌ Use API keys without expiration policies

## 🔍 Security Testing

### Before Going Live
1. **Test API Key Restrictions**
   - Verify keys work only from allowed domains
   - Test that restricted keys reject unauthorized requests

2. **Penetration Testing**
   - Test for XSS vulnerabilities
   - Check for SQL injection (if using databases)
   - Verify CSRF protection

3. **Load Testing**
   - Test API rate limits
   - Verify performance under load
   - Check for resource exhaustion attacks

### Tools for Testing
- **OWASP ZAP**: Web application security scanner
- **Burp Suite**: Web vulnerability scanner
- **Lighthouse**: Security and performance audits
- **Security Headers**: Check HTTP security headers

## 📞 Incident Response

### If Security Issue Detected
1. **Immediate Actions**
   - Rotate compromised API keys immediately
   - Review access logs for suspicious activity
   - Temporarily disable affected features if necessary

2. **Investigation**
   - Identify the scope of the breach
   - Document all findings
   - Determine root cause

3. **Recovery**
   - Implement fixes for identified vulnerabilities
   - Update security measures
   - Monitor for continued suspicious activity

4. **Prevention**
   - Review and update security policies
   - Implement additional monitoring
   - Conduct security training if needed

## 📚 Security Resources

### Documentation
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)
- [Google Cloud Security](https://cloud.google.com/security)

### Best Practices
- [Web Security Guidelines](https://web.dev/security/)
- [API Security Best Practices](https://owasp.org/www-project-api-security/)
- [Node.js Security Checklist](https://blog.risingstack.com/node-js-security-checklist/)

---

**Remember**: Security is an ongoing process, not a one-time setup. Regularly review and update your security measures as your application grows and evolves.
