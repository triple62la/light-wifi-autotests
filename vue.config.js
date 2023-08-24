const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,


  configureWebpack: {
    // module: {
    //   rules: [{
    //     test: /\.(ttf|otf|eot|woff|woff2)$/,
    //     use: {
    //       loader: "file-loader",
    //       options: {
    //         name: "public/fonts/[name].[ext]",
    //       },
    //     },
      // }]
    }
})
