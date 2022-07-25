module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [ 'airbnb', 'prettier' ],
  parser: '@babel/eslint-parser',
  parserOptions: { requireConfigFile: false },
  ignorePatterns: [ 'development.js', 'src/application.js', 'src/assets.js' ],
  rules: {
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-new': 'off',
    'class-methods-use-this': 'off',
    'array-bracket-spacing': [ 'error', 'always' ],
    'array-callback-return': 'off',
    'object-curly-spacing': [ 'error', 'always' ],
    quotes: [ 'error', 'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ],
    semi: [ 'error', 'always' ]
  }
};
