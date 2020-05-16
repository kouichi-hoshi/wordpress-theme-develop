import resolve  from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel  from '@rollup/plugin-babel';

export default {
  input: 'src/assets/js/script.js',
  output: {
    format: 'iife',
    dir: 'dist/wp-content/themes/wordpress-theme-develop' //テーマファイルを出力したいパスを指定
  },
  plugins: [
    resolve({
      jsnext: true
    }),
    commonjs(),
    babel({
      presets: [
        [
          "@babel/preset-env", {
          "modules": false,
          "targets": {
            "browsers": ['last 2 versions']
          }
        }
        ]
      ],
      babelrc: false
    })
  ],
  experimentalCodeSplitting: true
};