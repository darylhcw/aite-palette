import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// https://kit.svelte.dev/docs/adapter-static#github-pages
		adapter: adapter(),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},
		alias: {
			'$lib': "src/lib/",
			'$assets': "src/lib/assets",
			'$components': "src/lib/components/",
			'$stores': "src/lib/stores/",
		},
	}
};

export default config;
