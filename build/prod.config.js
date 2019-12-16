const devConfig = require("./dev.config");

const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  ...devConfig,
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
};
