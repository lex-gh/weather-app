const { defineConfig } = require("@vue/cli-service");
// const Dotenv = require("dotenv-webpack");
module.exports = defineConfig({
  publicPath: "/weather-app/",
  transpileDependencies: true,
  configureWebpack: {},
});
