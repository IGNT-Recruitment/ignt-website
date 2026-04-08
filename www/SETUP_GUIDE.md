# IGNT Website Setup Guide

Complete setup instructions for the IGNT recruitment website with branded component library.

## Project Structure

```
www/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx          # Root layout with Navbar & Footer
│   │   └── page.tsx            # Example homepage using brand components
│   ├── components/
│   │   ├── brand/              # IGNT branded components
│   │   │   ├── PrimaryButton.tsx
│   │   │   ├── SecondaryButton.tsx
│   │   │   ├── BrandCard.tsx
│   │   │   ├── ProgressSteps.tsx
│   │   │   ├── GradientText.tsx
│   │   │   ├── VonkSparkle.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── index.ts
│   │   │   └── COMPONENT_GUIDE.md
│   │   ├── layout/             # Layout components (existing)
│   │   ├── sections/           # Page sections (existing)
│   │   ├── funnel/             # Funnel/form components (existing)
│   │   └── emails/             # Email templates (existing)
│   ├── lib/
│   │   ├── utils.ts            # CN utility for class merging
│   │   └── ...
│   └── styles/
│       └── globals.css         # Global styles & Tailwind directives
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind config with custom colors
├── next.config.ts              # Next.js config
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── postcss.config.js           # PostCSS config for Tailwind
└── .env.example                # Environment template
```

## Installation & Setup

### 1. Install Dependencies

```bash
cd www
npm install
# or
yarn install
```

### 2. Create Environment File

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration.

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see the site.

## Key Features of the Component Library

### Brand Components (`src/components/brand/`)

All components follow BRANDING_GUIDE.md specifications:

1. **PrimaryButton** (REF-004)
   - Transparent purple border with neon glow
   - Pill shape, magenta hover text
   - Active: filled with gradient

2. **SecondaryButton** (REF-005)
   - Solid magenta gradient
   - Scale 1.05 on hover
   - Reversed gradient when active

3. **BrandCard** (REF-007)
   - Dark background (#1A1F3A)
   - Subtle purple border
   - Optional hover effect (scale + glow)

4. **ProgressSteps** (REF-006)
   - Multi-step indicator with circular states
   - Completed (purple), Active (magenta), Upcoming (outlined)
   - Connecting lines with state awareness

5. **GradientText**
   - Purple-to-magenta inline gradient
   - Uses bg-clip-text for effect

6. **VonkSparkle**
   - Subtle micro-animation
   - 5 staggered magenta sparkles
   - Framer-motion powered

7. **Navbar**
   - Fixed position with dark background
   - Responsive mobile menu
   - Active link highlighting with purple glow

8. **Footer**
   - Contact info, legal links
   - Optional cookie notice
   - Responsive grid layout

## Using Components

### Basic Import

```typescript
import { PrimaryButton, BrandCard } from '@/components/brand';
```

### Example: Hero Section

```tsx
import { PrimaryButton, SecondaryButton, GradientText } from '@/components/brand';

export function Hero() {
  return (
    <section className="pt-32 pb-16 text-center">
      <h1 className="text-5xl font-bold">
        Welcome to <GradientText>IGNT</GradientText>
      </h1>
      <p className="text-lg text-text-secondary mt-4">
        AI-powered recruitment for your community
      </p>
      <div className="flex gap-4 justify-center mt-8">
        <PrimaryButton size="lg">Get Started</PrimaryButton>
        <SecondaryButton size="lg">Learn More</SecondaryButton>
      </div>
    </section>
  );
}
```

### Example: Feature Grid

```tsx
import { BrandCard } from '@/components/brand';

export function Features() {
  const features = [
    { title: 'Feature 1', description: '...' },
    { title: 'Feature 2', description: '...' },
    { title: 'Feature 3', description: '...' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature) => (
        <BrandCard key={feature.title}>
          <h3 className="font-semibold">{feature.title}</h3>
          <p className="text-text-secondary text-sm mt-2">
            {feature.description}
          </p>
        </BrandCard>
      ))}
    </div>
  );
}
```

## Color System

All colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  bg: {
    primary: '#0A0E27',      // Main background
    secondary: '#1A1F3A',    // Card backgrounds
    tertiary: '#0F1429',     // Tertiary background
  },
  accent: {
    purple: '#7C3AED',       // Primary accent
    magenta: '#D946EF',      // Active/emphasis
    'purple-light': '#A855F7', // Light variant
  },
  text: {
    primary: '#FFFFFF',      // Main text
    secondary: '#A0AEC0',    // Secondary text
    tertiary: '#718096',     // Disabled text
  },
}
```

## Available Gradients

```css
bg-gradient-primary     /* #7C3AED → #D946EF */
bg-gradient-feature     /* #1E3A8A → #7C3AED */
bg-gradient-reverse     /* #A855F7 → #7C3AED */
```

## Available Shadows (Glows)

```css
shadow-glow-purple      /* 0 0 20px rgba(124, 58, 237, 0.6) */
shadow-glow-magenta     /* 0 0 30px rgba(217, 70, 239, 0.5) */
shadow-glow-intense     /* 0 0 40px rgba(124, 58, 237, 0.8) */
shadow-card             /* 0 10px 30px rgba(0, 0, 0, 0.3) */
```

## Responsive Design

All components are responsive with Tailwind breakpoints:

- **Mobile-first** approach
- **md:** breakpoint at 768px
- **lg:** breakpoint at 1024px
- **xl:** breakpoint at 1280px

Example:
```tsx
<BrandCard className="p-6 md:p-8 md:rounded-2xl">
  <h2 className="text-2xl md:text-4xl">Title</h2>
