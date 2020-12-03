module.exports = {
  root: true,
  env: {
    jest: true,
  },
  extends: [
    '@react-native-community',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['jest', '@typescript-eslint', 'prettier'],
};
