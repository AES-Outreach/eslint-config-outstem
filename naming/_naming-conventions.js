const base = [
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
];

const functionSelector = {
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
};

// Functions must use camelCase
const baseDefault = [
  ...base,
  // we don't need this in react because if you add PascalCase then this is all the options
  // Class properties and function parameters are only loosely enforced
  {
    selector: ['parameter', 'accessor', 'classProperty', 'typeProperty'],
    format: ['snake_case', 'camelCase', 'UPPER_CASE'],
    leadingUnderscore: 'allow',
  },
  { ...functionSelector, format: ['camelCase'] },
];

// Functions must use camelCase or PascalCase because of components
const react = [
  ...base,
  {
    ...functionSelector,
    format: ['camelCase', 'PascalCase'],
  },
];

module.exports = {
  baseDefault, // default isn't allowed as a variable name in js
  react,
};
