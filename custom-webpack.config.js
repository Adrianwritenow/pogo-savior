
// webpack v4 Config File

const path = require('path'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require("webpack-md5-hash");
const CopyWebpackPlugin = require('copy-webpack-plugin'); 
const TerserWebpackPlugin = require('terser-webpack-plugin'); 
const webpack = require('webpack'); 
const CopyPlugin = require('copy-webpack-plugin'); 
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 

module.exports = function makeWebpackConfig() {

	var config = {}; 

	config.entry = {
		main: './src/main.ts'
	}; 

	config.output = {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].bundle.js'
	};

	config.mode = 'production'; 

  config.target = 'web';

  config.devtool = ''; 

  config.resolve = {
  	modules: ['node_modules', './node_modules'],
    alias: {
		'animation.gsap': 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
      'TweenLite': 'gsap/src/minified/TweenLite.min.js',
      'TweenMax': 'gsap/src/minified/TweenMax.min.js',
      'TimelineLite': 'gsap/src/minified/TimelineLite.min.js',
      'TimelineMax': 'gsap/src/minified/TimelineMax.min.js',
      'ScrollMagic': 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
    }
  };

  config.module = {
		rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/, 
					use: {
						loader: 'babel-loader'
					}
				},	
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader, 
						'css-loader',
						'postcss-loader', 
						'sass-loader']
				},
	      {
	        test: /\.html$/,
	        use: [
	          {
	            loader: "html-loader",
	           	options: { minimize: true, 
				        	attrs: ['img:src', 'source:srcset', "img:data-src", "source:data-srcset"]
	           	}
	          }
	        ]
	      },
	      // {
	      //   // Loads images into CSS and Javascript files
	      //   test: /\.jpg$/,
	      //   use: {
	      //   	loader: "url-loader", 
	      //   	options: {
	      //   		esModule: false,
	      //   		limit: 20
	      //   	}
	      //  	}
	      // },
        {
      	 test: /\.(png|svg|jpg|gif|msi|woff|woff2)$/,
      	 use: {
       	 loader: 'file-loader', 
       	 options: {
       		name: "assets/[name].[contenthash].[ext]",
          esModule: false
       		}
       	}
			}
		]
	};

	config.plugins = [
	 	new webpack.optimize.ModuleConcatenationPlugin(),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}), 
		new HtmlWebpackPlugin({
			hash: true, 
			inject: true, 
			template: './src/client/index.html', 
			filename: 'index.html'
		}),
  	new FaviconsWebpackPlugin({
  		logo: './src/client/favicon.svg',
  		publicPath: '',
  		outputPath: '/',
  		prefix: '',
  		inject: true, 
  		mode: 'webapp', 
  		devMode: 'webapp',
	  	favicons: {
	      appName: 'pogo-lt',
	      developerURL: null, // prevent retrieving from the nearest package.json
	      theme_color: '#833430',
	      icons: {
	        coast: false,
	        yandex: false
	      }
	    }
  	}),
 		new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, 'dist'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      width: 1300,
      height: 800,
      penthouse: {
        blockJSRequests: false
      }
    }),
		new WebpackMd5Hash(),
	//    new CopyPlugin([
	//     { from: './src/client/assets/*.woff', to: 'assets/[name].[ext]' },
	//     { from: './src/client/assets/*.woff2', to: 'assets/[name].[ext]' },
	//      { from: './src/server/client_secret.json', to: '' },
    //     { from: './src/client/assets/*.json', to: 'assets/[name].[ext]' }
	//   ])
	  // new BundleAnalyzerPlugin()
	]

	config.optimization = {
		concatenateModules: true, 
	  splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'initial',
						priority: 20
					}
					// common: {
					// 	name: 'common',
					// 	minChunks: 2, 
					// 	chunks: 'all', 
					// 	priority: 10, 
					// 	reuseExistingChunk: true, 
					// 	enforce: true
					// }
				}
			},
		minimizer: [
			new TerserWebpackPlugin({
				sourceMap: false,
				parallel: true,
        terserOptions: {
          comments: false
        }
       // chunkFilter: (chunk) => {
	      //   // Exclude uglification for the `vendor` chunk
	      //   if (chunk.name === 'vendor') {
	      //     return false;
	      //   }
       //     return true;
       //  },
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	}


	return config; 

}(); 

