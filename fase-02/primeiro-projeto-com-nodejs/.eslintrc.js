module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never',
      }
    ]
  },
  'settings': {
    'import/resolver': {
      'typescript': {}
    }
  },
  'prettier/prettier': 'error'
}
