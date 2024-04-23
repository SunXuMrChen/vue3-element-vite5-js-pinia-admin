// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  parser: 'vue-eslint-parser',
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', '@vue/prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-undef': 'off',
    'prettier/prettier': ['error', { singleQuote: true }]
    // "no-console": import.meta.env.MODE === "production" ? "warn" : "off",
    // "no-debugger": import.meta.env.MODE === "production" ? "warn" : "off",
  },
  overrides: []
}
