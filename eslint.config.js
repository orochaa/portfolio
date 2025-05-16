import plugin from 'eslint-plugin-mist3rbru'

export default [
  plugin.configs.react,
  plugin.configs.jest,
  {
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
    },
  },
  {
    files: ['**/index.ts'],
    rules: {
      '@stylistic/padding-line-between-statements': 'off',
    },
  },
]
