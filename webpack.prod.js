const path = require('path');
var webpack = require('webpack');

module.exports = (env) => {
	
	
	var plugins = [ 
	//	new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }) 
	];
	
	return  {
	  resolve: {extensions: ['*','.js','.jsx']  },
	  entry: {	index: './src/index-prod.js'  },
	  output: {
		path: path.resolve(__dirname, 'dist'), 
		filename: 'index.js',
		libraryTarget: 'umd',
		publicPath:'/dist'
	  },
	//  externals: ['bootstrap','$'  ],
	  plugins: plugins,
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


