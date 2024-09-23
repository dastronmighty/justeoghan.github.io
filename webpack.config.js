const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/ts/script.ts', // Entry point for TypeScript
  output: {
    filename: 'bundle.[contenthash].js', // Output JavaScript file
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Handle .ts and .tsx files with ts-loader
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i, // Handle .sass and .scss files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          'css-loader', // Translates CSS into CommonJS
          {
            loader: 'sass-loader', // Compiles Sass to CSS
            options: {
              implementation: require('sass'), // Use Dart Sass
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Handle image assets
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]', // Output images to assets folder
        },
      },
      {
        test: /\.html$/i, // Handle HTML files
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to the template HTML file
      inject: 'body', // Inject scripts into the body of the HTML
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css', // Output CSS file
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/icons', // Copy icons from public to dist
          to: 'icons', // Destination folder in dist
        },
        {
          from: 'public/cv',
          to: 'cv',
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolve these extensions
  },
  optimization: {
    minimize: true, // Minify the output files
    minimizer: [
      new TerserPlugin(), // Minify JavaScript
      new CssMinimizerPlugin({
        parallel: false, // Disable parallel processing
      }), // Minify CSS
    ],
    splitChunks: {
      chunks: 'all', // Split chunks for optimization
    },
  },
  devServer: {
    historyApiFallback: true, // Serve index.html for all 404 routes (SPA)
    static: {
      directory: path.join(__dirname, 'dist'), // Serve static files from dist
    },
    compress: true, // Enable gzip compression
    port: 9000, // Serve on port 9000
    open: true, // Automatically open the browser
  },
};
