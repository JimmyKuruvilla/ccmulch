import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import scss from 'rollup-plugin-scss'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'iife'
  },

  // sourceMap: 'inline',
  plugins: [
    scss({
      output: 'dist/index.css'
    }),
    typescript(),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
  ]
};