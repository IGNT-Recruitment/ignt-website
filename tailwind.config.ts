import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ========================================================================
      // COLORS
      // ========================================================================
      colors: {
        // Background
        "bg-primary": "#0A0E27",
        "bg-secondary": "#1A1F3A",
        "bg-tertiary": "#0F1429",
        "bg-overlay": "rgba(10, 14, 39, 0.8)",

        // Accent
        "accent-purple": "#7C3AED",
        "accent-magenta": "#D946EF",
        "accent-purple-light": "#A855F7",

        // Text
        "text-primary": "#FFFFFF",
        "text-secondary": "#A0AEC0",
        "text-tertiary": "#718096",
        "text-disabled": "#4B5563",

        // Semantic
        "success": "#10B981",
        "warning": "#F59E0B",
        "error": "#EF4444",
        "info": "#3B82F6",

        // Border
        "border-accent": "#7C3AED",
        "border-subtle": "rgba(124, 58, 237, 0.3)",
        "border-faint": "rgba(124, 58, 237, 0.1)",
      },

      // ========================================================================
      // SHADOWS & GLOWS
      // ========================================================================
      boxShadow: {
        // Card depths
        "card": "0 10px 30px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 20px 40px rgba(0, 0, 0, 0.4)",

        // Glow effects
        "glow-purple": "0 0 20px rgba(124, 58, 237, 0.6)",
        "glow-purple-intense": "0 0 30px rgba(124, 58, 237, 0.8)",
        "glow-magenta": "0 0 30px rgba(217, 70, 239, 0.5)",
        "glow-magenta-intense": "0 0 40px rgba(217, 70, 239, 0.7)",
        "glow-intense": "0 0 40px rgba(124, 58, 237, 0.8)",

        // Subtle
        "subtle": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "sm": "0 1px 2px rgba(0, 0, 0, 0.05)",

        // Elevation
        "elevation-1": "0 1px 3px rgba(0, 0, 0, 0.1)",
        "elevation-2": "0 4px 6px rgba(0, 0, 0, 0.15)",
        "elevation-3": "0 10px 15px rgba(0, 0, 0, 0.2)",
      },

      // ========================================================================
      // BORDER RADIUS
      // ========================================================================
      borderRadius: {
        "pill": "50px",
        "full-pill": "50px",
      },

      // ========================================================================
      // SPACING (8px base grid)
      // ========================================================================
      spacing: {
        "xs": "4px",
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "xl": "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "80px",
      },

      // ========================================================================
      // SCALE
      // ========================================================================
      scale: {
        "102": "1.02",
        "105": "1.05",
      },

      // ========================================================================
      // GRADIENTS
      // ========================================================================
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #7C3AED, #D946EF)",
        "gradient-primary-reverse": "linear-gradient(135deg, #D946EF, #7C3AED)",
        "gradient-feature": "linear-gradient(135deg, #1E3A8A, #7C3AED)",
        "gradient-dark": "linear-gradient(135deg, #0A0E27, #1A1F3A)",
        "gradient-to-transparent": "linear-gradient(180deg, #7C3AED, transparent)",
      },

      // ========================================================================
      // TRANSITIONS
      // ========================================================================
      transitionDuration: {
        "instant": "0ms",
        "fast": "75ms",
        "base": "150ms",
        "normal": "300ms",
        "slow": "500ms",
        "slower": "750ms",
        "slowest": "1000ms",
      },

      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
      },

      // ========================================================================
      // Z-INDEX STACK
      // ========================================================================
      zIndex: {
        "dropdown": "100",
        "sticky": "20",
        "fixed": "30",
        "modal-backdrop": "40",
        "modal": "50",
        "popover": "60",
        "tooltip": "70",
        "notification": "80",
      },

      // ========================================================================
      // TYPOGRAPHY
      // ========================================================================
      fontSize: {
        "h1": "48px",
        "h2": "32px",
        "h3": "24px",
        "body-large": "18px",
        "body": "16px",
        "body-small": "14px",
        "label": "12px",
      },

      lineHeight: {
        "tight": "1.2",
        "normal": "1.4",
        "relaxed": "1.6",
        "loose": "1.8",
      },

      // ========================================================================
      // ANIMATION
      // ========================================================================
      animation: {
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 2s linear infinite",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
        "fade-in": "fade-in 300ms ease-out",
        "slide-up": "slide-up 300ms ease-out",
        "scale-pop": "scale-pop 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(124, 58, 237, 0.6)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 30px rgba(124, 58, 237, 0.8)" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "fade-in": {
          "from": { opacity: "0" },
          "to": { opacity: "1" },
        },
        "slide-up": {
          "from": { opacity: "0", transform: "translateY(10px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-pop": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },

  plugins: [],
};

export default config;
