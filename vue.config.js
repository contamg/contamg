module.exports = {
  pwa: {
    name: "Conta MG",
    manifestCrossorigin: "anonymous"
  },
  css: {
    loaderOptions: {
      stylus: {
        imports: ["./_variables.styl"],
        paths: ["./src/stylus"]
      }
    }
  }
};
