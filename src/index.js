import { spellCheckDocument } from 'cspell-lib';

const check = async (text) => {
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

	return result.issues.length === 0;
};

export default {
	rules: {
		header: async ({ header }) => {
			const result = await check(header);

			return [result, 'header may not be misspelled'];
		},
		body: async ({ body }) => {
			const result = await check(body);

			return [result, 'body may not be misspelled'];
		},
		footer: async ({ footer }) => {
			const result = await check(footer);

			return [result, 'footer may not be misspelled'];
		},
		scope: async ({ scope }) => {
			const result = await check(scope);

			return [result, 'scope may not be misspelled'];
		},
		subject: async ({ subject }) => {
			const result = await check(subject);

			return [result, 'subject may not be misspelled'];
		},
		type: async ({ type }) => {
			const result = await check(type);

			return [result, 'type may not be misspelled'];
		},
	},
};
