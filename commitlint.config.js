import plugin from './src/index.js';

export default {
	rules: {
		header: [2, 'always'],
		body: [2, 'always'],
		footer: [2, 'always'],
		scope: [2, 'always'],
		subject: [2, 'always'],
		type: [2, 'always'],
	},
	plugins: [plugin],
};
