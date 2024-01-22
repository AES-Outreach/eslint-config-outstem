module.exports = {
  extends: [
    './base.js', 
    './naming/react', 
    './overrides.js',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
};
