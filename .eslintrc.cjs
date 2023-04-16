module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'stylelint',
    'plugin:storybook/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'jsx-a11y', 'react-hooks'],
  env: {
    browser: true,
    jasmine: true,
    node: true,
  },
  globals: {
    module: true,
  },
  ignorePatterns: [
    'public',
    'src/serviceWorkerRegistration.ts',
    'src/service-worker.ts',
    'src/reportWebVitals.ts',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
      },
    ],
    'node/no-unsupported-features': 0,
    'node/no-unsupported-features/es-syntax': 0,
    'node/no-unsupported-features/es-builtins': 0,
    'node/no-unsupported-features/node-builtins': 0,
    'node/no-missing-require': 0,
    'node/no-missing-import': 0,
    'node/no-unpublished-require': 0,
    'node/no-unpublished-import': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'no-confusing-arrow': 0,
    'no-use-before-define': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '([aA]ction|^_)',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'sort-imports': 0,
    'react/display-name': 0,
    'react/no-unescaped-entities': 0,
    'no-unused-vars': 0,
    'no-template-curly-in-string': 0,
    'no-console': [
      'error',
      {
        allow: ['log', 'warn', 'error'],
      },
    ],
    'eslint-comments/no-unused-disable': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
