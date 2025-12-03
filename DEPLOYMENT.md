# Deployment Guide - ShubhGPT Portfolio

This guide will help you deploy your portfolio website with the ShubhGPT chat feature to various platforms.

## 🔐 Environment Variables

Before deploying, you need to set up the following environment variables:

### Required Variables
```bash
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

### How to Get Your Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the generated key

## 🚀 Deployment Platforms

### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Install Vercel CLI (optional)
   npm i -g vercel
   
   # Deploy from your project directory
   vercel
   ```

2. **Set Environment Variables**
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add: `GEMINI_API_KEY` with your API key value
   - Set for: Production, Preview, and Development

3. **Deploy**
   - Push to your main branch
   - Vercel will automatically deploy

### Netlify

1. **Build Settings**
   - Build command: `yarn build`
   - Publish directory: `.next`

2. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add `GEMINI_API_KEY` with your API key

3. **Deploy**
   - Connect your GitHub repository
   - Netlify will handle the rest

### Railway

1. **Deploy**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Login and deploy
   railway login
   railway link
   railway up
   ```

2. **Set Environment Variables**
   ```bash
   railway variables set GEMINI_API_KEY=your_api_key_here
   ```

### Docker Deployment

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   
   COPY . .
   RUN npm run build
   
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and Run**
   ```bash
   docker build -t shubh-portfolio .
   docker run -p 3000:3000 -e GEMINI_API_KEY=your_key_here shubh-portfolio
   ```

## 🔒 Security Best Practices

### Environment Variables
- ✅ **Never commit `.env.local` to version control**
- ✅ **Use different API keys for development and production**
- ✅ **Regularly rotate your API keys**
- ✅ **Set up API key restrictions in Google Cloud Console**

### API Key Restrictions (Recommended)
1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Find your API key
3. Set HTTP referrers restrictions:
   - `https://yourdomain.com/*`
   - `https://www.yourdomain.com/*`
   - `http://localhost:3000/*` (for development)

## 📊 Monitoring & Analytics

### Error Monitoring
Consider adding error monitoring services:
- **Sentry**: For error tracking
- **LogRocket**: For session replay
- **Vercel Analytics**: For performance monitoring

### API Usage Monitoring
- Monitor your Gemini API usage in Google Cloud Console
- Set up billing alerts to avoid unexpected charges
- Consider implementing rate limiting for production

## 🚦 Pre-Deployment Checklist

- [ ] Environment variables configured
- [ ] API key restrictions set up
- [ ] Build process tested locally (`yarn build`)
- [ ] All dependencies updated
- [ ] Error handling tested
- [ ] Chat functionality tested
- [ ] Mobile responsiveness verified
- [ ] SEO metadata updated
- [ ] Favicon and manifest files included

## 🔧 Troubleshooting

### Common Issues

1. **"Gemini API key not configured" Error**
   - Verify environment variable is set correctly
   - Check variable name spelling: `GEMINI_API_KEY`
   - Restart your deployment after adding variables

2. **API Rate Limiting**
   - Check your Google Cloud Console for quota limits
   - Implement client-side rate limiting if needed

3. **Build Failures**
   - Ensure all dependencies are in `package.json`
   - Check for TypeScript errors: `yarn type-check`
   - Verify environment variables are available during build

### Debug Commands
```bash
# Check environment variables (local)
echo $GEMINI_API_KEY

# Test build locally
yarn build

# Check for TypeScript errors
yarn type-check

# Test production build locally
yarn start
```

## 📈 Performance Optimization

### For Production
- Enable gzip compression
- Set up CDN for static assets
- Implement caching strategies
- Optimize images and fonts
- Consider implementing chat response caching

### Gemini API Optimization
- Use appropriate model (`gemini-2.0-flash` is fast and cost-effective)
- Implement response caching for common questions
- Consider implementing conversation context limits

## 🎯 Post-Deployment

1. **Test All Features**
   - Chat functionality
   - All page navigation
   - Mobile responsiveness
   - Contact form

2. **Set Up Monitoring**
   - Error tracking
   - Performance monitoring
   - API usage tracking

3. **SEO Optimization**
   - Submit sitemap to search engines
   - Set up Google Analytics
   - Verify meta tags and structured data

---

## 🆘 Support

If you encounter issues during deployment:

1. Check the deployment platform's documentation
2. Verify environment variables are correctly set
3. Test the build process locally first
4. Check browser console for client-side errors
5. Review server logs for API errors

Your ShubhGPT portfolio is now ready for production deployment! 🚀
