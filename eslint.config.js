import config from '@somehow-digital/eslint-config/basic';

export default [
	...config,
	{
		ignores: ['**/.*/'],
	},
];
