import eslintJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import unusedImports from 'eslint-plugin-unused-imports';
import noOnly from 'eslint-plugin-no-only-tests';
import preferArrow from 'eslint-plugin-prefer-arrow-functions';
import globals from 'globals';
import { fixupPluginRules } from '@eslint/compat';

export default tsEslint.config(
  {
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      'unused-imports': unusedImports,
      'no-only-tests': fixupPluginRules(noOnly),
      'prefer-arrow-functions': fixupPluginRules(preferArrow),
    },
    languageOptions: {
      ecmaVersion: 'latest',
      parser: tsEslint.parser,
      globals: {
        ...globals.es6,
      },
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': 'error',
      'no-only-tests/no-only-tests': 'error',
      'prefer-arrow-functions/prefer-arrow-functions': [
        'error',
        {
          allowNamedFunctions: false,
          classPropertiesAllowed: false,
          disallowPrototype: false,
          returnStyle: 'unchanged',
          singleReturnOnly: false,
        },
      ],
    },
  },
  eslintJs.configs.recommended,
  tsEslint.configs.eslintRecommended,
  eslintComments.recommended,
);
