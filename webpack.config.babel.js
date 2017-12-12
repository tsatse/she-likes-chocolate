import OpenBrowserPlugin from 'open-browser-webpack-plugin';
import packageJSON from './package.json';

export default {
  context: __dirname,
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'dist/index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      // {
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   loader: 'babel-loader!eslint-loader',
      // },
    ],
  },
  devtool: 'source-map',
  externals: {
    jquery: 'jQuery',
  },
  devServer: {
    port: 8080,
    contentBase: `${__dirname}/`,
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080/demo' }),
  ],
};

