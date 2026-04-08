# Funnel Components Guide

**Location:** `src/components/funnel/`  
**Type:** Client-side React components ('use client')  
**Status:** Production ready  
**Last Updated:** 2026-04-07

---

## 📋 Overview

The funnel component suite handles the complete recruitment flow:
1. **Multiple choice questions** - Gather candidate/recruiter preferences
2. **Progressive form filling** - Collect contact information
3. **File uploads** - Accept CV documents
4. **Success confirmation** - Show completion screen

All components follow the BRANDING_GUIDE.md design system.

---

## 🧩 Components

### 1. MultipleChoiceStep.tsx

**Purpose:** Display a single question with multiple choice options  
**Use Case:** Qualification questionnaire steps

**Props:**
```typescript
interface MultipleChoiceStepProps {
  question: string;           // Question text
  options: QuestionOption[];  // Answer options
  onAnswer: (value: string) => void;  // Callback on selection
  isSelected?: (value: string) => boolean;  // Check if option is selected
}

interface QuestionOption {
  value: string;  // Unique identifier
  label: string;  // Display text
}
```

**Features:**
- Smooth animations (Framer Motion)
- Dynamic selection styling
- Glow effects on hover/selection
- Responsive grid layout
- Keyboard accessible

**Example:**
```jsx
<MultipleChoiceStep
  question="Wat is uw specialisme?"
  options={[
    { value: 'frontend', label: 'Frontend Development' },
    { value: 'backend', label: 'Backend Development' },
    { value: 'fullstack', label: 'Full Stack' },
  ]}
  onAnswer={(value) => handleAnswer(value)}
  isSelected={(value) => selectedAnswer === value}
/>
```

---

### 2. FunnelShell.tsx

**Purpose:** Container managing the complete funnel flow  
**Use Case:** Wrap questions and forms to handle navigation

**Props:**
```typescript
interface FunnelShellProps {
  questions: FunnelQuestion[];  // All questions in sequence
  onComplete: (answers: Record<string, string>) => void;  // Callback on finish
  children?: React.ReactNode;  // Form component to render after questions
}

interface FunnelQuestion {
  id: string;       // Unique question ID
  question: string; // Question text
  options: QuestionOption[];  // Answer options
}
```

**Features:**
- Auto-advance between questions
- Progress bar with step indicators
- Form transition after questions complete
- Answer state management
- Animated transitions (AnimatePresence)

**Example:**
```jsx
<FunnelShell
  questions={[
    {
      id: 'role',
      question: 'Wat is uw rol?',
      options: [
        { value: 'hr', label: 'HR Manager' },
        { value: 'recruiter', label: 'Recruiter' },
      ],
    },
    {
      id: 'company_size',
      question: 'Bedrijfsgrootte?',
      options: [
        { value: 'small', label: 'Klein (1-50)' },
        { value: 'medium', label: 'Gemiddeld (50-250)' },
      ],
    },
  ]}
  onComplete={(answers) => console.log(answers)}
>
  <WerkgeverLeadForm />
</FunnelShell>
```

---

### 3. FileUploadInput.tsx

**Purpose:** React Hook Form controlled file input with progress  
**Use Case:** CV/document uploads in lead forms

**Props:**
```typescript
interface FileUploadInputProps {
  name: string;           // Form field name
  label?: string;         // Input label (default: 'Upload CV')
  accept?: string;        // File types (default: '.pdf,.doc,.docx')
  maxSize?: number;       // Max file size in bytes (default: 5MB)
  required?: boolean;     // Is field required? (default: false)
}
```

**Features:**
- React Hook Form integration (Controller)
- File type validation (PDF, Word)
- Size validation (5MB default)
- Upload progress bar
- File name display
- Success message on complete
- Error messages
- Disabled state during upload

**Example:**
```jsx
<FileUploadInput
  name="cv"
  label="Upload je CV"
  accept=".pdf,.doc,.docx"
  maxSize={5 * 1024 * 1024}
  required
/>
```

---

### 4. WerkgeverLeadForm.tsx

