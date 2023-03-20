module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/strict'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
        allowBoolean: true,
      },
    ],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowNullableBoolean: true,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    eqeqeq: ['error', 'smart'],
    // Configuration spécifique à l'accessibilité de NextJS
    // Pas nécessaire avec les liens NextJS
    'no-unused-vars': 'off',
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
  },
  overrides: [
    {
      files: ['.test.ts', '.spec.ts'],
    },
  ],
  ignorePatterns: ['**/*.test.ts', '**/*.spec.ts', 'dist'],
};
