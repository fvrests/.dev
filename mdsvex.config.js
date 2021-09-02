import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [],
	layout: {
		notes: path.join(dirname, './src/routes/notes/_layout.svelte'),
		projects: path.join(dirname, './src/routes/projects/_layout.svelte')
		// _: path.join(dirname, './src/routes/__layout.svelte')
	}
};

export default config;
