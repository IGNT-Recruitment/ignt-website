/**
 * EXAMPLE FUNNEL PAGE IMPLEMENTATION
 * Shows how to use all funnel components together
 *
 * Location: app/funnel/werkgever/page.tsx (or any route)
 * Created: 2026-04-07
 */

'use client';

import { useState } from 'react';
import {
  FunnelShell,
  WerkgeverLeadForm,
  KandidaatLeadForm,
  SuccessScreen,
} from '@/components/funnel';

// ============================================
// EXAMPLE 1: WERKGEVER FUNNEL PAGE
// ============================================

export default function WerkgeverFunnelPage() {
  const [isComplete, setIsComplete] = useState(false);

  // Define your qualification questions
  const werkgeverQuestions = [
    {
      id: 'role',
      question: 'Wat is uw rol in het bedrijf?',
      options: [
        { value: 'hr_manager', label: 'HR Manager' },
        { value: 'recruiter', label: 'Recruiter' },
        { value: 'hiring_manager', label: 'Hiring Manager' },
        { value: 'founder', label: 'Founder/Director' },
      ],
    },
    {
      id: 'company_size',
      question: 'Hoe groot is uw bedrijf?',
      options: [
        { value: 'startup', label: 'Startup (1-20)' },
        { value: 'small', label: 'Klein (20-50)' },
        { value: 'medium', label: 'Gemiddeld (50-250)' },
        { value: 'large', label: 'Groot (250+)' },
      ],
    },
    {
      id: 'industry',
      question: 'In welke branche werkt u?',
      options: [
        { value: 'tech', label: 'Technologie' },
        { value: 'finance', label: 'Financiën' },
        { value: 'healthcare', label: 'Gezondheidszorg' },
        { value: 'retail', label: 'Retail' },
        { value: 'other', label: 'Overig' },
      ],
    },
    {
      id: 'hiring_needs',
      question: 'Wat is uw hoofddoel?',
      options: [
        { value: 'find_talent', label: 'Toptalent vinden' },
        { value: 'speed_up', label: 'Proces versnellen' },
        { value: 'reduce_cost', label: 'Kosten reduceren' },
        { value: 'all_above', label: 'Alles van het bovenstaande' },
      ],
    },
  ];

  // Show success screen after form submission
  if (isComplete) {
    return (
      <main className="min-h-screen bg-bg-primary px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <SuccessScreen type="werkgever" />
        </div>
      </main>
    );
  }

  // Show funnel with questions and form
  return (
    <main className="min-h-screen bg-bg-primary px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <FunnelShell
          questions={werkgeverQuestions}
          onComplete={() => setIsComplete(true)}
        >
          {/* This form receives answers from FunnelShell */}
          <WerkgeverLeadForm
            answers={{}} // Will be provided by FunnelShell
            onSubmit={() => setIsComplete(true)}
          />
        </FunnelShell>
      </div>
    </main>
  );
}

// ============================================
// EXAMPLE 2: KANDIDAAT FUNNEL PAGE
// ============================================

// For a candidate funnel, just swap the form and questions:
/*
export default function KandidaatFunnelPage() {
  const [isComplete, setIsComplete] = useState(false);

  const kandidaatQuestions = [
    {
      id: 'experience_level',
      question: 'Wat is je ervaringsniveau?',
      options: [
        { value: 'junior', label: 'Junior (0-2 jaar)' },
        { value: 'mid', label: 'Mid-level (2-5 jaar)' },
        { value: 'senior', label: 'Senior (5+ jaar)' },
      ],
    },
    {
      id: 'job_type',
      question: 'Wat voor werk zoek je?',
      options: [
        { value: 'fulltime', label: 'Fulltime' },
        { value: 'parttime', label: 'Parttime' },
        { value: 'freelance', label: 'Freelance' },
        { value: 'flexible', label: 'Flexibel' },
      ],
    },
    {
      id: 'location_preference',
      question: 'Waar wil je werken?',
      options: [
        { value: 'remote', label: 'Volledig remote' },
        { value: 'hybrid', label: 'Hybride' },
        { value: 'on_site', label: 'Op kantoor' },
      ],
    },
  ];

  if (isComplete) {
    return (
      <main className="min-h-screen bg-bg-primary px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <SuccessScreen type="kandidaat" />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bg-primary px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <FunnelShell
          questions={kandidaatQuestions}
          onComplete={() => setIsComplete(true)}
        >
          <KandidaatLeadForm
            answers={{}} // Will be provided by FunnelShell
            onSubmit={() => setIsComplete(true)}
          />
        </FunnelShell>
      </div>
    </main>
  );
}
*/

