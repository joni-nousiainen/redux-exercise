module.exports = {
    entry: "./src/index.js",

    output: {
        path: './target',
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/
            }
        ]
    }
};