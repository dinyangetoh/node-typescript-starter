module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:prettier/recommended', 'airbnb-base'],
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.js'],
      rules: {
        'no-console': 0,
        'class-methods-use-this': 0,
        'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
        'import/prefer-default-export': 0,
        'import/no-relative-packages': 0,
        'max-classes-per-file': 0,
        'max-len': [
          'error',
          {
            code: 120,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
          },
        ],
        'no-param-reassign': 'warn',
        'no-underscore-dangle': 0,
        'prettier/prettier': 'error',
        'sort-imports': [
          'error',
          {
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
          },
        ],
        indent: [2, 'tab'],
        quotes: [2, 'single'],
      },
    },
    {
      extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-useless-constructor': 0,
        '@typescript-eslint/indent': 0,
      },
    },
    {
      files: ['*.json'],
      extends: ['plugin:json/recommended'],
      rules: {
        'prettier/prettier': 'error',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {},
};
