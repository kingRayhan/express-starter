const path = require('path');
const webpack = require('webpack');
const ExtractCSS = require('extract-text-webpack-plugin');

module.exports ={
    entry: './client/app.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname , 'client/dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractCSS.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader' , {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'expanded'
                        }
                    }]
                })
            },
            {
                test: /\.sass$/,
                use: ExtractCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader' , {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'compressed'
                        }
                    }]
                })
            }
        ]
    },
    plugins: [
        new ExtractCSS('app.css')
    ]
}