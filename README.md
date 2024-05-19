# `spellcheck` plugin for `commitlint`

> Spellcheck commit messages via `commitlint` and `cspell`.

---

**install**

```sh
pnpm add -D @somehow-digital/commitlint-plugin-spellcheck
```

**use**

```js
export default {
  rules: {
    'spellcheck/header': [2, 'always'],
    'spellcheck/body': [2, 'always'],
    'spellcheck/footer': [2, 'always'],
    'spellcheck/scope': [2, 'always'],
    'spellcheck/subject': [2, 'always'],
    'spellcheck/type': [2, 'always'],
  },
  plugins: ['@somehow-digital/commitlint-plugin-spellcheck'],
};
```
