const constraintOptions = ['react', 'storybook'];

export const namingRules = (...constraints) => ({
  rules: {
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
        format: [
          'camelCase',
          'UPPER_CASE',
          ...(constraints.includes('storybook') ? ['PascalCase'] : []),
        ],
      },
      ...(constraints.includes('react')
        ? [
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
          ]
        : []),
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
        types: ['function'], // To scope 'parameter', 'classProperty', 'typeProperty' and 'variable'
        filter: { regex: 'toJSON', match: false },
        format: constraints.includes('react')
          ? ['camelCase', 'PascalCase']
          : ['camelCase'],
      },
    ],
  },
});
