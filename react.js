module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    './base.js', 
    './naming/react', 
    './overrides.js'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
};
