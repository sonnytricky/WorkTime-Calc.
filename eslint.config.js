import prettier from "eslint-config-prettier";

export default [
  prettier,

  {
    files: ["**/*.js", "!Test-Berechnungen/**"], // "!Test-Berechnungen/**" und alle Dateien darin ignorieren

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        // 🌐 Browser Basics
        window: "readonly",
        document: "readonly",
        console: "readonly",

        // 🔥 WICHTIG für dich
        localStorage: "readonly",
        sessionStorage: "readonly",
        location: "readonly",

        // 🧠 oft gebraucht
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",

        // optional
        alert: "readonly"
      }
    },

    rules: {
      // ❌ Fehler
      "no-undef": "error",

      // ⚠️ Warnungen
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      // 🎯 Style
      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],

      // 🔧 entspannter
      "eol-last": "off",
      "no-console": "off",

      // 💡 optional nice
      "eqeqeq": "error",              // === statt ==
      "curly": "error",               // immer {} bei if
      "no-var": "error",              // kein var
      "prefer-const": "warn"          // const wenn möglich
    }
  }
];