import panda from '@pandacss/eslint-plugin'

export default [
  { files: ['src/**/*.jsx'], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  await panda.configs.recommended({ configPath: './panda.config.ts' }),
]
