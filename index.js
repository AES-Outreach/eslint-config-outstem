module.exports = {
  // root: true,
  // parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: './tsconfig.json',
  // },
  // plugins: ['@typescript-eslint', 'import', 'unused-imports', 'jest'],
  // extends: [
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:eslint-comments/recommended',
    // 'prettier', // this always has to be the last
  // ],
  rules: {
    'no-console': 'error'
//    // Import rules linting options
//    'import/no-extraneous-dependencies': 'off',
//    // Unused lint ignores
//    'eslint-comments/no-unused-disable': 'error',
//    'eslint-comments/no-unlimited-disable': 'error',
//    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
//    'unused-imports/no-unused-imports': 'error',
//    '@typescript-eslint/no-floating-promises': 'error',
//    '@typescript-eslint/dot-notation': 'off',
//    '@typescript-eslint/no-non-null-assertion': 'error',
//    '@typescript-eslint/naming-convention': [
//      'warn',
//      // typeLike (class, interface, typeAlias, enum, typeParameter) should use StrictPascalCase
//      { selector: 'typeLike', format: ['PascalCase'] },
//      // Destructured variables should have no casing enforced
//      {
//        selector: ['variable'],
//        modifiers: ['destructured'],
//        format: null,
//      },
//      // Stand-alone variables should be camelCase or UPPER_CASE
//      {
//        selector: ['variable'],
//        format: ['camelCase', 'UPPER_CASE'],
//      },
//      // Class properties and function parameters are only loosely enforced
//      {
//        selector: ['parameter', 'accessor', 'classProperty', 'typeProperty'],
//        format: ['snake_case', 'camelCase', 'UPPER_CASE'],
//      },
//      // Functions must use camelCase
//      {
//        selector: [
//          'function',
//          'parameter',
//          'variable',
//          'classMethod',
//          'typeMethod',
//          'classProperty',
//          'typeProperty',
//        ],
//        format: ['camelCase'],
//        types: ['function'], // To scope 'parameter', 'classProperty', 'typeProperty' and 'variable'
//        filter: { regex: 'toJSON', match: false },
//      },
//    ],
  },
};
