module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    "brace-style": "error",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "eqeqeq": "warn",
    "func-call-spacing": [
      "error",
      "never"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "jsx-a11y/anchor-is-valid": "off",
    "key-spacing": [
      "error",
      {
        "beforeColon": false
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true
      }
    ],
    "no-console": "off",
    "no-fallthrough": "warn",
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "varsIgnorePattern": "process",
        "ignoreRestSiblings": true
      }
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "prefer-const": "error",
    "quotes": ["error", "double"],
    "react/prop-types": [
      0
    ],
    "semi": [
      "error",
      "always"
    ],
    "space-infix-ops": [
      "error",
      {
        "int32Hint": false
      }
    ]
  },
};
