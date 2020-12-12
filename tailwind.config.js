const { fontFamily } = require('tailwindcss/defaultTheme')
/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        lavender: '#DAD4E0',
        rose: '#F5E0DC',
        lemon: '#FCE5C4',
        leaf: '#CED9CD',
        coal: '#312C2C',
        night: '#232121',
        paper: '#FFF9F3',
      },
      screens: {
        light: { raw: '(prefers-color-scheme: light)' },
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
      fontFamily: {
        display: ['DM Serif Text'],
        sans: ['Public Sans', ...fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addBase, config }) {
      addBase({
        body: {
          color: config('theme.colors.black'),
          backgroundColor: config('theme.colors.white'),
        },
        '@screen dark': {
          body: {
            color: config('theme.colors.white'),
            backgroundColor: config('theme.colors.black'),
          },
        },
      })
    },
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
