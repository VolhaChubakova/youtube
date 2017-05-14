const path = require('path');

module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "./bundle/bundle.js"
    },
    resolveLoader: {
      modules: [
        process.env.NODE_PATH, //NODE_PATH need to be setted (e.g. C:/Users/Olga/AppData/Roaming/npm/node_modules )
              'node_modules'
      ]
    },
    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: "source-map", 

    module: {
        rules: [{
            test: /\.js?$/,
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ],
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015'] }
            }],
        }, ]
    }
}