// ============================================
// USAGE NOTES
// ============================================

/**
 * HOW THE FUNNEL WORKS:
 *
 * 1. FunnelShell displays questions one by one
 *    - User selects an answer
 *    - Auto-advances to next question
 *    - Progress bar shows current step
 *
 * 2. After all questions answered:
 *    - Form component is shown (Werkgever or Kandidaat)
 *    - Answers are passed to form via props
 *    - User fills contact info (+ CV for kandidaat)
 *
 * 3. Form submission:
 *    - Client-side Zod validation
 *    - Server action called (submitWerkgever/submitKandidaat)
 *    - Success: onSubmit callback triggers
 *    - Error: Display message to user
 *
 * 4. Success screen:
 *    - Type-specific message shown
 *    - Animated celebration effect
 *    - Optional call-to-action or next steps
 *
 * CUSTOMIZE:
 * - Change questions and options for your needs
 * - Add more questions by extending the array
 * - Modify form fields in WerkgeverLeadForm/KandidaatLeadForm
 * - Customize success messages in SuccessScreen
 * - Add header/footer wrapper if needed
 */

// ============================================
// STYLING & RESPONSIVE DESIGN
// ============================================

/**
 * LAYOUT STRUCTURE:
 *
 * <main> - Full height dark background
 *   <max-w-4xl> - Centered container (1024px max)
 *     <FunnelShell> - Progressive question display
 *       <Form> - Contact info + validation
 *     <SuccessScreen> - Final confirmation
 *
 * RESPONSIVE BREAKPOINTS:
 * - Mobile (0-767px): Full width, stacked layout
 * - Tablet (768-1023px): Padded sides, larger text
 * - Desktop (1024px+): Max width container, optimized spacing
 *
 * All components use Tailwind classes:
 * - bg-bg-primary / bg-bg-secondary / bg-bg-tertiary
 * - text-text-primary / text-text-secondary / text-text-tertiary
 * - border-accent-purple / border-accent-magenta
 * - shadow-glow-purple / shadow-glow-magenta
 * - See BRANDING_GUIDE.md for complete color palette
 */

// ============================================
// SERVER ACTIONS INTEGRATION
// ============================================

/**
 * The form components call server actions automatically:
 *
 * WerkgeverLeadForm calls:
 *   POST @/actions/submitWerkgever
 *   - Takes: name, company, email, phone, answers
 *   - Returns: { success: true } or { success: false, errors: {...} }
 *   - Side effects: Insert to Supabase, send emails
 *
 * KandidaatLeadForm calls:
 *   POST @/actions/submitKandidaat
 *   - Takes: name, email, phone, cv (File), answers
 *   - Returns: { success: true } or { success: false, errors: {...} }
 *   - Side effects: Upload CV, insert to Supabase, send emails
 *
 * No need to handle API calls manually - FunnelShell handles it!
 */

// ============================================
// VALIDATION & ERROR HANDLING
// ============================================

/**
 * CLIENT VALIDATION (React Hook Form + Zod):
 * - Real-time validation as user types
 * - Error messages shown below each field
 * - Fields highlighted in red on error
 * - Form submission blocked until valid
 *
 * SERVER VALIDATION (Zod in server action):
 * - Re-validates all data
 * - Protects against invalid requests
 * - Returns structured error response
 *
 * ERROR DISPLAY:
 * - Individual field errors (inline)
 * - General form errors (dismissible banner)
 * - User-friendly Dutch messages
 */

// ============================================
// TESTING CHECKLIST
// ============================================

/**
 * ✓ Question flow works (auto-advances)
 * ✓ Progress bar updates
 * ✓ Form validation works (try invalid inputs)
 * ✓ File upload works (try different file types/sizes)
 * ✓ Form submission succeeds (check database)
 * ✓ Success screen appears
 * ✓ Responsive on mobile/tablet/desktop
 * ✓ Animations smooth (no jank)
 * ✓ Error messages clear
 * ✓ Loading states visible
 * ✓ All fields required (try submitting empty)
 * ✓ Email format validated
 * ✓ Phone format validated (optional field)
 * ✓ File size limit enforced (try 10MB file)
 * ✓ Browser back button doesn't lose progress
 */
