// @ts-check
import withNuxt from '../.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    files: ['pages/**/*.vue', 'layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
])