**Purpose:** Employer/recruiter lead capture form  
**Use Case:** Collect employer contact information after questions

**Props:**
```typescript
interface WerkgeverLeadFormProps {
  answers: Record<string, string>;  // Funnel question answers
  onSubmit?: () => void;            // Callback on successful submission
}
```

**Features:**
- React Hook Form with Zod validation
- Fields: Name, Company, Email, Phone (optional)
- Form provider wrapper for nested components
- Error messages (Dutch)
- Loading state during submission
- Error handling with user feedback
- Server action integration (submitWerkgever)
- Answer context preserved

**Validation:**
- Name: 2-100 characters
- Company: 2-100 characters
- Email: Valid email format
- Phone: Optional, valid phone format

**Example:**
```jsx
<WerkgeverLeadForm
  answers={{ role: 'recruiter', company_size: 'medium' }}
  onSubmit={() => showSuccessScreen()}
/>
```

---

### 5. KandidaatLeadForm.tsx

**Purpose:** Candidate lead capture form with CV upload  
**Use Case:** Collect candidate contact info and CV after questions

**Props:**
```typescript
interface KandidaatLeadFormProps {
  answers: Record<string, string>;  // Funnel question answers
  onSubmit?: () => void;            // Callback on successful submission
}
```

**Features:**
- React Hook Form with Zod validation
- Fields: Name, Email, Phone (optional), CV upload (required)
- Nested FileUploadInput component
- Error messages (Dutch)
- Loading state during submission
- Error handling with user feedback
- Server action integration (submitKandidaat)
- Answer context preserved
- Uses FormProvider for nested file input

**Validation:**
- Name: 2-100 characters
- Email: Valid email format
- Phone: Optional, valid phone format
- CV: Required, PDF/Word, max 5MB

**Example:**
```jsx
<KandidaatLeadForm
  answers={{ experience: 'senior', location: 'amsterdam' }}
  onSubmit={() => showSuccessScreen()}
/>
```

---

### 6. SuccessScreen.tsx

**Purpose:** Confirmation screen after successful submission  
**Use Case:** Show after form submission completes

**Props:**
```typescript
interface SuccessScreenProps {
  type: 'werkgever' | 'kandidaat';  // Customizes message
}
```

**Features:**
- Type-specific messages (employer vs candidate)
- Animated entrance with scale
- Pulsing emoji/sparkle effect
- Gradient text for title
- VonkSparkle decoration component
- Responsive text sizing
- Multi-line animations

**Messages:**

**Werkgever:**
- Title: "Bedankt! De vonk is ontstoken 🔥"
- Subtitle: "Ramon zal u binnenkort contacteren"
- Body: "Uw verzoek is ontvangen en we zullen u snel bereiken met de perfecte match."

**Kandidaat:**
- Title: "Profiel ontvangen! ✨"
- Subtitle: "We zoeken naar jouw perfecte match"
- Body: "Je zult snel van ons horen met passende vacatures in jouw richting."

**Example:**
```jsx
<SuccessScreen type="werkgever" />
// or
<SuccessScreen type="kandidaat" />
```

---

## 🔗 Integration Example

Complete funnel workflow:

```jsx
'use client';

import { useState } from 'react';
import { FunnelShell, WerkgeverLeadForm, SuccessScreen } from '@/components/funnel';

const WerkgeverFunnelPage = () => {
  const [isComplete, setIsComplete] = useState(false);

  const questions = [
    {
      id: 'role',
      question: 'Wat is uw rol?',
      options: [
        { value: 'hr', label: 'HR Manager' },
        { value: 'recruiter', label: 'Recruiter' },
        { value: 'hiring', label: 'Hiring Manager' },
      ],
    },
    {
      id: 'company_size',
      question: 'Hoe groot is uw bedrijf?',
      options: [
        { value: 'small', label: 'Klein (1-50)' },
        { value: 'medium', label: 'Gemiddeld (50-250)' },
        { value: 'large', label: 'Groot (250+)' },
      ],
    },
  ];

  if (isComplete) {
    return <SuccessScreen type="werkgever" />;
  }

  return (
    <FunnelShell
      questions={questions}
      onComplete={() => setIsComplete(true)}
    >
      <WerkgeverLeadForm onSubmit={() => setIsComplete(true)} />
    </FunnelShell>
  );
};

export default WerkgeverFunnelPage;
```

