const path = require('path');
const nextTranslate = require('next-translate');
const APP_DIR = path.resolve(__dirname);

module.exports = nextTranslate({
	reactStrictMode: true,
	webpack: (config) => {
		config.module.rules.push(
			{
				test: /\.svg$/,
				loader: 'react-svg-loader',
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		);

		config.resolve.alias = {
			...config.resolve.alias,
			'@components': `${APP_DIR}/src/components`,
			'@layouts': `${APP_DIR}/src/layouts`,
			'@icons': `${APP_DIR}/public/ui/icons`,
			'@pictures': `${APP_DIR}/public/ui/pictures`,

		};

		return config;
	},
});
