const path = require("path");

const config = {
  appName: "Varie",
  host: "varie-docs.test",
  mode: process.env.NODE_ENV,
  root: path.resolve(__dirname),
  outputPath: path.join(__dirname, "public"),
  isProduction: process.env.NODE_ENV !== "development",
};

module.exports = {
  mode: config.mode,
  context: config.root,
  devtool: config.isProduction ? "source-map" : "eval-source-map",
  entry: {
    app: [
      path.join(config.root, "app/app.ts"),
      path.join(config.root, "resources/sass/app.scss"),
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: "vendors",
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: "all",
        },
        common: {
          name: "chunk-common",
          minChunks: 2,
          priority: -20,
          chunks: "all",
          reuseExistingChunk: true,
        },
      },
    },
  },
  output: {
    publicPath: "/",
    path: config.outputPath,
    filename: "js/[name].js",
    chunkFilename: "js/[name].js",
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync|varie)$/,
    rules: [
      require("./build/loaders/js")(),
      require("./build/loaders/ts")(),
      require("./build/loaders/vue")(),
      require("./build/loaders/json")(),
      require("./build/loaders/scss")(config),
      require("./build/loaders/html")(),
      require("./build/loaders/images")(),
      require("./build/loaders/fonts")(),
      require("./build/loaders/markdown")(),
    ],
  },
  plugins: [
    require("./build/plugins/clean")(config),
    require("./build/plugins/html")(),
    require("./build/plugins/vue")(),
    require("./build/plugins/cssExtract")(),
    require("./build/plugins/define")({
      ENV: config.mode,
    }),
    require("./build/plugins/preload")(),
    require("./build/plugins/errors")(),
    require("./build/plugins/hashedModuleIds")(),
    require("./build/plugins/notifications")(config),
    require("./build/plugins/browserSync")(config),
  ],
  resolve: {
    symlinks: false,
    extensions: [".js", ".jsx", ".ts", ".tsx", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@app": path.join(__dirname, "app"),
      "@routes": path.join(__dirname, "routes"),
      "@config": path.join(__dirname, "config"),
      "@store": path.join(__dirname, "app/store"),
      "@models": path.join(__dirname, "app/models"),
      "@resources": path.join(__dirname, "resources"),
      "@views": path.join(__dirname, "resources/views"),
      "@components": path.join(__dirname, "app/components"),
    },
  },
};
