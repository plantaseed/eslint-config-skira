module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended', 'prettier/react'],
  rules: {
    // Disable

    // Eslint
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
    'no-bitwise': 'off',
    'no-cond-assign': 'off',
    'no-await-in-loop': 'off',

    // React
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',

    // Import
    'import/prefer-default-export': 'off',

    // Customized errors
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/click-events-have-key-events': 1,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['config/*.js', '**/*.spec.*', '**/webpack.*.js', '**/app/index.jsx']
      }
    ],
    'no-unused-vars': ['error', { varsIgnorePattern: 'debug' }],
    'max-len': [
      'warn',
      {
        code: 100,
        tabWidth: 2,
        comments: 100,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['parent', 'internal', 'sibling', 'index', 'unknown']
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  },
};
