const devConfig = require("./build/dev.config");

const prodConfig = require("./build/prod.config");

module.exports = env => (!!env && env.production ? prodConfig : devConfig);
