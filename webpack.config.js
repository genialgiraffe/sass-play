const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js',
        './src/styles/main.scss',
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'resolve-url-loader',
                    }, {
                        loader: 'sass-loader',
                        options: {
                            implementation: require.resolve("sass"), // Prefer `dart-sass`
                            sourceMap: true,
                            warnRuleAsWarning: true,
                        }
                    }
                ],
            },
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'img/[name]-[hash][ext]',
                }
            },
            {
                test: /\.(ttf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name]-[hash][ext]',
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.ejs',
            title: "The Cafe"
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
};