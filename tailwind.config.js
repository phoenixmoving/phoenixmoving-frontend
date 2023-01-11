const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // https://vercel.com/design/color
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
      },
      // fontFamily: {
      //   sans: ['Inter', ...defaultTheme.fontFamily.sans],
      // },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        '3xl': '0 0 1px 0 rgb(0 0 0 / 31%), 0 5px 8px -2px rgb(0 0 0 / 25%);',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.5rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['2rem', { lineHeight: '3rem' }],
        '4xl': ['2.5rem', { lineHeight: '3rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      colors: {
        palette: {
          pink: '#f21b7f',
          blue: '#0070F3',
          cyan: '#00ba7c',
          orange: '#F5A623',
          primary: { 500: '#7900ff', 900: '#5400b2' },
          secondary: { 500: '#FFC600', 900: '#b28a00' },
          background: '#f5f8fd',
          footer: '#202124',
        },
      },
      keyframes: ({ theme }) => ({
        rerender: {
          '0%': {
            'border-color': theme('colors.vercel.pink'),
          },
          '40%': {
            'border-color': theme('colors.vercel.pink'),
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
          '40%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: 1,
          },
          '40%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};

// const defaultTheme = require('tailwindcss/defaultTheme');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/**/*.{js,jsx}'],
//   theme: {
//     fontSize: {
//       xs: ['0.75rem', { lineHeight: '1rem' }],
//       sm: ['0.875rem', { lineHeight: '1.5rem' }],
//       base: ['1rem', { lineHeight: '1.5rem' }],
//       lg: ['1.125rem', { lineHeight: '2rem' }],
//       xl: ['1.25rem', { lineHeight: '1.75rem' }],
//       '2xl': ['1.5rem', { lineHeight: '2rem' }],
//       '3xl': ['2rem', { lineHeight: '3rem' }],
//       '4xl': ['2.5rem', { lineHeight: '3rem' }],
//       '5xl': ['3rem', { lineHeight: '1' }],
//       '6xl': ['3.75rem', { lineHeight: '1' }],
//       '7xl': ['4.5rem', { lineHeight: '1' }],
//       '8xl': ['6rem', { lineHeight: '1' }],
//       '9xl': ['8rem', { lineHeight: '1' }],
//     },
//     extend: {
//       animation: {
//         'fade-in': 'fade-in 0.5s linear forwards',
//         marquee: 'marquee var(--marquee-duration) linear infinite',
//         'spin-slow': 'spin 4s linear infinite',
//         'spin-slower': 'spin 6s linear infinite',
//         'spin-reverse': 'spin-reverse 1s linear infinite',
//         'spin-reverse-slow': 'spin-reverse 4s linear infinite',
//         'spin-reverse-slower': 'spin-reverse 6s linear infinite',
//       },
//       borderRadius: {
//         '4xl': '2rem',
//         '5xl': '2.5rem',
//       },
//       // colors: ({ colors }) => ({
//       //   gray: colors.neutral,
//       // }),
//       colors: {
//         palette: {
//           pink: '#FF0080',
//           blue: '#0070F3',
//           cyan: '#50E3C2',
//           orange: '#F5A623',
//           primary: { 500: '#7900ff', 900: '#5400b2' },
//           secondary: { 500: '#FFC600', 900: '#b28a00' },
//         },
//       },
//       fontFamily: {
//         sans: ['Inter', ...defaultTheme.fontFamily.sans],
//       },
//       keyframes: {
//         'fade-in': {
//           from: {
//             opacity: 0,
//           },
//           to: {
//             opacity: 1,
//           },
//         },
//         marquee: {
//           '100%': {
//             transform: 'translateY(-50%)',
//           },
//         },
//         'spin-reverse': {
//           to: {
//             transform: 'rotate(-360deg)',
//           },
//         },
//       },
//       maxWidth: {
//         '2xl': '40rem',
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//     require('@tailwindcss/aspect-ratio'),
//   ],
// };
