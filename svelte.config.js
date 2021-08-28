import preprocess from "svelte-preprocess";
import path from 'path';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					'~': path.resolve('./src')
				}
			}
		}
	},

	preprocess: [mdsvex(mdsvexConfig), preprocess({
        "postcss": true
    })]
};

export default config;
