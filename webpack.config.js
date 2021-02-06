const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
      
    },
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [["transform-class-properties", { "spec": true }]]
                }
            }
        },
            {
                test : /\.s?css$/,
                use : ['style-loader', 'css-loader', 'sass-loader']

            }
    ]
    }
};