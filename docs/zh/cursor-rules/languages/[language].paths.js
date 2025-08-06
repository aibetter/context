import { readdirSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

export default {
  paths: () => {
    const dirPath = resolve(__dirname, '../../../../data/cursor/rules/languages')
    const paths = readdirSync(dirPath)

    return paths.map((path) => {
      const language = path.split('.')[0]
      const content = readFileSync(join(dirPath, path), 'utf-8')

      return ({
        params: {
          language: language.toLocaleLowerCase(),
          languageRaw: language,
        },
        content,
      })
    })
  },
}
