module.exports	=	{
	entry:	"./js/app.jsx",
	output:	{
		publicPath: "./",
		filename: "js/out.js"
	},
	devServer: {
		inline: true,
		contentBase: "./",
		port: 3001
	},
	watch:	true,
	module:	{
		loaders: [
			{
				test: /\.jsx$/,		
				exclude: /node_modules/,
				loader:	'babel-loader',
				query: {
					presets: ['es2015','stage-2','react']
				}
			},
			{
				test:/\.(png|jpe?g|gif)$/,
				exclude:/node_modules/,
				loader: 'url-loader?limit=1024&name=/img/[name].[ext]'
			},
			{
				test   : /\.css$/,
				loaders: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,		
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
}
