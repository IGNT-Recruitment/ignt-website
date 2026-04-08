import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0E27',
          secondary: '#1A1F3A',
          tertiary: '#0F1429',
        },
        accent: {
          purple: '#7C3AED',
          magenta: '#D946EF',
          'purple-light': '#A855F7',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0AEC0',
          tertiary: '#718096',
          disabled: '#4B5563',
        },
        purple: {
          light: '#A855F7',
          400: '#C084FC',
        },
      },
      backgroundColor: {
        bg: {
          primary: '#0A0E27',
          secondary: '#1A1F3A',
          tertiary: '#0F1429',
        },
      },
      borderColor: {
        accent: '#7C3AED',
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(124, 58, 237, 0.6)',
        'glow-magenta': '0 0 30px rgba(217, 70, 239, 0.5)',
        'glow-intense': '0 0 40px rgba(124, 58, 237, 0.8)',
        card: '0 10px 30px rgba(0, 0, 0, 0.3)',
        subtle: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(135deg, #7C3AED, #D946EF)',
        'gradient-feature':
          'linear-gradient(135deg, #1E3A8A, #7C3AED)',
        'gradient-reverse':
          'linear-gradient(135deg, #A855F7, #7C3AED)',
      },
      borderRadius: {
        xl: '16px',
        '2xl': '24px',
      },
      scale: {
        102: '1.02',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
