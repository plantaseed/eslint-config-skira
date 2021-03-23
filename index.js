module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['skira'],
  rules: {
    // Disable

    // Eslint
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
    'no-bitwise': 'off',
    'no-cond-assign': 'off',
    'no-await-in-loop': 'off',
    'no-case-declarations': 'off',

    // React
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',

    // Import
    'import/prefer-default-export': 'off',

    // Prettier
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 80,
        arrowParens: 'avoid',
        trailingComma: 'all',
      },
      { usePrettierrc: false },
    ],

    // Customized errors
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'config/*.js',
          '**/*.spec.*',
          '**/webpack.*.js',
          '**/app/index.jsx',
        ],
      },
    ],
    'no-unused-vars': ['error', { varsIgnorePattern: 'debug' }],
    'max-len': [
      'warn',
      {
        code: 80,
        comments: 80,
        tabWidth: 2,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['parent', 'internal', 'sibling', 'index', 'unknown'],
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // Skira
    'skira/sql-matching-double-quotes': 'warn',
  },
};
