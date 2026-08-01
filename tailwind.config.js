/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
        cute: ['Pacifico', 'cursive'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        midnight: {
          950: '#050816',
          900: '#0B1120',
          800: '#131B2E',
        },
        boy: {
          primary: '#4F46E5',
          secondary: '#7C3AED',
          accent: '#22D3EE',
        },
        girl: {
          primary: '#EC4899',
          secondary: '#A855F7',
          accent: '#FDA4AF',
        },
        gold: '#F5C453',
      },
      backgroundImage: {
        'aurora-boy': 'radial-gradient(60% 60% at 20% 20%, rgba(79,70,229,0.35), transparent 60%), radial-gradient(50% 50% at 80% 30%, rgba(34,211,238,0.25), transparent 60%), radial-gradient(60% 60% at 50% 90%, rgba(124,58,237,0.3), transparent 60%)',
        'aurora-girl': 'radial-gradient(60% 60% at 20% 20%, rgba(236,72,153,0.35), transparent 60%), radial-gradient(50% 50% at 80% 30%, rgba(253,164,175,0.3), transparent 60%), radial-gradient(60% 60% at 50% 90%, rgba(168,85,247,0.3), transparent 60%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        heartbeat: 'heartbeat 1.6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-22px) translateX(8px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.12)' },
          '40%': { transform: 'scale(1)' },
          '60%': { transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
      },
    },
  },
  plugins: [],
};
