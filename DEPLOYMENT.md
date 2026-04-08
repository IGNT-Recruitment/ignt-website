# IGNT Website Deployment Guide

## Prerequisites

1. **GitHub Account**: Push code to GitHub
2. **Vercel Account**: Free tier available at https://vercel.com
3. **Environment Variables**: Gather these before deploying:
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
   - `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key
   - `RESEND_API_KEY` - Resend API key for email
   - `INTERNAL_NOTIFICATION_EMAIL` - Admin email (ramon@ignt.nl)

## Deployment Steps

### 1. Push to GitHub

```bash
# Stage all files
git add .

# Create initial commit
git commit -m "Initial commit: IGNT website with landing pages and forms"

# Add GitHub as remote (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Vercel will auto-detect Next.js settings ✓
5. Under "Environment Variables", add:
   - `NEXT_PUBLIC_SUPABASE_URL` = [your value]
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = [your value]
   - `SUPABASE_SERVICE_ROLE_KEY` = [your value]
   - `RESEND_API_KEY` = [your value]
   - `INTERNAL_NOTIFICATION_EMAIL` = ramon@ignt.nl
6. Click "Deploy"

Vercel will automatically build and deploy. You can watch the build progress in the dashboard.

### 3. Domain Setup

After deployment:
1. Go to your Vercel project settings
2. Go to "Domains"
3. Add your custom domain (`ignt.nl`)
4. Update DNS records as Vercel instructs

## Environment Variables Reference

See `ignt/.env.example` for the template. Never commit `.env.local` to git.

## Post-Deployment Checks

- [ ] Homepage loads at https://ignt.nl/
- [ ] `/voor-werkgevers` page loads
- [ ] `/voor-kandidaten` page loads
- [ ] `/over-ignt` page loads
- [ ] Forms can be submitted (with Supabase configured)
- [ ] Email confirmations work (with Resend configured)

## Rollback

If something goes wrong:
1. Vercel automatically keeps previous deployments
2. Go to Vercel project → Deployments → click any previous build → "Promote to Production"

## Support

For Vercel issues: https://vercel.com/support
For Next.js issues: https://nextjs.org/docs
