<script lang="ts" setup>
import data from '../../../../data/mcp/servers/data.json'
import { useI18n } from '../composables/useI18n'
import { navigate } from '../utils/navigate'

defineOptions({
  name: 'McpServers',
})

const { t } = useI18n()

const servers = data.servers

function urlToInstallInCursor({ name, command, args }: {
  name: string
  command: string
  args: string[]
}) {
  const url = `cursor://anysphere.cursor-deeplink/mcp/install?name=${name}&config=${btoa(JSON.stringify({ command, args }))}`

  return url
}
</script>

<template>
  <div>
    <div v-for="server in servers" :key="server.name">
      <h2>{{ server.name }}</h2>
      <p>{{ server.description }}</p>
      <div class="flex items-center flex-wrap gap-2">
        <button class="inline-flex items-center gap-1 cursor-pointer px-2 py-1 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-700" @click="navigate(server.repository)">
          <i class="icon-[hugeicons--source-code-square]" />
          <span>{{ t('button.source-code') }}</span>
        </button>
        <button class="inline-flex items-center gap-1 cursor-pointer px-2 py-1 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-700" @click="navigate(urlToInstallInCursor(server))">
          <i class="icon-[vscode-icons--file-type-cursorrules]" />
          <span>{{ t('button.add-to-cursor') }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
