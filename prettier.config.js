/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: '**/*.svg',
      options: {
        parser: 'html',
        htmlWhitespaceSensitivity: 'ignore',
      },
    },
  ],
};

export default config;
