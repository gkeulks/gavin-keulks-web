// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://gavinkeulks.com',
	integrations: [
		// mock-up routes carry noindex; keep them out of the sitemap too
		sitemap({ filter: (page) => !page.includes('/preview/') }),
	],
});
