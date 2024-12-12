import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import prettierPlugin from 'eslint-plugin-prettier'
import importPlugin from 'eslint-plugin-import'
// Added import plugin
export default [
  {
    files: ['**/*.{js,mjs,jsx,vue}'],
  },
  {
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
  skipFormatting,
  {
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'import/newline-after-import': ['error', { count: 1 }],
      'vue/block-spacing': 'error', // Prevent spaces inside braces
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1, // No blank lines allowed within styles
          maxEOF: 1, // Allow one blank line at the end of file
          maxBOF: 0, // No blank lines at the start
        },
      ],
      // Turn Prettier issues into ESLint errors
      // Prevent multiple blank lines in all files
      // Require a newline after imports
    },
  },
]
