import { defineConfig } from 'vite-plus';

export default defineConfig({
	staged: {
		'**/*.*': [
			'eslint',
			'cspell --no-progress --no-must-find-files',
		],
	},
});
