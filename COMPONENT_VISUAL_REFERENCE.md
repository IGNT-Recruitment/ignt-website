# IGNT Components - Visual & Technical Reference

## Component Overview

All 8 components created following BRANDING_GUIDE.md specifications.

### 1. PRIMARY BUTTON (REF-004)

```
┌─────────────────────────┐
│  ╔════════════════════╗ │
│  ║   Get Started      ║ │  ← Transparent with border
│  ║   [Neon Glow]      ║ │     Purple border + glow
│  ╚════════════════════╝ │
└─────────────────────────┘

States:
  Default:  Border: 2-3px purple, Text: white, Glow: purple
  Hover:    Glow intensifies, Text: magenta
  Active:   Filled with gradient (purple→magenta)
  Disabled: Opacity 0.4, no glow

Sizes: sm (h-8) | default (h-10) | lg (h-12)
```

**CSS Specs:**
- Background: transparent
- Border: 2-3px solid #7C3AED
- Color: #FFFFFF
- Border-radius: 50px
- Shadow: 0 0 20px rgba(124, 58, 237, 0.6)

---

### 2. SECONDARY BUTTON (REF-005)

```
┌─────────────────────────┐
│  ╔════════════════════╗ │
│  ║  Ding-Ding! [Glow] ║ │  ← Solid magenta gradient
│  ║                    ║ │     With border
│  ╚════════════════════╝ │
└─────────────────────────┘

States:
  Default:  Gradient #7C3AED→#D946EF, Glow: magenta
  Hover:    Scale: 1.05, Glow: intense
  Active:   Reversed gradient #A855F7→#7C3AED
  Disabled: Opacity 0.4

Sizes: sm (h-8) | default (h-10) | lg (h-12)
```

