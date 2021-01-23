export default {
	/*
	 ** Nuxt rendering mode
	 ** See https://nuxtjs.org/api/configuration-mode
	 */
	mode: 'universal',
	/*
	 ** Nuxt target
	 ** See https://nuxtjs.org/api/configuration-target
	 */
	target: 'static',
	/*
	 ** Headers of the page
	 ** See https://nuxtjs.org/api/configuration-head
	 */
	head: {
		title: 'fvrests',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || '',
			},
		],
		link: [
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Public+Sans:wght@400;600&display=swap',
			},
		],
	},
	/*
	 ** Global CSS
	 */
	css: ['./assets/css/global.css'],
	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: [],
	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		'@nuxtjs/composition-api',
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://github.com/nuxt/content
		'@nuxt/content',
	],
	colorMode: {
		preference: 'system', // default value of $colorMode.preference
		fallback: 'dark', // fallback value if not system preference found
		hid: 'nuxt-color-mode-script',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classPrefix: '',
		classSuffix: '',
		storageKey: 'nuxt-color-mode',
	},
	/*
	 ** Content module configuration
	 ** See https://content.nuxtjs.org/configuration
	 */
	content: {},
	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {
		extend(config, ctx) {
			module: {
				rules: [
					// ... other rules omitted
					{
						test: /\.css$/,
						use: [
							'vue-style-loader',
							{
								loader: 'css-loader',
								options: {
									// enable CSS Modules
									modules: true,
									// customize generated class names
									localIdentName: '[local]_[hash:base64:8]',
								},
							},
						],
					},
				]
			}
		},
	},
}
