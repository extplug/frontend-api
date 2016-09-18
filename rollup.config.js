import * as path from 'path'
import { readFileSync } from 'fs'
import babel from 'rollup-plugin-babel'
import alias from 'rollup-plugin-alias'

const meta = JSON.parse(readFileSync(path.join(__dirname, './package.json'), 'utf8'))

export default {
  entry: './src/index.js',
  format: 'cjs',
  external: id => Object.keys(meta.dependencies).concat('plug')
    .some(baseName => id.startsWith(baseName)),
  plugins: [
    babel({
      presets: [
        ['es2015', { loose: true, modules: false }]
      ],
      plugins: [
        'external-helpers'
      ],
      include: 'src/**.js'
    }),
    alias({
      lodash: path.dirname(require.resolve('lodash-es'))
    })
  ]
}
