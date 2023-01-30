module.exports = {
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'unused-imports',
    'no-only-tests',
    'prefer-arrow',
  ],
  parserOptions: {
    ecmaVersion: 9,
    project: './tsconfig.json',
  },
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
  ],
};
