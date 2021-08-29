const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [],
	layout: {
		notes: './src/routes/notes/_layout.svelte',
		projects: './src/routes/projects/_layout.svelte',
		_: './src/routes/__layout.svelte'
	}
};

export default config;
