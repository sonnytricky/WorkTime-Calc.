export default [
  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly"
      }
    },

    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "eol-last": ["error", "always"],
      "no-console": "off"
    }
  }
];