# MASTERGUIDE - IGNT RECRUITMENT WEBSITE
**Unified Branding, Styling & Development Reference**  
*Last Updated: 2026-04-07 | Single Source of Truth*

---

## 📋 QUICK NAVIGATION
- [Visual References](#visual-references-index)
- [Color Palette](#color-palette)
- [Typography](#typography)
- [Components](#component-patterns)
- [Layout](#layout--spacing)
- [Design Tokens (JSON)](#design-tokens-json)
- [Accessibility](#accessibility--standards)
- [Checklist](#development-checklist)
- [Updates](#version-history)

---

## 🎬 VISUAL REFERENCES INDEX

### Landing Page Layouts

#### [REF-001] Hero Section - Tech Motion Design
**File:** `Website landingspagina voorbeeld.webp`
- Dark navy background with purple gradient overlays
- 3D isometric tech illustrations
- Full-width hero layout
- **Used For:** Primary landing page structure

#### [REF-002] Hero Section - AI Copilot Variant  
**File:** `Website landingspagina voorbeeld 2.webp`
- "A Copilot for Any Community" messaging
- Top navigation visible
- 3D isometric platform illustration
- **Used For:** Alternative hero layout

#### [REF-003] Hero Section - AI Power Variant
**File:** `Website landingspagina voorbeeld 3.webp`
- "Unleash the Power of AI" headline
- Feature cards below hero
- Dashboard mockup illustration
- **Used For:** Hero with integrated feature cards

### Button Styles

#### [REF-004] Primary Button - Neon Glow
**File:** `CTA button voorbeeld.webp`
- Text: "Get Started"
- Purple border (#7C3AED), transparent fill
- Neon glow effect
- Fully rounded pill shape
- **Properties:** 12px 32px padding, 2-3px border, 20px glow blur

#### [REF-005] Secondary Button - Solid Magenta
**File:** `CTA button voorbeeld 2.webp`
- Text: "Ding-Ding!"
- Gradient fill (#7C3AED → #D946EF)
- Magenta glow effect
- Fully rounded pill shape
- **Properties:** 10px 28px padding, 2px border, scale 1.05 on hover

### Interactive Components

#### [REF-006] Progress Indicator - Complete Library
**File:** `Voorbeeld proces indicator.webp`
- Multiple circular step patterns (horizontal, vertical, grid)
- States: Completed (purple), Active (magenta), Upcoming (outlined)
- Circle size: 48-56px diameter
- Labels: 12-14px uppercase
- Connecting lines with state indicators
- **Used For:** Hiring process, workflow stages, user journey

### Feature Layouts

#### [REF-007] Feature Cards Grid
**File:** `Voorbeeld hiring stappenplan.webp`
- 2 columns × 3 rows (6 cards, customizable)
- Dark background with blue-purple gradient
- Icon badge + title + description
- Border radius: 16-24px
- Padding: 24-32px per card
- **Used For:** Product highlights, capabilities showcase

---

## 🎨 COLOR PALETTE

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| **BG Primary** | #0A0E27 | Main page background |
| **BG Secondary** | #1A1F3A | Card backgrounds |
| **Accent Purple** | #7C3AED | Buttons, borders, completed states |
| **Accent Magenta** | #D946EF | Active states, gradients, emphasis |
| **Text Primary** | #FFFFFF | Headings, main content |
| **Text Secondary** | #A0AEC0 | Descriptions, labels |
| **Text Tertiary** | #718096 | Disabled, placeholder |

### Gradients
- **Purple→Magenta:** `linear-gradient(135deg, #7C3AED, #D946EF)` - Hero, cards, emphasis
- **Dark Blue→Purple:** `linear-gradient(135deg, #1E3A8A, #7C3AED)` - Feature cards

### Glows & Shadows
- **Purple Glow:** `0 0 20px rgba(124, 58, 237, 0.6)` - Button default
- **Magenta Glow:** `0 0 30px rgba(217, 70, 239, 0.5)` - Active states
- **Intense Glow:** `0 0 40px rgba(124, 58, 237, 0.8)` - Hover/focus
- **Card Shadow:** `0 10px 30px rgba(0, 0, 0, 0.3)` - Depth

---

## 🔤 TYPOGRAPHY

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
```

### Sizes & Weights
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

## 🔘 COMPONENT PATTERNS

### Primary Button (REF-004)
```css
background: transparent;
border: 2-3px solid #7C3AED;
color: #FFFFFF;
border-radius: 50px;
padding: 12px 32px;
box-shadow: 0 0 20px rgba(124, 58, 237, 0.8);
font-size: 14-16px;
font-weight: 600;

/* Hover */
box-shadow: 0 0 30px rgba(124, 58, 237, 0.8);
color: #D946EF;

/* Active */
background: linear-gradient(135deg, #7C3AED, #D946EF);
box-shadow: 0 0 40px rgba(124, 58, 237, 0.8);

/* Disabled */
opacity: 0.4;
cursor: not-allowed;
box-shadow: none;
```

### Secondary Button (REF-005)
```css
background: linear-gradient(135deg, #7C3AED, #D946EF);
border: 2px solid #A855F7;
color: #FFFFFF;
border-radius: 50px;
padding: 10px 28px;
box-shadow: 0 0 20px rgba(217, 70, 239, 0.5);
font-size: 14-16px;
font-weight: 600;

/* Hover */
transform: scale(1.05);
box-shadow: 0 0 30px rgba(217, 70, 239, 0.7);

/* Active */
background: linear-gradient(135deg, #A855F7, #7C3AED);
box-shadow: 0 0 40px rgba(217, 70, 239, 0.8);

/* Disabled */
opacity: 0.4;
cursor: not-allowed;
transform: none;
box-shadow: none;
```

### Card
```css
background: #1A1F3A;
border: 1px solid rgba(124, 58, 237, 0.3);
border-radius: 16-24px;
padding: 24-32px;
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

/* Hover */
transform: scale(1.02);
box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
```

### Form Input
```css
background: #1A1F3A;
border: 1px solid rgba(124, 58, 237, 0.3);
border-radius: 8px;
color: #FFFFFF;
padding: 12px 16px;

/* Focus */
border: 2px solid #7C3AED;
box-shadow: 0 0 20px rgba(124, 58, 237, 0.6);
outline: none;

/* Placeholder */
color: #718096;
```

### Progress Indicator (REF-006)
```css
/* Completed Circle */
width: 48-56px; height: 48-56px;
background: #7C3AED;
border-radius: 50%;

/* Active Circle */
width: 48-56px; height: 48-56px;
background: #D946EF;
border: 3px solid #7C3AED;
box-shadow: 0 0 15px rgba(217, 70, 239, 0.6);

/* Upcoming Circle */
width: 48-56px; height: 48-56px;
background: transparent;
border: 2px solid #A0AEC0;

/* Lines */
/* Completed: */ background: #7C3AED;
/* Active: */ background: #D946EF; box-shadow: 0 0 10px rgba(217, 70, 239, 0.5);
/* Upcoming: */ background: #404A5A; opacity: 0.5;
```

### Navigation Bar
```css
background: #0A0E27;
border-bottom: 1px solid rgba(124, 58, 237, 0.1);
height: 60-70px;
padding: 0 24px;

/* Links on Hover */
color: #FFFFFF;
border-bottom: 2px solid #7C3AED;
box-shadow: 0 0 15px rgba(124, 58, 237, 0.6);
```

---

## 📊 LAYOUT & SPACING

### Spacing Scale
| Level | Value | Uses |
|-------|-------|------|
| xs | 4px | Micro spacing |
| sm | 8px | Tight spacing |
| md | 16px | Standard |
| lg | 24px | Large |
| xl | 32px | Extra large |
| 2xl | 48px | Major gaps |
| 3xl | 64px | Hero/page-level |

### Layout Rules
- **Max Width:** 1200-1280px
- **Grid:** 12-column responsive
- **Card Radius:** 16-24px
- **Card Padding:** 24-32px
- **Card Gap:** 16-24px

### Breakpoints
- **Mobile:** 0-767px
- **Tablet:** 768-1023px
- **Desktop:** 1024-1279px
- **Wide:** 1280px+

---

## ⚙️ DESIGN TOKENS (JSON)

### Complete Token Set
```json
{
  "colors": {
    "background": {
      "primary": "#0A0E27",
      "secondary": "#1A1F3A",
      "tertiary": "#0F1429"
    },
    "accent": {
      "purple": "#7C3AED",
      "magenta": "#D946EF",
      "purpleLight": "#A855F7"
    },
    "text": {
      "primary": "#FFFFFF",
      "secondary": "#A0AEC0",
      "tertiary": "#718096",
      "disabled": "#4B5563"
    },
    "border": {
      "accent": "#7C3AED",
      "subtle": "rgba(124, 58, 237, 0.3)",
      "faint": "rgba(124, 58, 237, 0.1)"
    },
    "glow": {
      "purple": "rgba(124, 58, 237, 0.6)",
      "magenta": "rgba(217, 70, 239, 0.5)",
      "intense": "rgba(124, 58, 237, 0.8)"
    }
  },
  "typography": {
    "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif",
    "fontSize": {
      "h1": "48px",
      "h2": "32px",
      "h3": "24px",
      "bodyLarge": "18px",
      "body": "16px",
      "bodySmall": "14px",
      "label": "12px"
    },
    "fontWeight": {
      "regular": 400,
      "medium": 500,
      "semibold": 600,
      "bold": 700
    }
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "2xl": "48px",
    "3xl": "64px"
  },
  "borderRadius": {
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "full": "50px"
  },
  "shadows": {
    "subtle": "0 4px 6px rgba(0, 0, 0, 0.1)",
    "card": "0 10px 30px rgba(0, 0, 0, 0.3)",
    "glowPurple": "0 0 20px rgba(124, 58, 237, 0.6)",
    "glowMagenta": "0 0 30px rgba(217, 70, 239, 0.5)",
    "glowIntense": "0 0 40px rgba(124, 58, 237, 0.8)"
  },
  "animation": {
    "duration": {
      "fast": "150ms",
      "normal": "300ms",
      "slow": "500ms"
    }
  }
}
```

---

## ♿ ACCESSIBILITY & STANDARDS

### Color Contrast
- Body text: 4.5:1 minimum (✓ white on dark navy)
- Large text: 3:1 minimum
- No color-only meaning indicators

### Interactive Elements
- Touch targets: 44×44px minimum
- Focus indicators: Neon glow effect
- Keyboard navigation: All buttons/links supported
- ARIA labels: Icon buttons labeled

### Motion
- Duration: 150-500ms
- Prefers-reduced-motion: Support required
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

---

## ✅ DEVELOPMENT CHECKLIST

### Setup
- [ ] Create CSS variables from tokens
- [ ] Configure Tailwind (if using)
- [ ] Create component library
- [ ] Share guide with team
- [ ] Establish naming conventions (use REF-codes)

### Components
- [ ] Primary button (REF-004)
- [ ] Secondary button (REF-005)
- [ ] Card component
- [ ] Progress indicator (REF-006)
- [ ] Form input with focus
- [ ] Navigation bar
- [ ] Footer

### Pages
- [ ] Hero section (REF-001/002/003)
- [ ] Feature cards (REF-007)
- [ ] Process section (REF-006)
- [ ] Contact/CTA area
- [ ] Responsive layout

### Testing
- [ ] WCAG AA accessibility
- [ ] Prefers-reduced-motion
- [ ] Responsive breakpoints
- [ ] Button states (hover/active)
- [ ] Cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Performance

---

## 📈 VERSION HISTORY & UPDATES

| Date | Version | Change |
|------|---------|--------|
| 2026-04-07 | v1.0 | Initial masterguide - all design specs combined |

### How to Update This Document
When changes are made:
1. Find the relevant section
2. Update all hex codes, sizes, or values
3. Add entry to Version History table (above)
4. Update "Last Updated" timestamp at top
5. Search document for related references and update them too

**Example updates:**
- **Color change:** Update Color Palette + Component Patterns + Tokens
- **New component:** Add to Component Patterns + Tokens + Checklist
- **Spacing change:** Update Spacing Scale + all affected components

---

## 🎯 QUICK REFERENCE - COPY-PASTE VALUES

### Hex Codes
```
#0A0E27 (bg-primary)      #7C3AED (accent-purple)    #FFFFFF (text-primary)
#1A1F3A (bg-secondary)    #D946EF (accent-magenta)   #A0AEC0 (text-secondary)
#0F1429 (bg-tertiary)     #A855F7 (purple-light)     #718096 (text-tertiary)
```

### Glows (Box-Shadow)
```
0 0 20px rgba(124, 58, 237, 0.6)     (purple base)
0 0 30px rgba(217, 70, 239, 0.5)     (magenta)
0 0 40px rgba(124, 58, 237, 0.8)     (intense)
```

### Gradients
```
linear-gradient(135deg, #7C3AED, #D946EF)     (primary gradient)
linear-gradient(135deg, #1E3A8A, #7C3AED)     (feature cards)
```

### REF-Code Map
| Code | Element | Usage |
|------|---------|-------|
| REF-001/002/003 | Hero sections | Landing page layouts |
| REF-004 | Neon button | Primary CTAs |
| REF-005 | Magenta button | Secondary CTAs |
| REF-006 | Progress circles | Step indicators |
| REF-007 | Card grid | Feature showcase |

---

## 📞 SUPPORT & QUESTIONS

**Design Questions?** Reference relevant section (Color Palette, Component Patterns, etc.)  
**Development Questions?** Check Design Tokens section or component CSS  
**Layout Questions?** See Layout & Spacing section + REF-codes for examples

---

**This is your complete, unified reference for the IGNT recruitment website project.**  
**Update continuously. Keep it in sync. Use REF-codes in all discussions.**

*Last Updated: 2026-04-07*
