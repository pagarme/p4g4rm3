const { uglify } = require('rollup-plugin-uglify')
const babel = require('rollup-plugin-babel')

const config = {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: 'p4g4rm3',
    exports: 'named',
    file: 'dist/index.js',
  },
  plugins: [
    babel(),
  ],
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(uglify({
    compress: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      warnings: false,
    },
  }))
}

module.exports = config