---

## 🎨 Styling & Theming

All components use Tailwind CSS with custom design tokens from BRANDING_GUIDE.md:

**Color Classes:**
- Background: `bg-bg-primary`, `bg-bg-secondary`, `bg-bg-tertiary`
- Text: `text-text-primary`, `text-text-secondary`, `text-text-tertiary`
- Accent: `border-accent-purple`, `text-accent-magenta`
- Shadows: `shadow-glow-purple`, `shadow-glow-magenta`, `shadow-glow-intense`

**Responsive Breakpoints:**
- Mobile: `md:` for tablets+
- Text scaling: `text-2xl md:text-3xl`
- Spacing: `gap-3 md:gap-4`

---

## 🔄 Form Submission Flow

### WerkgeverLeadForm
1. User fills form fields
2. Client-side Zod validation
3. FormData constructed with answers
4. `submitWerkgever` server action called
5. Supabase insert + email notifications
6. `onSubmit` callback triggers
7. Navigate to SuccessScreen

### KandidaatLeadForm
1. User fills form fields
2. User uploads CV file
3. Client-side Zod validation
4. FormData constructed with CV + answers
5. `submitKandidaat` server action called
6. CV uploaded to storage + metadata inserted
7. Email notifications sent
8. `onSubmit` callback triggers
9. Navigate to SuccessScreen

---

## 📝 Validation Schemas

Located in `src/lib/validations/`:

- **werkgever.schema.ts** - Employer form validation
- **kandidaat.schema.ts** - Candidate form validation

Both schemas include:
- Required field checks
- Length constraints (2-100 chars for names)
- Email format validation
- Phone number pattern validation
- File type/size validation (kandidaat only)

---

## 🌐 Server Actions

Located in `src/actions/`:

- **submitWerkgever.ts** - Employer submission handler
- **submitKandidaat.ts** - Candidate submission handler
- **getUploadUrl.ts** - CV file upload URL generation

---

## 🎯 Best Practices

1. **Always wrap forms in FunnelShell** for consistent UX
2. **Pass answers from FunnelShell to forms** to preserve context
3. **Handle onSubmit callback** to show SuccessScreen
4. **Use FormProvider** when nesting form inputs
5. **Validate early** - client-side with Zod, then server
6. **Show loading states** during submission
7. **Handle errors gracefully** with user-friendly messages
8. **Test responsive design** on mobile/tablet

---

## 🚀 Performance Notes

- Components use 'use client' for interactivity
- Framer Motion animations are GPU-accelerated
- React Hook Form minimizes re-renders
- File uploads show progress without blocking UI
- Form validation is instant (Zod on client)

---

## 📱 Accessibility

- All inputs have associated labels
- Error messages clearly identify issues
- Focus states use glow effects
- Touch targets ≥44×44px (button sizing)
- Keyboard navigation supported
- File inputs accept keyboard selection
- Motion animations respect prefers-reduced-motion (consider adding)

---

## 🐛 Common Issues & Solutions

### File Upload Not Working
- Check browser file API support
- Verify maxSize matches server limits
- Ensure FileUploadInput is inside FormProvider

### Form Not Submitting
- Verify validation schema matches form fields
- Check server action path (@/actions/...)
- Review browser console for errors
- Ensure FormData keys match server action expectations

### Animations Janky
- Disable in reduced-motion mode
- Use `mode="wait"` in AnimatePresence
- Optimize re-render paths

### Form Values Not Persisting
- Use React Hook Form `defaultValues`
- Verify Controller is properly connected
- Check FormProvider wrapper

---

## 📦 Dependencies

- `react-hook-form` - Form state management
- `@hookform/resolvers` - Zod integration
- `zod` - Schema validation
- `framer-motion` - Animations
- `clsx` & `tailwind-merge` - Class utilities

---

*Reference: BRANDING_GUIDE.md for design system details*
