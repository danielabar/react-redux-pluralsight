import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',

  // set to false to have webpack display a list of all the files that it's bundling
  noInfo: false,

  // pass an array for entrypoint, useful for injecting middleware like hot reloading
  // important to make the actual app entrypoint LAST in this list
  // do not specify file extension
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],

  // for this app, targetting browser, could also target node (webpack would bundle differently)
  target: 'web',

  // tell webpack where it should create dev bundle
  // for development, will NOT generate any physical files, bundle is served from memory,
  // however, still need to define a path and name so webpack can simulate the physical files existence
  // __dirname is node variable to get current directory
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },

  // tell webpack's dev server where the application's code is
  devServer: {
    contentBase: './src'
  },

  // prevent errors from breaking hot reloading experience
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  // tell webpack the types of files it should handle
  module: {
    loaders: [
      // transpile js with babel
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      // load css
      {test: /(\.css)$/, loaders: ['style', 'css']},
      // loaders for bootstrap font files
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
    ]
  }
};
