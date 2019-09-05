const { uglify } = require('rollup-plugin-uglify')
const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')

const config = {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: 'p4g4rm3',
    exports: 'named',
    file: 'dist/index.js',
  },
  plugins: [
    commonjs({
      namedExports: {
        zxcvbn: ['default'],
      },
    }),
    resolve(),
    babel(),
  ],
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(uglify({
    compress: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
    },
  }))
}

module.exports = config
