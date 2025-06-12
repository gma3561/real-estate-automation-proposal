/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      fontSize: {
        'xs': '0.75rem',     // 12px
        'sm': '0.875rem',    // 14px
        'base': '1rem',      // 16px
        'lg': '1.125rem',    // 18px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '1.875rem',   // 30px
        '4xl': '2.25rem',    // 36px
        '5xl': '3rem',       // 48px
        '6xl': '3.75rem',    // 60px
        '7xl': '4.5rem',     // 72px
        '8xl': '6rem',       // 96px
        '9xl': '8rem',       // 128px
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'inner-lg': 'inset 0 10px 25px 0 rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.5)',
        'glow-purple': '0 0 20px rgba(147, 51, 234, 0.5)',
        'glow-orange': '0 0 20px rgba(249, 115, 22, 0.5)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'rotate-in': 'rotateIn 0.6s ease-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-180deg)', opacity: '0' },
          '100%': { transform: 'rotate(0deg)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"30\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '104': '1.04',
        '105': '1.05',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    function({ addUtilities, addComponents, theme }) {
      addUtilities({
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.text-gradient': {
          'background': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-blue': {
          'background': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-green': {
          'background': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-purple': {
          'background': 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      });

      addComponents({
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          'background': 'rgba(0, 0, 0, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.card': {
          'background': 'rgba(255, 255, 255, 0.95)',
          'backdrop-filter': 'blur(20px)',
          'border-radius': theme('borderRadius.2xl'),
          'box-shadow': theme('boxShadow.lg'),
          'border': '1px solid rgba(255, 255, 255, 0.2)',
          'transition': 'all 0.3s ease',
        },
        '.card-elevated': {
          'background': 'rgba(255, 255, 255, 0.98)',
          'backdrop-filter': 'blur(20px)',
          'border-radius': theme('borderRadius.2xl'),
          'box-shadow': theme('boxShadow.2xl'),
          'border': '1px solid rgba(255, 255, 255, 0.3)',
          'transition': 'all 0.3s ease',
        },
        '.hover-lift': {
          'transition': 'all 0.3s ease',
          '&:hover': {
            'transform': 'translateY(-4px)',
            'box-shadow': theme('boxShadow.2xl'),
          },
        },
        '.btn-primary': {
          'padding': theme('spacing.3') + ' ' + theme('spacing.6'),
          'background': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
          'color': 'white',
          'font-weight': theme('fontWeight.semibold'),
          'border-radius': theme('borderRadius.xl'),
          'border': 'none',
          'cursor': 'pointer',
          'transition': 'all 0.3s ease',
          'box-shadow': theme('boxShadow.lg'),
          '&:hover': {
            'transform': 'translateY(-2px)',
            'box-shadow': theme('boxShadow.xl'),
            'background': 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
          },
          '&:active': {
            'transform': 'translateY(0)',
          },
        },
        '.btn-secondary': {
          'padding': theme('spacing.3') + ' ' + theme('spacing.6'),
          'background': 'transparent',
          'color': theme('colors.gray.700'),
          'font-weight': theme('fontWeight.semibold'),
          'border-radius': theme('borderRadius.xl'),
          'border': '2px solid ' + theme('colors.gray.300'),
          'cursor': 'pointer',
          'transition': 'all 0.3s ease',
          '&:hover': {
            'transform': 'translateY(-2px)',
            'box-shadow': theme('boxShadow.lg'),
            'background': theme('colors.gray.50'),
            'border-color': theme('colors.gray.400'),
          },
          '&:active': {
            'transform': 'translateY(0)',
          },
        },
        '.focus-ring': {
          '&:focus': {
            'outline': 'none',
            'ring': '2px',
            'ring-color': theme('colors.blue.500'),
            'ring-opacity': '0.5',
          },
        },
        '.container-responsive': {
          'width': '100%',
          'max-width': theme('screens.7xl'),
          'margin-left': 'auto',
          'margin-right': 'auto',
          'padding-left': theme('spacing.4'),
          'padding-right': theme('spacing.4'),
          '@screen sm': {
            'padding-left': theme('spacing.6'),
            'padding-right': theme('spacing.6'),
          },
          '@screen lg': {
            'padding-left': theme('spacing.8'),
            'padding-right': theme('spacing.8'),
          },
        },
        '.section-padding': {
          'padding-top': theme('spacing.16'),
          'padding-bottom': theme('spacing.16'),
          '@screen lg': {
            'padding-top': theme('spacing.20'),
            'padding-bottom': theme('spacing.20'),
          },
        },
        '.section-padding-lg': {
          'padding-top': theme('spacing.20'),
          'padding-bottom': theme('spacing.20'),
          '@screen lg': {
            'padding-top': theme('spacing.24'),
            'padding-bottom': theme('spacing.24'),
          },
        },
        '.text-headline': {
          'font-size': theme('fontSize.4xl'),
          'font-weight': theme('fontWeight.bold'),
          'line-height': theme('lineHeight.tight'),
          '@screen lg': {
            'font-size': theme('fontSize.5xl'),
          },
        },
        '.text-title': {
          'font-size': theme('fontSize.2xl'),
          'font-weight': theme('fontWeight.bold'),
          'line-height': theme('lineHeight.tight'),
          '@screen lg': {
            'font-size': theme('fontSize.3xl'),
          },
        },
        '.text-subtitle': {
          'font-size': theme('fontSize.xl'),
          'font-weight': theme('fontWeight.semibold'),
          'line-height': theme('lineHeight.relaxed'),
          '@screen lg': {
            'font-size': theme('fontSize.2xl'),
          },
        },
        '.text-body': {
          'font-size': theme('fontSize.base'),
          'line-height': theme('lineHeight.relaxed'),
          '@screen lg': {
            'font-size': theme('fontSize.lg'),
          },
        },
        '.text-caption': {
          'font-size': theme('fontSize.sm'),
          'line-height': theme('lineHeight.relaxed'),
          '@screen lg': {
            'font-size': theme('fontSize.base'),
          },
        },
      });
    },
  ],
}
