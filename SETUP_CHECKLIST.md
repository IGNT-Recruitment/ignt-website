# IGNT Setup Checklist

Complete this checklist to prepare for deployment.

## Local Setup
- [ ] Install Node.js v18+
- [ ] Clone repo / have access to code
- [ ] Run `npm install`
- [ ] Copy `.env.example` to `.env.local`

## Supabase Configuration
- [ ] Create Supabase project
- [ ] Run SQL schema migration
- [ ] Create `cv-uploads` storage bucket
- [ ] Copy Project URL to `.env.local`
- [ ] Copy Anon Public Key to `.env.local`
- [ ] Copy Service Role Key to `.env.local`
- [ ] Test database connection: `npm run dev`

## Resend Email Setup
- [ ] Create Resend account
- [ ] Create API key
- [ ] Verify domain for `ramon@ignt.nl`
- [ ] Add API key to `.env.local`
- [ ] Test email sending (run dev server, submit form)

## Upstash Rate Limiting (Optional)
- [ ] Create Upstash Redis database
- [ ] Copy REST API URL to `.env.local`
- [ ] Copy REST API Token to `.env.local`

## Cookiebot GDPR
- [ ] Register at Cookiebot
- [ ] Get Cookiebot ID
- [ ] Add to `.env.local`
- [ ] Test cookie consent banner on homepage

## Vercel Deployment
- [ ] Push code to GitHub
- [ ] Create Vercel project
- [ ] Add all env vars from `.env.local`
- [ ] Deploy main branch
- [ ] Verify deployment at https://your-domain.vercel.app

## Post-Deployment Testing
- [ ] Test landing page loads
- [ ] Test werkgever funnel (submit form)
- [ ] Test kandidaat funnel (submit form + file upload)
- [ ] Check email confirmations arrive
- [ ] Check internal notification arrives
- [ ] Verify privacy policy page
- [ ] Test mobile responsiveness
- [ ] Check Cookiebot consent banner

## Security Audit
- [ ] Run `npm run build` successfully
- [ ] Check no secrets in `src/` code
- [ ] Verify `.env.local` is in `.gitignore`
- [ ] Confirm service role key server-side only
- [ ] Test rate limiting (rapid form submissions)
- [ ] Check RLS policies in Supabase

## Launch Readiness
- [ ] All env vars configured
- [ ] All services connected
- [ ] All tests passing
- [ ] Documentation complete
- [ ] Contact info (Ramon) visible on site
- [ ] Privacy policy correct
- [ ] Ready for production traffic
