// import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
// import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';

// {
//     files: ['**/*.tsx'],
//     extends: [reactRecommended, reactJsxRuntime],
//   }

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    './base.js',
    './naming/react',
    './overrides.js',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
