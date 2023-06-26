const { defineConfig } = require("@vue/cli-service");
const Dotenv = require("dotenv-webpack");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new Dotenv()],
  },
  devServer: {
    host: "localHost",
  },
});
