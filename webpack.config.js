const path = require('path');
const webpack = require('webpack');
const nodeExternals= require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const {
    NODE_ENV = 'production',
} = process.env;

module.exports = {
    entry:'./src/server.ts'
    ,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    externals: [nodeExternals()],
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/views', to:'./views' }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /\.ejs$/,
                use: {
                    loader: "ejs-loader"
                }
            }
        ]
    }
}