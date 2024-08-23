module.exports = {
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'unused-imports',
    'no-only-tests',
    'prefer-arrow',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
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
  rules: {
    'no-warning-comments': [
      'error',
      {
        terms: ['DEBUG'],
      },
    ],
  },
};
