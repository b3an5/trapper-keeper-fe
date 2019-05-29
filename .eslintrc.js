module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true,
    jest: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended"
  ],
  plugins: ["prettier", "react"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "lines-between-class-members": "error",

    "import/first": "error",
    "import/newline-after-import": "error",
    "import/order": "error",

    "prettier/prettier": "error",

    "react/prefer-stateless-function": "error"
  }
};
