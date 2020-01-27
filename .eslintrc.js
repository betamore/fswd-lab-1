module.exports = {
  env: {
    node: true
  },
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ["*.test.js"],
      env: {
        jest: true
      }
    }
  ]
};
