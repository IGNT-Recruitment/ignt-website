# Supabase Setup Guide for IGNT Recruitment Website

Complete step-by-step instructions to configure your Supabase backend for the IGNT recruitment platform.

---

## Prerequisites

Before starting, ensure you have:
- A Supabase account (sign up at https://supabase.com)
- A new Supabase project created
- Access to your project's SQL Editor
- Access to your project's Settings → API page

---

## Step 1: Create the Database Schema

### 1.1 Navigate to SQL Editor

1. Log into your Supabase project
2. Click **SQL Editor** in the left sidebar
3. Click **New Query**

### 1.2 Create the Leads Table

Copy and paste the following SQL into the SQL Editor and click **Run**:

```sql
CREATE TABLE IF NOT EXISTS public.leads (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type        text NOT NULL CHECK (type IN ('werkgever', 'kandidaat')),
  name        text NOT NULL,
  email       text NOT NULL,
  phone       text,
  company     text,
  cv_url      text,
  answers     jsonb,
  created_at  timestamptz NOT NULL DEFAULT now()
);
```

**What this creates:**
- `id`: Unique identifier (auto-generated UUID)
- `type`: Either 'werkgever' (employer) or 'kandidaat' (candidate)
- `name`: Contact name
- `email`: Email address (required)
- `phone`: Phone number (optional)
- `company`: Company name (for werkgevers)
- `cv_url`: URL to uploaded CV in storage (for kandidaten)
- `answers`: JSON data for form responses
- `created_at`: Timestamp when record was created

### 1.3 Create Indexes (Performance)

Copy and paste the following into a new SQL query and click **Run**:

```sql
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_type ON public.leads(type);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
```

**Why:** Indexes speed up queries by email, type, and creation date.

---

## Step 2: Enable Row Level Security (RLS)

### 2.1 Enable RLS on the Leads Table

Copy and paste into a new SQL query and click **Run**:

```sql
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
```

### 2.2 Create RLS Policies

Copy and paste **each** policy below into separate SQL queries and run them:

**Policy 1: Allow Anonymous Insert (Form Submissions)**
```sql
CREATE POLICY "Allow anonymous inserts"
  ON public.leads
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

**Policy 2: Allow Service Role Full Access (Admin)**
```sql
CREATE POLICY "Service role full access"
  ON public.leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
```

**Policy 3: Allow Anonymous Select (Read Own Data)**
```sql
CREATE POLICY "Allow anonymous select"
  ON public.leads
  FOR SELECT
  TO anon
  USING (true);
```

**Why RLS matters:**
- RLS (Row Level Security) protects your data
- Anonymous users can only submit forms and read public data
- Service role (backend) has full access for admin operations
- No data is exposed unless explicitly allowed by policy

---

## Step 3: Configure Storage for CV Uploads

### 3.1 Create Storage Bucket via Dashboard

1. Go to **Storage** in the left sidebar
2. Click **New bucket**
3. Enter these settings:
   - **Bucket name**: `cv-uploads`
   - **Visibility**: Private
   - Click **Create bucket**

### 3.2 Configure Bucket Security Settings

1. Click on the `cv-uploads` bucket
2. Click **Settings** (⚙️ icon)
3. Set these limits:
   - **File size limit**: 5 MB
   - **Allowed MIME types**: 
     - `application/pdf`
     - `application/msword`
     - `application/vnd.openxmlformats-officedocument.wordprocessingml.document`

### 3.3 Enable Storage RLS Policies

Go to **SQL Editor** and run these policies:

**Policy 1: Allow Anonymous Upload**
```sql
CREATE POLICY "Allow anonymous uploads"
  ON storage.objects
  FOR INSERT
  TO anon
  WITH CHECK (bucket_id = 'cv-uploads');
```

**Policy 2: Allow Service Role Access**
```sql
CREATE POLICY "Service role full access"
  ON storage.objects
  FOR ALL
  TO service_role
  USING (bucket_id = 'cv-uploads')
  WITH CHECK (bucket_id = 'cv-uploads');
```

---

## Step 4: Gather Your Credentials

### 4.1 Get Your Project Credentials

1. Go to **Settings** → **API** in your Supabase project
2. Copy and save the following:

**Project URL:**
```
https://[your-project-id].supabase.co
```
(Look under "Project URL" section)

**Anon Public Key:**
```
[Look under "API Keys" → "anon public"]
```

**Service Role Secret:**
```
[Look under "API Keys" → "service_role"]
```

⚠️ **WARNING:** Never commit the Service Role Secret to version control. Store it only in `.env.local` (which should be in .gitignore).

### 4.2 Gather Other Required Credentials

**Cookiebot ID:**
- This is a separate service (not Supabase)
- Obtain from your Cookiebot account (https://cookiebot.com)
- Format: A UUID string

---

## Step 5: Configure Environment Variables

### 5.1 Create `.env.local` in Your Project Root

Create a file named `.env.local` in the root of your project (same level as package.json):

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://[your-project-id].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-anon-public-key]

# Supabase Service Role (NEVER expose to client)
SUPABASE_SERVICE_ROLE_KEY=[your-service-role-secret]

# Cookiebot Configuration
NEXT_PUBLIC_COOKIEBOT_ID=[your-cookiebot-id]
```

**Replace:**
- `[your-project-id]` with your actual project ID from Supabase URL
- `[your-anon-public-key]` with the Anon Public Key from Step 4
- `[your-service-role-secret]` with the Service Role Secret
- `[your-cookiebot-id]` with your Cookiebot ID

### 5.2 Ensure `.env.local` is in `.gitignore`

Make sure your `.gitignore` includes:
```
.env.local
.env.*.local
```

This prevents secrets from being committed to version control.

---

## Step 6: Test Your Setup

### 6.1 Verify Database Connection

Run this in your application to test the connection:

```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Test query
const { data, error } = await supabase
  .from('leads')
  .select('*')
  .limit(1);

if (error) {
  console.error('Connection failed:', error);
} else {
  console.log('Connection successful!');
}
```

### 6.2 Verify Storage Configuration

Test file upload capability:

```javascript
const testFile = new File(['test'], 'test.pdf', { type: 'application/pdf' });

const { data, error } = await supabase.storage
  .from('cv-uploads')
  .upload(`test/${Date.now()}-test.pdf`, testFile);

if (error) {
  console.error('Upload failed:', error);
} else {
  console.log('Storage working:', data);
}
```

---

## Troubleshooting

### RLS Policy Errors

**Error:** "new row violates row-level security policy"

**Solution:** Ensure the correct RLS policy is enabled for your use case. Check:
1. Policy is created for the correct table
2. Policy uses correct role (anon, service_role, etc.)
3. WITH CHECK clause matches your data

### Storage Upload Fails

**Error:** "Bucket not found" or "Permission denied"

**Solution:**
1. Verify bucket name is exactly `cv-uploads` (lowercase)
2. Check RLS policies are enabled on storage.objects
3. Verify MIME type of file being uploaded is in allowed list

### Connection Issues

**Error:** "Failed to connect" or "Network error"

**Solution:**
1. Verify Project URL is correct (https, not http)
2. Check Anon Public Key is valid
3. Ensure NEXT_PUBLIC_ prefix on public environment variables
4. Restart dev server after changing .env.local

---

## Quick Reference Checklist

- [ ] Created leads table with correct schema
- [ ] Created indexes on email, type, created_at
- [ ] Enabled RLS on leads table
- [ ] Created RLS insert policy (anonymous)
- [ ] Created RLS service role policy
- [ ] Created cv-uploads storage bucket
- [ ] Configured storage bucket security settings
- [ ] Created storage RLS policies
- [ ] Gathered Project URL and API keys
- [ ] Created .env.local with all credentials
- [ ] Added .env.local to .gitignore
- [ ] Tested database connection
- [ ] Tested storage upload

---

## Security Best Practices

1. **Never commit .env.local** — Add to .gitignore
2. **Use Service Role key only on backend** — Never expose to client
3. **Anon Public Key is safe for client** — It's publicly visible in requests anyway
4. **Rotate keys periodically** — Especially if exposed
5. **Monitor RLS policies** — Regularly review what access levels are allowed
6. **Use signed URLs for storage** — Don't expose raw bucket URLs

---

## Next Steps

Once setup is complete, you can:
1. Create API routes to handle form submissions
2. Implement CV upload functionality
3. Build admin dashboard to view leads
4. Add email notifications for new submissions
5. Integrate with CRM or recruitment tools

For more help, see:
- Supabase Docs: https://supabase.com/docs
- Storage Guide: https://supabase.com/docs/guides/storage
- RLS Guide: https://supabase.com/docs/guides/auth/row-level-security
