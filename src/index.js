import { spellCheckDocument } from 'cspell-lib';

async function check(text) {
	const result = await spellCheckDocument(
		{
			text,
			uri: '',
			languageId: 'plaintext',
			locale: 'en',
		},
		{},
		{},
	);

	return {
		result: result.issues.length === 0,
		words: result.issues.map(issue => issue.text),
	};
}

export default {
	rules: {
		'spellcheck/header': async ({ header }) => {
			const { result, words } = await check(header);

			return [result, `header may not be misspelled: ${words.join(', ')}`];
		},
		'spellcheck/body': async ({ body }) => {
			const { result, words } = await check(body);

			return [result, `body may not be misspelled: ${words.join(', ')}`];
		},
		'spellcheck/footer': async ({ footer }) => {
			const { result, words } = await check(footer);

			return [result, `footer may not be misspelled: ${words.join(', ')}`];
		},
		'spellcheck/scope': async ({ scope }) => {
			const { result, words } = await check(scope);

			return [result, `scope may not be misspelled: ${words.join(', ')}`];
		},
		'spellcheck/subject': async ({ subject }) => {
			const { result, words } = await check(subject);

			return [result, `subject may not be misspelled: ${words.join(', ')}`];
		},
		'spellcheck/type': async ({ type }) => {
			const { result, words } = await check(type);

			return [result, `type may not be misspelled: ${words.join(', ')}`];
		},
	},
};
