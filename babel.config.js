module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { targets: { browsers: "last 2 versions" } }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  env: {
    "production": {
      "plugins": []
    },
    "development": {
      "plugins": ["react-hot-loader/babel"]
    },
    "test": {
      "plugins": []
    }
  }
}
