const { defineConfig } = require('@rspack/cli')
const { VueLoaderPlugin } = require('vue-loader')

const config = defineConfig({
  context: __dirname,

  entry: { main: './src/main.ts' },

  devServer: {
    open: true,
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['.vue', '...'],
  },

  experiments: { css: true },

  builtins: {
    html: [
      {
        template: './index.html',
        title: 'Vue2 + TSX + Rspack',
        favicon: './src/assets/logo.png',
      },
    ],
  },

  plugins: [new VueLoaderPlugin()],

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            experimentalInlineMatchResource: true,
            compilerOptions: { preserveWhitespace: false },
          },
        },
      },
      {
        test: /\.ts$/,
        loader: 'builtin:swc-loader',
        options: {
          sourceMap: true,
          jsc: {
            parser: {
              syntax: 'typescript',
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.less$/,
        use: 'less-loader',
        type: 'css',
      },
    ],
  },
})

module.exports = config
