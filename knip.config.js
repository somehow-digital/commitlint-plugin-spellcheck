export default {
	entry: ['src/index.ts'],
	ignoreDependencies: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/github',
		'@semantic-release/npm',
		'@semantic-release/release-notes-generator',
	],
	project: ['src/**'],
};
