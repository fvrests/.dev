const { fontFamily } = require('tailwindcss/defaultTheme')

let themePrefixes = ['text', 'bg', 'border', 'hover:bg', 'active:bg']
let themeColors = [
	'lavender',
	'rose',
	'lemon',
	'leaf',
	'coal',
	'night',
	'paper',
]

let modifiedColors = []
for (let i = 0; i < themePrefixes.length; i++) {
	for (let j = 0; j < themeColors.length; j++) {
		modifiedColors.push(`${themePrefixes[i]}-${themeColors[j]}`)
	}
}

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
	darkMode: 'class',
	theme: {
		borderWidth: {
			DEFAULT: '1px',
			0: '0',
			2: '2px',
			3: '3px',
			4: '4px',
			6: '6px',
			8: '8px',
			12: '12px',
		},
		extend: {
			colors: {
				lavender: 'var(--color-lavender)',
				rose: 'var(--color-rose)',
				lemon: 'var(--color-lemon)',
				leaf: 'var(--color-leaf)',
				coal: 'var(--color-coal)',
				night: 'var(--color-night)',
				paper: 'var(--color-paper)',
			},
			fontFamily: {
				display: ['DM Serif Text', 'Public Sans', ...fontFamily.sans],
				sans: ['Public Sans', ...fontFamily.sans],
			},
			lineHeight: {
				'extra-loose': '2.5',
			},
			borderOpacity: ['active'],
		},
	},
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
		options: {
			safelist: [...modifiedColors],
		},
	},
}