**CSS Specs:**
- Background: linear-gradient(135deg, #7C3AED, #D946EF)
- Border: 2px solid #A855F7
- Color: #FFFFFF
- Border-radius: 50px
- Shadow: 0 0 30px rgba(217, 70, 239, 0.5)

---

### 3. BRAND CARD (REF-007)

```
┌────────────────────────────────┐
│  ╔════════════════════════════╗ │
│  ║  Feature Title             ║ │
│  ║                            ║ │  ← Dark background
│  ║  Feature description and   ║ │     Subtle purple border
│  ║  content goes here...      ║ │     Rounded corners
│  ║                            ║ │
│  ╚════════════════════════════╝ │
└────────────────────────────────┘

States:
  Default:  Static card with shadow
  Hover:    Scale: 1.02, Glow: purple (optional)
  
Sizes: Responsive
  Mobile: p-6, radius-xl (16px)
  Desktop: p-8, radius-2xl (24px)
```

**CSS Specs:**
- Background: #1A1F3A
- Border: 1px solid rgba(124, 58, 237, 0.3)
- Border-radius: 16-24px
- Padding: 24-32px
- Shadow: 0 10px 30px rgba(0, 0, 0, 0.3)

---

### 4. PROGRESS STEPS (REF-006)

```
Simple 3-step example:

    ①───●───②───●───③
    │   │   │   │   │
   Step  Done  Active  Upcoming
   
  Complete:  ● (purple background)
  Active:    ● (magenta background, purple border, glow)
  Upcoming:  ○ (transparent, gray border)

  Lines scale with step state:
  ├─ Completed: purple
  ├─ Active: magenta + glow
  └─ Upcoming: gray + opacity

Sizes:
  Mobile: 48px circles
  Desktop: 56px circles
```

**CSS Specs:**
- Circle diameter: 48-56px
- Completed: bg-accent-purple, border: 2px
- Active: bg-accent-magenta, border: 3px accent-purple, glow: magenta
- Upcoming: bg-transparent, border: 2px text-secondary

---

### 5. GRADIENT TEXT

```
Welcome to ╔════════╗
           ║  IGNT  ║  ← Purple→Magenta gradient
           ╚════════╝

Display text with linear-gradient background,
clipped to text shape for visual effect.

Works with any font size:
  h1: 48-64px
  h2: 32-40px
  h3: 24-28px
  body: 14-18px
```

**CSS Specs:**
- Background: linear-gradient(135deg, #7C3AED, #D946EF)
- Background-clip: text
- Color: transparent
- Works on <span>, <h1>, <h2>, etc.

---

### 6. VONK SPARKLE

```
Visual: Floating magenta particles with
        fade + scale animation

Animation Timeline:
  0ms → 750ms → 1500ms (repeat)
  
  Opacity:   0 → 1 → 0
  Scale:     0.5 → 1.2 → 0.5

5 sparkles staggered by 150ms:
  ✨ Sparkle 1 (0ms delay)
    ✨ Sparkle 2 (150ms delay)
      ✨ Sparkle 3 (300ms delay)
        ✨ Sparkle 4 (450ms delay)
          ✨ Sparkle 5 (600ms delay)

Rendered as: position: absolute, 
             pointer-events: none,
             overflow: hidden container
```

**CSS Specs:**
- Element: div (1x1px)
- Color: #D946EF
- Border-radius: 50% (circle)
- Animation: framer-motion (1.5s duration, infinite loop)

---

### 7. NAVBAR

```
┌─────────────────────────────────────────────────────────┐
│ IGNT         Home  About  Features  Pricing  Contact   │
│              ▔▔▔▔                                       │  ← Fixed top
│              [Purple underline + glow on active]        │     z-50
└─────────────────────────────────────────────────────────┘

Mobile (< 768px):
┌───────────────────────────────────────────────────────┐
│ IGNT                                        ☰         │
└───────────────────────────────────────────────────────┘
[Mobile menu slides down below navbar on click]
│ Home
│ About
│ Features
│ Pricing
│ Contact
└─────────────────────────────────────────────────────────┘

Desktop (>= 768px):
  Links shown inline
  No hamburger menu
```

**CSS Specs:**
- Position: fixed, top: 0, z-50
- Background: #0A0E27
- Border-bottom: 1px solid rgba(124, 58, 237, 0.1)
- Height: 64px (mobile), 80px (desktop)
- Active link: border-bottom: 2px #7C3AED, glow: purple

---

### 8. FOOTER

```
┌────────────────────────────────────────────────────────┐
│ IGNT              Contact              Legal           │
│ Empowering        ramon@ignt.ai        Privacy Policy  │
│ communities       +31 (0)6 1234 5678   Terms of Svce   │
│ with AI                                                │
├────────────────────────────────────────────────────────┤
│ © 2026 IGNT. All rights reserved.                      │
└────────────────────────────────────────────────────────┘

Cookie Notice (Optional - slides up from bottom):
┌────────────────────────────────────────────────────────┐
│ We use cookies... [Privacy Policy]     [✓ Accept]    │
└────────────────────────────────────────────────────────┘

Mobile: Stacked layout
Desktop: 3-column grid
```

**CSS Specs:**
- Background: #0A0E27
- Border-top: 1px solid rgba(124, 58, 237, 0.1)
- Padding: 48px (mobile), 64px (desktop)
- Max-width: 1280px
- Grid: 1 column (mobile), 3 columns (desktop)

---

## Color Palette

### Backgrounds
| Name | Hex | Usage |
|------|-----|-------|
| Primary | #0A0E27 | Main page background |
| Secondary | #1A1F3A | Card backgrounds |
| Tertiary | #0F1429 | Tertiary backgrounds |

### Accents
| Name | Hex | Usage |
|------|-----|-------|
| Purple | #7C3AED | Primary accent, borders, completed states |
| Magenta | #D946EF | Active states, emphasis, hover effects |
| Purple Light | #A855F7 | Light variant for borders |

### Text
| Name | Hex | Usage |
|------|-----|-------|
| Primary | #FFFFFF | Main text, headings |
| Secondary | #A0AEC0 | Descriptions, labels |
| Tertiary | #718096 | Disabled, placeholder text |

---

## Shadow System (Glows)

| Name | Value | Usage |
|------|-------|-------|
| Glow Purple | 0 0 20px rgba(124, 58, 237, 0.6) | Default button glow |
| Glow Magenta | 0 0 30px rgba(217, 70, 239, 0.5) | Active states |
| Glow Intense | 0 0 40px rgba(124, 58, 237, 0.8) | Hover/focus states |
| Card | 0 10px 30px rgba(0, 0, 0, 0.3) | Card depth |
| Subtle | 0 4px 6px rgba(0, 0, 0, 0.1) | Subtle depth |

---

## Gradient System

### Primary Gradient
```css
background: linear-gradient(135deg, #7C3AED, #D946EF);
/* Purple to Magenta - used on secondary buttons, gradients */
```

### Feature Gradient
```css
background: linear-gradient(135deg, #1E3A8A, #7C3AED);
/* Dark blue to Purple - used on feature sections */
```

### Reverse Gradient
```css
background: linear-gradient(135deg, #A855F7, #7C3AED);
/* Light Purple to Purple - used on active states */
```

---

## Responsive Breakpoints

| Breakpoint | Screen Size | Usage |
|-----------|-------------|-------|
| Mobile | 0-767px | Default/base styles |
| Tablet (md) | 768px+ | `md:` prefix |
| Desktop (lg) | 1024px+ | `lg:` prefix |
| Wide (xl) | 1280px+ | `xl:` prefix |

---

## Typography Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 48-64px | 700 | 1.2 |
| H2 | 32-40px | 700 | 1.3 |
| H3 | 24-28px | 600 | 1.4 |
| Body Large | 18px | 400 | 1.6 |
| Body | 16px | 400 | 1.6 |
| Body Small | 14px | 400 | 1.5 |
| Label | 12-14px | 500 | 1.4 |
| Button | 14-16px | 600 | 1.4 |

---

## Spacing Scale

| Level | Value | Uses |
|-------|-------|------|
| xs | 4px | Micro spacing |
| sm | 8px | Tight spacing |
| md | 16px | Standard spacing |
| lg | 24px | Large spacing |
| xl | 32px | Extra large spacing |
| 2xl | 48px | Major gaps |
| 3xl | 64px | Page-level spacing |

---

## File Locations

All components ready to import from:
```typescript
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

Configuration:
- Colors: `www/tailwind.config.ts`
- Global styles: `www/src/styles/globals.css`
- Utilities: `www/src/lib/utils.ts`

---

**Reference:** BRANDING_GUIDE.md (REF-004 through REF-007)  
**Status:** Production Ready  
**Last Updated:** 2026-04-07
