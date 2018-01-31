var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, './src/index')
    ],
    target: 'web',
    output: {
        path: __dirname, // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['react-hot-loader/webpack', 'babel-loader'] },
            { test: /(\.css)$/, loaders: ['style', 'css'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
    }
};