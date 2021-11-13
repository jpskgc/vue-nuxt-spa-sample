module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended",
    "@nuxtjs/eslint-config-typescript"
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};