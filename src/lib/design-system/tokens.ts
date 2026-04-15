/**
 * IGNT Design System - Design Tokens
 * Single source of truth for all design values
 * Updated: 2026-04-08
 */

export const designTokens = {
  // ============================================================================
  // COLORS
  // ============================================================================
  colors: {
    // Background - Dark theme hierarchy
    background: {
      primary: '#0A0E27', // Main canvas
      secondary: '#1A1F3A', // Cards, elevated surfaces
      tertiary: '#0F1429', // Disabled, subtle backgrounds
      overlay: 'rgba(10, 14, 39, 0.8)', // Modal/overlay
    },

    // Accent - Brand colors (Spark metaphor)
    accent: {
      purple: '#7C3AED', // Trust, primary actions, completed states
      magenta: '#D946EF', // Energy, active states, emphasis
      purpleLight: '#A855F7', // Hover state, secondary interactive
    },

    // Text - Semantic hierarchy
    text: {
      primary: '#FFFFFF', // Headings, main content
      secondary: '#A0AEC0', // Descriptions, secondary info
      tertiary: '#718096', // Disabled, placeholder, hints
      disabled: '#4B5563', // Fully disabled content
    },

    // Semantic colors
    semantic: {
      success: '#10B981', // Successful actions, positive signals
      warning: '#F59E0B', // Warnings, caution states
      error: '#EF4444', // Errors, destructive actions
      info: '#3B82F6', // Information, hints
    },

    // Border & Glow
    border: {
      accent: '#7C3AED',
      subtle: 'rgba(124, 58, 237, 0.3)',
      faint: 'rgba(124, 58, 237, 0.1)',
    },

    glow: {
      purple: 'rgba(124, 58, 237, 0.6)',
      magenta: 'rgba(217, 70, 239, 0.5)',
      intense: 'rgba(124, 58, 237, 0.8)',
      magentaIntense: 'rgba(217, 70, 239, 0.7)',
    },
  },

  // ============================================================================
  // TYPOGRAPHY
  // ============================================================================
  typography: {
    fontFamily: {
      base: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
      mono: 'Menlo, Monaco, "Courier New", monospace',
    },

    fontSize: {
      h1: '48px',
      h2: '32px',
      h3: '24px',
      bodyLarge: '18px',
      body: '16px',
      bodySmall: '14px',
      label: '12px',
    },

    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    lineHeight: {
      tight: 1.2,
      normal: 1.4,
      relaxed: 1.6,
      loose: 1.8,
    },

    letterSpacing: {
      tight: '-0.02em',
      normal: '0em',
      wide: '0.02em',
    },
  },

  // ============================================================================
  // SPACING (8px base grid)
  // ============================================================================
  spacing: {
    xs: '4px', // Micro spacing
    sm: '8px', // Tight spacing
    md: '16px', // Standard spacing
    lg: '24px', // Large spacing
    xl: '32px', // Extra large
    '2xl': '48px', // Major gaps
    '3xl': '64px', // Hero/page level
    '4xl': '80px', // Section spacing
  },

  // ============================================================================
  // BORDER RADIUS
  // ============================================================================
  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '50px',
    pill: '50px',
  },

  // ============================================================================
  // SHADOWS & GLOWS
  // ============================================================================
  shadows: {
    // Card depths
    card: '0 10px 30px rgba(0, 0, 0, 0.3)',
    cardHover: '0 20px 40px rgba(0, 0, 0, 0.4)',

    // Glow effects
    glowPurple: '0 0 20px rgba(124, 58, 237, 0.6)',
    glowPurpleIntense: '0 0 30px rgba(124, 58, 237, 0.8)',
    glowMagenta: '0 0 30px rgba(217, 70, 239, 0.5)',
    glowMagentaIntense: '0 0 40px rgba(217, 70, 239, 0.7)',
    glowIntense: '0 0 40px rgba(124, 58, 237, 0.8)',

    // Subtle shadows
    subtle: '0 4px 6px rgba(0, 0, 0, 0.1)',
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',

    // Elevation
    elevation1: '0 1px 3px rgba(0, 0, 0, 0.1)',
    elevation2: '0 4px 6px rgba(0, 0, 0, 0.15)',
    elevation3: '0 10px 15px rgba(0, 0, 0, 0.2)',
  },

  // ============================================================================
  // GRADIENTS
  // ============================================================================
  gradients: {
    primary: 'linear-gradient(135deg, #7C3AED, #D946EF)',
    primaryReverse: 'linear-gradient(135deg, #D946EF, #7C3AED)',
    feature: 'linear-gradient(135deg, #1E3A8A, #7C3AED)',
    dark: 'linear-gradient(135deg, #0A0E27, #1A1F3A)',
    toTransparent: 'linear-gradient(180deg, #7C3AED, transparent)',
  },

  // ============================================================================
  // TRANSITIONS & ANIMATIONS
  // ============================================================================
  transitions: {
    duration: {
      instant: '0ms',
      fast: '75ms',
      base: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '750ms',
      slowest: '1000ms',
    },

    easing: {
      // Cubic bezier functions
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },

    // Predefined transitions
    short: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    medium: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    long: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // ============================================================================
  // BREAKPOINTS
  // ============================================================================
  breakpoints: {
    xs: '0px', // 0px+
    sm: '640px', // Small devices
    md: '768px', // Tablets
    lg: '1024px', // Laptops
    xl: '1280px', // Desktops
    '2xl': '1536px', // Large desktops
  },

  // ============================================================================
  // COMPONENT SIZING
  // ============================================================================
  sizing: {
    // Touch targets (minimum 44x44px)
    touchTarget: '44px',

    // Button sizes
    button: {
      xs: {
        height: '32px',
        padding: '6px 12px',
        fontSize: '12px',
      },
      sm: {
        height: '36px',
        padding: '8px 16px',
        fontSize: '13px',
      },
      md: {
        height: '44px',
        padding: '12px 24px',
        fontSize: '14px',
      },
      lg: {
        height: '48px',
        padding: '14px 32px',
        fontSize: '16px',
      },
      xl: {
        height: '56px',
        padding: '16px 40px',
        fontSize: '18px',
      },
    },

    // Input sizes
    input: {
      height: '44px',
      padding: '12px 16px',
      fontSize: '16px',
    },

    // Icon sizes
    icon: {
      xs: '16px',
      sm: '20px',
      md: '24px',
      lg: '32px',
      xl: '48px',
    },
  },

  // ============================================================================
  // Z-INDEX STACK
  // ============================================================================
  zIndex: {
    hide: '-1',
    base: '0',
    dropdown: '100',
    sticky: '20',
    fixed: '30',
    modalBackdrop: '40',
    modal: '50',
    popover: '60',
    tooltip: '70',
    notification: '80',
  },
};

// ============================================================================
// EXPORT INDIVIDUAL GROUPS FOR CONVENIENCE
// ============================================================================
export const colors = designTokens.colors;
export const typography = designTokens.typography;
export const spacing = designTokens.spacing;
export const shadows = designTokens.shadows;
export const transitions = designTokens.transitions;
