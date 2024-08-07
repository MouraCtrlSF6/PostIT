const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  // Aplication entry point path
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    // Enable navigation by url history
    historyApiFallback: true,
    open: true,
    host: 'localhost',
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname + "/public/index.html"),
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'babel-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  // Resolve file extensions without specifying it on imports
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },
  mode: "development",
};

module.exports = () => config;
