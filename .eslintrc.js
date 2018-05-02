module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'indent': ['error', 4],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
