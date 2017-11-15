var path = require('path');

module.exports = {
	entry : './src/index.js',
	output : {
		filename : 'bundle.js'
	},

	module : {
	    loaders : [
	      {
	        test : /\.js$/,
	        include: path.resolve(__dirname, 'src/'),
	        loader : 'babel-loader'
	      }
	    ]
  	}
}
