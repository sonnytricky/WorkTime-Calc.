export default [
  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly"
      }
    },

    rules: {
      // 🔥 wichtig für dich
      "no-undef": "error",

      // ⚠️ weniger nervig
      "no-unused-vars": "warn",

      // 🎯 dein Stil: 2 spaces (WICHTIG angepasst)
      indent: ["error", 2],

      quotes: ["error", "double"],
      semi: ["error", "always"],

      // 🔥 NICHT mehr blocken
      "eol-last": "off",

      // console erlauben
      "no-console": "off"
    }
  }
];