const path = require('path');
var webpack = require('webpack');


module.exports = (env) => {

	var plugins = [ 
		new webpack.ProvidePlugin({  $: "jquery", 	jQuery: "jquery"})
	];
	
	
	
	
	
	return  {
	  resolve: {extensions: ['*','.js','.jsx']  },
	  entry: {	index: './src/index-dev.js'  },

	  output: {
		path: path.resolve(__dirname, 'dist'), 
		filename: '[name].js',
	  },
      plugins: plugins,
	  devServer: {
		contentBase:  require('path').join(__dirname, "src"),
		publicPath: '/',
		historyApiFallback: true,
		inline: true,
		port: 8888,
	  },
	  module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
	    	{ test:/\.(s*)css$/, use:['style-loader','css-loader', 'sass-loader']  },	
		    {
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: {
					loader: 'file-loader',
					options: { name: '[name].[ext]',  outputPath: 'fonts/'} 
				}
		    }		
		]
	  }
	}

}


