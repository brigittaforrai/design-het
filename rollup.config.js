import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { terser } from "rollup-plugin-terser"

// import serve from 'rollup-plugin-serve'
// import livereload from 'rollup-plugin-livereload'

export default {
  input: 'index.js',
  output: {
    file: 'dist/design-het-widget.js',
    format: 'umd',
    name: 'designhet'
  },
  plugins: [
    resolve({
      jsnext: true
    }),
    commonjs(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**' // only transpile our source code
    }),
    terser()
    // serve(),
    // livereload()
  ]
};
