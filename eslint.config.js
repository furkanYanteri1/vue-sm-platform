import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import prettierPlugin from 'eslint-plugin-prettier'
import importPlugin from 'eslint-plugin-import' // Added import plugin

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
  // Add the prettier plugin configuration:
  {
    // Added import plugin to the plugins object
    plugins: { prettier: prettierPlugin, import: importPlugin },
    rules: {
      // This turns Prettier issues into ESLint errors:
      'prettier/prettier': 'error',

      // your other rules like no-multiple-empty-lines:
      'no-multiple-empty-lines': ['error', { max: 1 }],

      // Require a newline after imports:
      'import/newline-after-import': ['error', { count: 1 }],
    },
  },
]
