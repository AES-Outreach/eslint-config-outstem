module.exports = {
  extends: [
    './base.js',
    'plugin:@angular-eslint/ng-cli-compat',
    'plugin:@angular-eslint/template/process-inline-templates',
    './angular-overrides.js',
    './overrides.js', // this should always be last because it's our common rules and contains prettier
  ],
  rules: {
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: 'app',
        style: 'kebab-case',
      },
    ],
    '@angular-eslint/directive-class-suffix': 'off',
    '@angular-eslint/directive-selector': [
      'off',
      {
        type: 'attribute',
        prefix: 'app',
        style: 'camelCase',
      },
    ],
    '@angular-eslint/no-output-native': 'error',
    '@angular-eslint/use-lifecycle-interface': 'error',
  },

};
