# IGNT Brand Component Library

Complete component library for the IGNT Recruitment Website. All components follow the specifications in `BRANDING_GUIDE.md`.

## Components Overview

### 1. PrimaryButton (REF-004)
**Purpose:** Primary call-to-action button with neon glow effect.

**Features:**
- Transparent background with purple border (2-3px)
- Fully rounded pill shape (50px border-radius)
- Neon purple glow effect
- Hover: glow intensifies, text shifts to magenta
- Active: fills with purple-magenta gradient
- Disabled: opacity 0.4, no glow

**Props:**
```typescript
interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof primaryButtonVariants> {
  asChild?: boolean;
  size?: 'sm' | 'default' | 'lg';
}
```

**Usage:**
```tsx
<PrimaryButton size="default">Get Started</PrimaryButton>
<PrimaryButton size="lg" disabled>Disabled</PrimaryButton>
```

---

### 2. SecondaryButton (REF-005)
**Purpose:** Secondary CTA button with solid magenta gradient.

**Features:**
- Gradient fill (#7C3AED → #D946EF)
- 2px purple-light border
- Fully rounded pill shape
- Magenta glow effect
- Hover: scales to 1.05
- Active: reversed gradient (#A855F7 → #7C3AED)
- Disabled: opacity 0.4

**Props:**
```typescript
interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof secondaryButtonVariants> {
  asChild?: boolean;
  size?: 'sm' | 'default' | 'lg';
}
```

**Usage:**
```tsx
<SecondaryButton size="default">Ding-Ding!</SecondaryButton>
<SecondaryButton size="sm">Join Now</SecondaryButton>
```

---

### 3. BrandCard (REF-007)
**Purpose:** Feature card container with dark background and subtle glow on hover.

**Features:**
- Dark background (#1A1F3A)
- Subtle purple border (rgba(124, 58, 237, 0.3))
- Border radius: 16-24px (responsive)
- Padding: 24-32px (responsive)
- Card shadow by default
- Optional hover effect: scale 1.02 + purple glow
- Full children support

**Props:**
```typescript
interface BrandCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean; // default: true
}
```

**Usage:**
```tsx
<BrandCard>
  <h3>Feature Title</h3>
  <p>Feature description...</p>
</BrandCard>

<BrandCard hover={false}>
  <p>Static card without hover effect</p>
</BrandCard>
```

---

### 4. ProgressSteps (REF-006)
**Purpose:** Multi-step progress indicator with circular states.

**Features:**
- Circular steps (48-56px diameter, responsive)
- States:
  - Completed: purple background
  - Active: magenta with purple border + glow
  - Upcoming: transparent with gray border
- Connecting lines with state-aware colors
- Step labels below circles
- Fully responsive
- Accessible step numbering

**Props:**
```typescript
interface ProgressStepsProps {
  steps: string[];          // Array of step labels
  currentStep: number;      // 0-indexed current step
}
```

**Usage:**
```tsx
<ProgressSteps
  steps={["Profile", "Skills", "Interview", "Offer"]}
  currentStep={1}
/>
```

---

### 5. GradientText
**Purpose:** Inline gradient text with purple-to-magenta gradient.

**Features:**
- Purple to magenta gradient (#7C3AED → #D946EF)
- Uses `bg-clip-text` for text gradient effect
- Transparent text fill
- Works with any font size

**Props:**
```typescript
interface GradientTextProps
  extends React.HTMLAttributes<HTMLSpanElement> {}
```

**Usage:**
```tsx
<h1>
  Welcome to <GradientText>IGNT</GradientText> Recruitment
</h1>

<p>
  Our <GradientText className="font-bold">AI-powered</GradientText> platform
</p>
```

---

### 6. VonkSparkle
**Purpose:** Subtle micro-animation with floating magenta sparkles.

**Features:**
- Framer-motion based animation
- 5 staggered sparkle particles
- Infinite loop with fade + scale animation
- Duration: 1.5s per cycle
- Delay: 0.15s between sparkles
- Pointer-events: none (doesn't interfere with interactions)

**Props:**
```typescript
// No props - use as simple animation decorator
```

**Usage:**
```tsx
<div className="relative">
  <button>Explore</button>
  <VonkSparkle />
</div>
```

---

### 7. Navbar
**Purpose:** Responsive navigation bar with mobile menu support.

**Features:**
- Fixed positioning at top (z-50)
- Dark background with subtle border
- Logo/branding on left
- Navigation links with active state highlighting
- Active links show purple underline + glow
- Responsive mobile menu toggle
- Accessible hamburger menu
- Mobile menu slides down below navbar

**Props:**
```typescript
interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  links?: Array<{
    href: string;
    label: string;
    active?: boolean;
  }>;
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}
```

**Usage:**
```tsx
<Navbar
  logo={<span className="font-bold">IGNT</span>}
  links={[
    { href: "/", label: "Home", active: true },
    { href: "/about", label: "About" },
    { href: "/join", label: "Join" },
  ]}
/>
```

---

### 8. Footer
**Purpose:** Application footer with contact info, links, and cookie notice.

**Features:**
- Dark background with subtle border
- Three-column layout (responsive)
- Logo/branding section
- Contact information (email, phone)
- Legal links (privacy, terms)
- Copyright notice
- Optional cookie notice banner
- Dismissible cookie notice with animation

**Props:**
```typescript
interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  contactEmail?: string;            // default: ramon@ignt.ai
  contactPhone?: string;            // default: +31 (0)6 1234 5678
  privacyHref?: string;             // default: /privacy
  cookieNotice?: boolean;           // default: true
  onCookieClose?: () => void;       // callback when cookie notice is dismissed
}
```

**Usage:**
```tsx
<Footer
  contactEmail="hello@ignt.ai"
  contactPhone="+1 (555) 123-4567"
  privacyHref="/privacy"
  cookieNotice={true}
/>
```

---

## Color System

All components use custom Tailwind colors defined in `tailwind.config.ts`:

| Variable | Hex Code | Usage |
|----------|----------|-------|
| `bg-primary` | #0A0E27 | Main background |
| `bg-secondary` | #1A1F3A | Card backgrounds |
| `accent-purple` | #7C3AED | Primary accent |
| `accent-magenta` | #D946EF | Active/emphasis states |
| `text-primary` | #FFFFFF | Main text |
| `text-secondary` | #A0AEC0 | Secondary text |
| `text-tertiary` | #718096 | Disabled text |

## Gradients

| Name | Value | Usage |
|------|-------|-------|
| `bg-gradient-primary` | linear-gradient(135deg, #7C3AED, #D946EF) | Hero, buttons |
| `bg-gradient-feature` | linear-gradient(135deg, #1E3A8A, #7C3AED) | Feature cards |
| `bg-gradient-reverse` | linear-gradient(135deg, #A855F7, #7C3AED) | Active states |

## Shadows (Glows)

| Name | Value | Usage |
|------|-------|-------|
| `shadow-glow-purple` | 0 0 20px rgba(124, 58, 237, 0.6) | Default glow |
| `shadow-glow-magenta` | 0 0 30px rgba(217, 70, 239, 0.5) | Active states |
| `shadow-glow-intense` | 0 0 40px rgba(124, 58, 237, 0.8) | Hover/focus |
| `shadow-card` | 0 10px 30px rgba(0, 0, 0, 0.3) | Card depth |

## Responsive Breakpoints

- **Mobile:** 0-767px
- **Tablet (md):** 768px+
- **Desktop (lg):** 1024px+
- **Wide:** 1280px+

All components include responsive utilities (e.g., `md:px-8`, `md:text-lg`).

## Accessibility

All components follow WCAG AA standards:

- **Color Contrast:** 4.5:1 minimum for body text
- **Touch Targets:** 44×44px minimum for interactive elements
- **Focus Indicators:** Neon glow effect for keyboard navigation
- **Motion:** Support for `prefers-reduced-motion`
- **Semantic HTML:** Proper button/link types
- **ARIA Labels:** Icon buttons labeled

## Best Practices

### Import All at Once
```tsx
import {
  PrimaryButton,
  SecondaryButton,
  BrandCard,
  ProgressSteps,
  GradientText,
  VonkSparkle,
  Navbar,
  Footer,
} from '@/components/brand';
```

### Use Responsive Classes
```tsx
<BrandCard className="p-6 md:p-8 md:rounded-2xl">
  <h2 className="text-2xl md:text-4xl">Responsive Title</h2>
</BrandCard>
```

### Combine Components
```tsx
<Navbar links={[...]} />
<main className="pt-20">
  {/* Page content */}
  <BrandCard>
    <h1>
      Welcome to <GradientText>IGNT</GradientText>
    </h1>
    <PrimaryButton>Get Started</PrimaryButton>
  </BrandCard>
</main>
<Footer />
```

### Animation Support
```tsx
// VonkSparkle requires framer-motion
import { VonkSparkle } from '@/components/brand';

<button className="relative">
  Click Me
  <VonkSparkle />
</button>
```

## TypeScript Support

All components are fully typed with React types:
- Proper `forwardRef` usage
- Full prop interface definitions
- HTMLElement attribute support
- Class variance authority for variant handling

## Version

- **Version:** 1.0
- **Last Updated:** 2026-04-07
- **Reference:** BRANDING_GUIDE.md (REF-004 through REF-007, REF-001 to REF-003)
