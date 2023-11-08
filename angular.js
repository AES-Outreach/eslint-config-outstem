module.exports = {
  extends: [
    './base.js',
    'plugin:@angular-eslint/ng-cli-compat',
    'plugin:@angular-eslint/template/process-inline-templates',
    'plugin:cypress/recommended',
    './angular-overrides.js',
    './naming/default',
    './overrides.js', // this should always be last because it's our common rules and contains prettier
  ],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'rxjs/operators',
            importNames: ['shareReplay'],
            message: "Prefer to use 'refCountedCache'",
          },
          {
            name: '@aes-outreach/ngx-resources',
            importNames: ['logValue'],
            message: "Please remove logging",
          },
        ],
      },
    ],
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
    // CYPRESS RULES
    'cypress/no-force': 'error',
    'cypress/no-pause': 'error',
  },
};
