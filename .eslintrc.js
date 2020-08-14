module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      tsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  root: true,
  rules: {
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'newline-before-return': 'error',
    'no-dupe-class-members': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'eol-last': ['error', 'always'],
  },
}
