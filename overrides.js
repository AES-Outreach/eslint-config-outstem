module.exports = {
  extends: [
    'prettier', // this always has to be the last
  ],
  rules: {
    // MISC RULES
    'no-only-tests/no-only-tests': 'error',
    'unused-imports/no-unused-imports': 'error',
    'no-restricted-imports': 'error',
    'no-underscore-dangle': 'off',
    'no-console': ['error', { allow: ['error', 'warn'] }],
    // TODO: what are these next two??
    'id-blacklist': 'off',
    'id-match': 'off',
    'prefer-arrow/prefer-arrow-functions': 'error',
    'prefer-const': 'error',
    'use-isnan': 'error',
    'jsdoc/newline-after-description': 'off',
    'no-var': 'error',
    'no-shadow': 'off', // This rule must be disabled because it conflicts with @typescript-eslint/no-shadow
    'no-warning-comments': [
      'error',
      {
        terms: ['DEBUG'],
      },
    ],

    // TODO: this one isn't in everything why??
    // Import rules linting options
    'import/no-extraneous-dependencies': 'off',

    // ESLINT-COMMENTS
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],

    // TYPESCRIPT
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit',
      },
    ],
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/ban-types': 'error',
    // TODO: do we want this one??
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
  },
};
