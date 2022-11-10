module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.sa?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader", "postcss-loader",
          ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
        ],
      },
      {
        // config for fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
            },
          },
        ],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
    ],
  },
});
