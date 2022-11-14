module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  rules: {
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-unreachable': 'warn',
    eqeqeq: 'warn',
    'no-redeclare': 'error',
    'require-await': 'warn',
    'no-shadow': 'warn',
    'no-undef': 'warn',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'warn',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'warn',
    'prefer-const': 'warn',
  }
};
