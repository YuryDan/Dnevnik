module.exports = {
  entry: [
    'webpack-dev-server/client?http://' + require("ip").address() + ':8081/',
    './jsx/app.jsx'
  ],
  output: {
    publicPath: 'js/',
    path: __dirname + '/js/',
    filename: 'bundle.js'
  },
  devtool: '#sourcemap',
  devServer: {
	    historyApiFallback: true,
	    contentBase: './',
	    hot: true
	  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
    	  test: /\.(gif|png|jpe?g|svg)$/i,
    	  use: [
    	    'file-loader',
    	    {
    	      loader: 'image-webpack-loader',
    	      options: {
    	        bypassOnDebug: true,
    	      },
    	    },
    	  ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['react-hot-loader', 'babel-loader']
      }
    ]
  },
}
