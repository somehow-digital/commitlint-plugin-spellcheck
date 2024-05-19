import plugin from './src/index.js';

export default {
	rules: {
		'spellcheck/header': [2, 'always'],
		'spellcheck/body': [2, 'always'],
		'spellcheck/footer': [2, 'always'],
		'spellcheck/scope': [2, 'always'],
		'spellcheck/subject': [2, 'always'],
		'spellcheck/type': [2, 'always'],
	},
	plugins: [plugin],
};
