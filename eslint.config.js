export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      indent: ["error", 2],
      semi: ["error", "always"],
      quotes: ["error", "double"]
    }
  }
];