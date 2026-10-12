/** @type {import('tailwindcss').Config} */
export default {
  future: { hoverOnlyWhenSupported: true },
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Colors sampled from the Figma frames
        paper: '#F3F1F0',
        ink: '#3A3B35',
        muted: '#A3A39F',
      },
      fontFamily: {
        // Wide geometric face used in the design (single-storey "a").
        // To use the exact Figma font, add its @font-face in index.css and put its name first here.
        sans: ['"Montserrat Alternates"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // Fluid type scale: mobile (360px) -> desktop (1920px) values taken from the Figma frames
      fontSize: {
        display: ['clamp(2rem, 7.3vw, 8.75rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.5rem, 5.2vw, 6.25rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        stat: ['clamp(3rem, 7.8vw, 9.5rem)', { lineHeight: '1' }],
        'stat-label': ['clamp(0.875rem, 1.1vw, 1.375rem)', { lineHeight: '1.2' }],
        'card-title': ['clamp(1rem, 1.6vw, 1.875rem)', { lineHeight: '1.15' }],
        'card-price': ['clamp(0.875rem, 1vw, 1.25rem)', { lineHeight: '1.2' }],
        'item-title': ['clamp(1rem, 1.35vw, 1.625rem)', { lineHeight: '1.25' }],
        nav: ['clamp(0.875rem, 1.05vw, 1.25rem)', { lineHeight: '1.2' }],
        body: ['clamp(0.875rem, 1.05vw, 1.25rem)', { lineHeight: '1.5' }],
        btn: ['clamp(0.8125rem, 0.95vw, 1.0625rem)', { lineHeight: '1' }],
        small: ['clamp(0.75rem, 0.8vw, 0.9375rem)', { lineHeight: '1.4' }],
      },
      spacing: {
        gutter: 'clamp(1rem, 3.125vw, 3.75rem)',
      },
    },
  },
  plugins: [],
};
