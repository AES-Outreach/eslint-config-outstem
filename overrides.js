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
    'no-console': ['error', { allow: ['error'] }],
    // TODO: what are these next two??
    'id-blacklist': 'off',
    'id-match': 'off',
    'prefer-arrow/prefer-arrow-functions': 'error',
    'prefer-const': 'error',
    'use-isnan': 'error',
    'jasmine/no-focused-tests': 'error',
    'jasmine/no-disabled-tests': 'error',
    'jsdoc/newline-after-description': 'off',
    'no-var': 'error',
    'no-shadow': 'off', // This rule must be disabled because it conflicts with @typescript-eslint/no-shadow

    // TODO: this one isn't in everything why??
    // Import rules linting options
    'import/no-extraneous-dependencies': 'off',

    // ESLINT-COMMENTS
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/disable-enable-pair': [
      'error',
      { allowWholeFile: true },
    ],

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
    '@typescript-eslint/naming-convention': [
      'error',
      // typeLike (class, interface, typeAlias, enum, typeParameter) should use StrictPascalCase
      { selector: ['typeLike'], format: ['PascalCase'] },
      // Destructured variables should have no casing enforced
      {
        selector: ['variable'],
        modifiers: ['destructured'],
        format: null,
      },
      // Stand-alone variables should be camelCase or UPPER_CASE
      {
        selector: ['variable'],
        format: ['camelCase', 'UPPER_CASE'],
      },
      // Class properties and function parameters are only loosely enforced
      {
        selector: [
          'parameter',
          'accessor',
          'classProperty',
          'typeProperty',
        ],
        format: ['snake_case', 'camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      // Functions must use camelCase
      {
        selector: [
          'function',
          'parameter',
          'variable',
          'classMethod',
          'typeMethod',
          'classProperty',
          'typeProperty',
        ],
        format: ['camelCase'],
        types: ['function'], // To scope 'parameter', 'classProperty', 'typeProperty' and 'variable'
        filter: { regex: 'toJSON', match: false },
      },
    ],
    '@typescript-eslint/consistent-indexed-object-style': [
      'error',
      'record',
    ],
  },
};
