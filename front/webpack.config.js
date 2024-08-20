module.exports = {
  entry: {
    index: "./scripts/index.js",
    sendForm: "./scripts/sendForm.js",
  },

  output: {
    path: __dirname + "/public",
    filename: "[name].js",
  },
};
