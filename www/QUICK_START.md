# Quick Start - IGNT Brand Components

Get started in 5 minutes.

## 1. Install Dependencies

```bash
cd www
npm install
```

## 2. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## 3. Use Components

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

export function MyPage() {
  return (
    <>
      <Navbar
        links={[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
        ]}
      />
      <main className="pt-20">
        <h1>
          Welcome to <GradientText>IGNT</GradientText>
        </h1>
        <PrimaryButton>Get Started</PrimaryButton>
        <SecondaryButton>Learn More</SecondaryButton>

        <BrandCard>
          <h2>Feature Card</h2>
          <p>Card content here</p>
        </BrandCard>

        <ProgressSteps
          steps={['Step 1', 'Step 2', 'Step 3']}
          currentStep={1}
        />
      </main>
      <Footer />
    </>
  );
}
```

## 4. Customize Colors (Optional)

Edit `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    purple: '#YOUR_COLOR',
  },
}
```

## Component Reference

| Component | Purpose | REF |
|-----------|---------|-----|
| PrimaryButton | Neon glow primary button | REF-004 |
| SecondaryButton | Magenta gradient button | REF-005 |
| BrandCard | Feature card container | REF-007 |
| ProgressSteps | Multi-step progress | REF-006 |
| GradientText | Inline gradient text | - |
| VonkSparkle | Sparkle animation | - |
| Navbar | Navigation bar | - |
| Footer | Footer with contact | - |

## Button Sizes

```tsx
<PrimaryButton size="sm">Small</PrimaryButton>
<PrimaryButton size="default">Default</PrimaryButton>
<PrimaryButton size="lg">Large</PrimaryButton>
```

## Colors

| Color | Usage |
|-------|-------|
| `bg-primary` | Main background |
| `bg-secondary` | Card backgrounds |
| `accent-purple` | Primary accent |
| `accent-magenta` | Active states |
| `text-primary` | Main text (white) |
| `text-secondary` | Secondary text |

## Gradients

```css
bg-gradient-primary     /* Purple → Magenta */
bg-gradient-feature     /* Dark blue → Purple */
bg-gradient-reverse     /* Light purple → Purple */
```

## Shadows (Glows)

```css
shadow-glow-purple      /* Subtle glow */
shadow-glow-magenta     /* Active glow */
shadow-glow-intense     /* Intense glow */
shadow-card             /* Card depth */
```

## Responsive Classes

```tsx
<div className="text-sm md:text-lg lg:text-xl">
  Text scales on different screens
</div>

<div className="p-4 md:p-6 lg:p-8">
  Padding scales on different screens
</div>
```

## Troubleshooting

**Styles not showing?**
```bash
npm run dev
```

**Colors not working?**
Check `tailwind.config.ts` has correct colors.

**TypeScript errors?**
```bash
npx tsc --noEmit
```

## Documentation

- **Full Guide:** `SETUP_GUIDE.md`
- **Components:** `src/components/brand/COMPONENT_GUIDE.md`
- **Example:** `src/app/page.tsx`

## File Structure

```
www/
├── src/components/brand/      ← All components here
│   ├── PrimaryButton.tsx
│   ├── SecondaryButton.tsx
│   ├── BrandCard.tsx
│   ├── ProgressSteps.tsx
│   ├── GradientText.tsx
│   ├── VonkSparkle.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── index.ts
├── tailwind.config.ts         ← Colors & theme
├── src/styles/globals.css     ← Global styles
└── package.json               ← Dependencies
```

## Build for Production

```bash
npm run build
npm start
```

---

**Need more help?** See SETUP_GUIDE.md or COMPONENT_GUIDE.md
