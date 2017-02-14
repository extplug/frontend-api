import * as path from 'path'
import { readFileSync } from 'fs'
import buble from 'rollup-plugin-buble'
import alias from 'rollup-plugin-alias'

const meta = JSON.parse(readFileSync(path.join(__dirname, './package.json'), 'utf8'))

export default {
  entry: './src/index.js',
  format: 'umd',
  moduleName: 'BPI',
  external: id => Object.keys(meta.dependencies)
    .some(baseName => id.startsWith(baseName)),
  plugins: [
    buble(),
    alias({
      plug: path.dirname(require.resolve('plug-modules/es/plug/_contextRequire'))
    })
  ],
  globals: {
    underscore: '_',
    backbone: 'Backbone'
  }
}
