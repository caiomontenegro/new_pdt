const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/scss/_variables.scss";'
      }
    }
  }
}
