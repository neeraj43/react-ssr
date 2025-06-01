const path = require('path');

module.exports = {
  entry: './src/client.jsx', // your client entry point
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.js',
  },
  mode: 'development', // change to 'production' for production builds
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map', // helpful for debugging
};