import { join } from 'path'
import { readFileSync } from 'fs'
import babel from 'rollup-plugin-babel'

const meta = JSON.parse(readFileSync(join(__dirname, './package.json'), 'utf8'))

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
      ]
    })
  ]
}
