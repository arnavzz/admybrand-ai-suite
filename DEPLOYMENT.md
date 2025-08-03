# 🚀 Deployment Guide - ADmyBRAND AI Suite

This guide covers deployment options for the ADmyBRAND AI Suite landing page.

## 📋 Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Build runs successfully (`npm run build`)
- [ ] All components render properly
- [ ] Mobile responsiveness tested
- [ ] Performance optimized
- [ ] SEO metadata configured
- [ ] Contact forms tested
- [ ] Analytics configured (optional)

## 🌐 Deployment Options

### 1. Vercel (Recommended) ⭐

**Why Vercel?**
- Seamless Next.js integration
- Automatic deployments from Git
- Global CDN and edge functions
- Built-in analytics and performance monitoring

**Steps:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Configure environment variables in Vercel dashboard
5. Deploy automatically

**Environment Variables:**
```bash
NEXT_PUBLIC_APP_NAME=ADmyBRAND AI Suite
NEXT_PUBLIC_APP_URL=https://your-domain.com
# Add other variables from env.example
```

**Custom Domain:**
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

### 2. Netlify

**Steps:**
1. Build the project: `npm run build`
2. Drag and drop the `out` folder to Netlify
3. Or connect your Git repository for automatic deployments

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `out`
- Functions directory: `netlify/functions` (if using)

### 3. AWS Amplify

**Steps:**
1. Connect your Git repository
2. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: out
       files:
         - '**/*'
   ```

### 4. Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["npm", "start"]
```

**Deploy:**
```bash
docker build -t admybrand-ai-suite .
docker run -p 3000:3000 admybrand-ai-suite
```

### 5. Traditional Hosting (Static Export)

**For static hosting providers like GitHub Pages:**

1. Add to `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

2. Build and export:
```bash
npm run build
```

3. Upload the `out` folder to your hosting provider

## 🔧 Environment Configuration

### Required Variables
```bash
NEXT_PUBLIC_APP_NAME="ADmyBRAND AI Suite"
NEXT_PUBLIC_APP_URL="https://your-domain.com"
```

### Optional Variables
```bash
# Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_GTM_ID="GTM-XXXXXXX"

# Form Handling
CONTACT_FORM_EMAIL="hello@admybrand.com"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@admybrand.com"
SMTP_PASSWORD="your-app-password"

# CRM Integration
HUBSPOT_API_KEY="your-hubspot-api-key"
SALESFORCE_API_KEY="your-salesforce-api-key"
```

## 🏗️ CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm run test
      
    - name: Build project
      run: npm run build
      
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📊 Performance Optimization

### Before Deployment:

1. **Optimize Images:**
   ```bash
   # Use Next.js Image component
   import Image from 'next/image'
   ```

2. **Bundle Analysis:**
   ```bash
   npm run analyze
   ```

3. **Lighthouse Audit:**
   - Run in Chrome DevTools
   - Aim for 90+ scores in all categories

4. **Core Web Vitals:**
   - LCP < 2.5s
   - FID < 100ms
   - CLS < 0.1

## 🔍 Monitoring & Analytics

### 1. Vercel Analytics
```javascript
// next.config.js
module.exports = {
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP']
  }
}
```

### 2. Google Analytics 4
```javascript
// Add to app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  )
}
```

### 3. Error Monitoring
Consider integrating:
- Sentry for error tracking
- LogRocket for user session recording
- Hotjar for user behavior analytics

## 🛡️ Security Headers

Add to `next.config.js`:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

## 🎯 SEO Optimization

### 1. Sitemap Generation
Create `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ai.admybrand.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

### 2. Robots.txt
Create `app/robots.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ai.admybrand.com/sitemap.xml',
  }
}
```

## 🔄 Post-Deployment

### 1. Testing
- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility
- [ ] Performance scores (Lighthouse)

### 2. Monitoring Setup
- [ ] Analytics tracking
- [ ] Error monitoring
- [ ] Performance monitoring
- [ ] Uptime monitoring

### 3. SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Verify social media cards
- [ ] Test structured data

## 📞 Support

For deployment issues:
- **Documentation**: [docs.admybrand.com](https://docs.admybrand.com)
- **Support**: hello@admybrand.com
- **Issues**: [GitHub Issues](https://github.com/admybrand/ai-suite/issues)

---

**Happy Deploying! 🚀**