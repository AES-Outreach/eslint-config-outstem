import tsEslint from 'typescript-eslint';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import hooksPlugin from 'eslint-plugin-react-hooks';

import { fixupPluginRules } from '@eslint/compat';

////////////////////////////////////////////////////////////////////////////
// Naming copy pasta
////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////
// Naming copy pasta
////////////////////////////////////////////////////////////////////////////

export default tsEslint.config(
  {
    files: ['**/*.tsx'],
    plugins: {
      'react-hooks': fixupPluginRules(hooksPlugin),
    },
    rules: hooksPlugin.configs.recommended.rules,
  },
  {
    files: ['**/*.tsx'],
    extends: [reactRecommended, reactJsxRuntime],
  },
  // {
  //   files: ['**/*.tsx'],
  //   rules: {
  //     '@typescript-eslint/naming-convention': react,
  //   },
  // },
);
