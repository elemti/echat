/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  "plugins": [
    "@typescript-eslint"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "turbo",
    "prettier",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-explicit-any": ["warn", { ignoreRestArgs: true }],
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "@typescript-eslint/no-var-requires": "off",
    "no-restricted-globals": ["error"].concat(
      require("confusing-browser-globals")
    ),
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
