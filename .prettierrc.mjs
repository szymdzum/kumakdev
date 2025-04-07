// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  printWidth: 100,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['*.json', '*.md', '*.mdx'],
      options: {
        useTabs: false,
        tabWidth: 2,
      },
    },
  ],
};
