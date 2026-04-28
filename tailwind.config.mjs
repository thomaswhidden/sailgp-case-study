/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink:     '#0B1F26',
        'ink-2': '#13343F',
        bone:    '#F2EBDD',
        'bone-2':'#E6DCC8',
        sun:     '#E97451',
        'sun-2': '#F2A65A',
        mute:    '#5A6E76',
      },
      fontFamily: {
        display: ['"Instrument Serif"', '"Fraunces"', 'Georgia', 'serif'],
        serif:   ['"Fraunces"', 'Georgia', 'serif'],
        sans:    ['"Space Grotesk"', '-apple-system', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: '#0B1F26',
            lineHeight: '1.7',
            fontFamily: '"Fraunces", Georgia, serif',
            a: {
              color: '#E97451',
              textDecoration: 'underline',
              '&:hover': { color: '#0B1F26' },
            },
            'h1, h2, h3, h4': {
              fontFamily: '"Instrument Serif", "Fraunces", Georgia, serif',
              fontWeight: '400',
              color: '#0B1F26',
            },
            'h2': { marginTop: '2em' },
            strong: { color: '#0B1F26', fontWeight: '600' },
            blockquote: {
              borderLeftColor: '#E97451',
              fontStyle: 'italic',
              color: '#5A6E76',
            },
          },
        },
        bone: {
          css: {
            color: '#F2EBDD',
            'h1, h2, h3, h4': { color: '#F2EBDD' },
            a: { color: '#E97451' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
