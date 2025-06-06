import antfu from '@antfu/eslint-config'

export default antfu(
  {
    react: true,
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: false,
      quotes: 'single',
      'jsx-quotes': 'prefer-double',
    },
  },
  {
    rules: {
      'no-console': 'warn',
      'antfu/no-top-level-await': 'off',
      'node/prefer-global/process': 'off',
      'style/quote-props': 'off',
      'style/comma-dangle': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          groups: [
            'type',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
)
