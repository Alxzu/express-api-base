module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb-base', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'no-console': 'off',
    'no-unused-vars': [2, { 'args': 'after-used', 'argsIgnorePattern': '^_' }],
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.json'],
      },
    },
  },
};
