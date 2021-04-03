module.exports = {
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
  ],
  settings: {
    react: {
      version: 'latest',
    },
  },
  rules: {
    'no-console': 'warn',
    'react/prop-types': ['off'],
  },
};
