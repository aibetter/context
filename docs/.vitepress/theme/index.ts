import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import McpServers from './views/McpServers.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component(McpServers.name!, McpServers)
  },
} satisfies Theme