</BrandCard>
```

## TypeScript & Type Safety

All components are fully typed:

```typescript
// PrimaryButton example
interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof primaryButtonVariants> {
  asChild?: boolean;
  size?: 'sm' | 'default' | 'lg';
}
```

## Accessibility

All components follow WCAG AA standards:

- **Color Contrast:** 4.5:1 minimum
- **Touch Targets:** 44×44px minimum
- **Focus Indicators:** Neon glow effect
- **Motion:** Respects `prefers-reduced-motion`
- **Semantic HTML:** Proper button/link usage
- **ARIA Labels:** Icon buttons labeled

## Global Styles

Base styles defined in `src/styles/globals.css`:

- Typography styles (h1-h3, p)
- Component utilities (.focus-visible-ring, .badge, .btn-icon)
- Accessibility support (prefers-reduced-motion)

## Production Build

```bash
npm run build
npm start
```

The build creates optimized assets in `.next/` directory.

## Component Documentation

Complete documentation for each component is available in:
- `src/components/brand/COMPONENT_GUIDE.md`

This includes:
- Prop interfaces
- Usage examples
- State variations
- Best practices

## Customization

### Modify Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  accent: {
    purple: '#YOUR_COLOR_HERE',
  },
}
```

### Modify Shadows

Edit `tailwind.config.ts`:
```typescript
boxShadow: {
  'glow-purple': 'YOUR_SHADOW_VALUE',
}
```

### Add Custom Utilities

Edit `src/styles/globals.css`:
```css
@layer components {
  .your-utility {
    /* styles */
  }
}
```

## Dependencies

- **next:** 15.0.0 - React framework
- **react:** 18.3.1 - UI library
- **tailwindcss:** 3.4.1 - CSS utility framework
- **framer-motion:** 11.0.3 - Animation library
- **class-variance-authority:** 0.7.0 - Component variants
- **clsx:** 2.1.1 - Class utility
- **tailwind-merge:** 2.3.0 - Merge Tailwind classes

## Troubleshooting

### Styles Not Applying

1. Ensure Tailwind is watching for changes:
   ```bash
   npm run dev
   ```

2. Clear Tailwind cache:
   ```bash
   rm -rf .next
   npm run build
   ```

### Component Not Found

1. Check path is correct: `@/components/brand`
2. Verify import: `import { ComponentName } from '@/components/brand'`
3. Check tsconfig.json paths alias is set to `@/*`

### TypeScript Errors

1. Run type check:
   ```bash
   npx tsc --noEmit
   ```

2. Ensure `@types/react` and `@types/react-dom` are installed

## Next Steps

1. Review existing components in other directories
2. Customize colors and styling as needed
3. Create page-specific layouts using brand components
4. Deploy to production

## Support

Reference documents:
- `BRANDING_GUIDE.md` - Complete design specifications
- `COMPONENT_GUIDE.md` - Component library documentation
- `DESIGN_TOKENS.json` - Design tokens in JSON format

## Version

- **Version:** 1.0
- **Created:** 2026-04-07
- **Reference:** BRANDING_GUIDE.md (Single Masterguide)
