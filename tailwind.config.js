// eslint-disable-next-line @typescript-eslint/no-require-imports
const defaultTheme = require('tailwindcss/defaultTheme');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const colors = require('tailwindcss/colors');

const hexToRgb = (hex) => {
  const normalized = hex.replace('#', '');
  const expanded =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => `${char}${char}`)
          .join('')
      : normalized;

  return `${parseInt(expanded.slice(0, 2), 16)} ${parseInt(
    expanded.slice(2, 4),
    16
  )} ${parseInt(expanded.slice(4, 6), 16)}`;
};

const colorVariable = (name, fallback) =>
  `rgb(var(--color-${name}, ${fallback}) / <alpha-value>)`;

const colorScale = (name, scale) =>
  Object.fromEntries(
    Object.entries(scale).map(([shade, value]) => [
      shade,
      colorVariable(`${name}-${shade}`, hexToRgb(value)),
    ])
  );

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './node_modules/@seerr-team/react-tailwindcss-datepicker/dist/index.esm.js',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
        width: 'width',
      },
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: colorVariable('black', '0 0 0'),
        white: colorVariable('white', '255 255 255'),
        blue: colorScale('blue', colors.blue),
        gray: colorScale('gray', colors.gray),
        green: colorScale('green', colors.green),
        indigo: colorScale('indigo', colors.indigo),
        neutral: colorScale('neutral', colors.neutral),
        orange: colorScale('orange', colors.orange),
        purple: colorScale('purple', colors.purple),
        red: colorScale('red', colors.red),
        yellow: colorScale('yellow', colors.yellow),
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.indigo.500'),
              '&:hover': {
                color: theme('colors.indigo.400'),
              },
            },

            h1: {
              color: theme('colors.gray.300'),
            },
            h2: {
              color: theme('colors.gray.300'),
            },
            h3: {
              color: theme('colors.gray.300'),
            },
            h4: {
              color: theme('colors.gray.300'),
            },
            h5: {
              color: theme('colors.gray.300'),
            },
            h6: {
              color: theme('colors.gray.300'),
            },

            strong: {
              color: theme('colors.gray.400'),
            },

            code: {
              color: theme('colors.gray.300'),
            },

            figcaption: {
              color: theme('colors.gray.500'),
            },
          },
        },
      }),
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
