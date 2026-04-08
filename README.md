# IGNT — Recruitment Platform for MSPs

Production-ready Next.js 14 recruitment website for IGNT (Ignite), a recruitment platform targeting MKB Managed Service Providers.

## Tech Stack

- **Framework:** Next.js 14 (App Router, SSR)
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** Supabase (PostgreSQL + RLS)
- **Auth:** Supabase Auth SSR
- **Email:** Resend (transactional)
- **Forms:** React Hook Form + Zod
- **Hosting:** Vercel
- **Rate Limiting:** Upstash KV

## Project Structure

```
src/
├── app/                    # Next.js pages & layout
├── actions/                # Server Actions
├── lib/
│   ├── supabase/          # Database clients
│   ├── validations/       # Zod schemas
│   └── resend.ts          # Email config
├── components/
│   ├── brand/             # IGNT branded components
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Landing page sections
│   ├── funnel/            # Form & funnel components
│   ├── emails/            # React Email templates
│   └── ui/                # shadcn/ui primitives
└── types/                 # TypeScript definitions
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

**Required variables:**
- `NEXT_PUBLIC_SUPABASE_URL` — Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service role (server-only)
- `RESEND_API_KEY` — Resend transactional email API key
- `NEXT_PUBLIC_COOKIEBOT_ID` — Cookiebot consent management ID
- `KV_REST_API_URL` & `KV_REST_API_TOKEN` — Upstash Redis (rate limiting)

### 3. Set Up Supabase

1. Create a Supabase project at https://supabase.com
2. Copy the SQL schema from `SUPABASE_SETUP.md`
3. Run in Supabase SQL Editor to create tables and RLS policies
4. Create `cv-uploads` storage bucket (private, 5MB limit)

### 4. Configure Resend

1. Get API key from https://resend.com
2. Add `ramon@ignt.nl` as a verified sender domain
3. Store key in `.env.local`

### 5. Set Up Rate Limiting (Upstash)

1. Create Upstash Redis database at https://upstash.com
2. Get REST API credentials
3. Add to `.env.local`

### 6. Cookiebot Setup

1. Register at https://cookiebot.com
2. Get your Cookiebot ID
3. Add to `.env.local`

### 7. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## Deployment to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: IGNT recruitment website"
git push origin main
```

### 2. Create Vercel Project

1. Go to https://vercel.com
2. Import your GitHub repo
3. Add environment variables (from `.env.local`)
4. Deploy

### 3. Verify Deployment

- Check landing page: https://your-domain.vercel.app
- Test werkgever funnel: https://your-domain.vercel.app/werkgever
- Test kandidaat funnel: https://your-domain.vercel.app/kandidaat

## Key Features

### Landing Page (/)
- Hero section with "vonk" (spark) metaphor
- Feature highlights (4 cards)
- Employer & candidate teasers with CTA buttons
- Responsive design

### Employer Funnel (/werkgever)
- 5-question match scan
- Lead capture form (naam, bedrijf, email, telefoon)
- Automatic email confirmation
- Internal notification to ramon@ignt.nl

### Candidate Funnel (/kandidaat)
- 5-question match scan
- Lead capture form (naam, email, telefoon, optional CV)
- CV upload to Supabase Storage (signed URLs)
- Automatic email confirmation
- Internal notification

### Privacy Policy (/privacy)
- Static GDPR-compliant page
- Explains data handling

## Security

✅ **Server Actions Only** — No direct client-to-DB writes  
✅ **RLS Enabled** — Row-level security on all tables  
✅ **Zod Validation** — Server-side validation before DB writes  
✅ **Rate Limiting** — 5 requests per 10 minutes per IP  
✅ **No Secrets in Client** — Service role key server-only  
✅ **Signed URLs** — CV storage via signed upload URLs  
✅ **CSP Headers** — Content Security Policy configured  

## Database Schema

See `SUPABASE_SETUP.md` for full schema, RLS policies, and migration steps.

**Key table:** `leads`
- `id` — UUID
- `type` — 'werkgever' | 'kandidaat'
- `name`, `email`, `phone`, `company`, `cv_url`, `answers`
- `created_at` — Timestamp

## Branding

All design decisions follow `BRANDING_GUIDE.md`:
- Color palette: Dark navy (#0A0E27) + purple (#7C3AED) + magenta (#D946EF)
- Typography: System fonts, responsive scaling
- Components: REF-004 (neon buttons), REF-005 (gradient buttons), REF-006 (progress), REF-007 (cards)
- Animations: Vonk sparkles, fade-up, smooth transitions
- Accessibility: WCAG AA, focus indicators, motion preferences

## Email Templates

Located in `src/components/emails/`:
- `WerkgeverConfirmation.tsx` — Employer confirmation
- `KandidaatConfirmation.tsx` — Candidate confirmation
- `InternalNotification.tsx` — Internal dashboard email

All use React Email with IGNT branding.

## Development

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Type Check

```bash
npm run type-check
```

## Troubleshooting

### "Database connection failed"
- Check `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`
- Ensure Supabase project is active
- Verify RLS policies allow anonymous inserts

### "Email not sending"
- Check `RESEND_API_KEY` is valid
- Verify sender domain is registered in Resend
- Check internal notification email in `.env.local`

### "File upload fails"
- Confirm `cv-uploads` bucket exists and is private
- Check file size < 5MB
- Verify file type is PDF or Word

### "Rate limiting too strict"
- Update sliding window in `middleware.ts`
- Default: 5 requests / 10 minutes

## Contact

**Ramon van Rossen** — Business Cupido  
ramon@ignt.nl | 06 1994 2283 | Rotterdam

---

Generated with IGNT Masterguide & Next.js 14. Deploy to Vercel for production.
