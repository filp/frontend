const HtmlWebpackPlugin = require('html-webpack-plugin');

const sharedConfig = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Application',
      template: 'src/assets/index.html',
    }),
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
    ],
  },
};

const buildForDevelopment = (base) => {
  return {
    ...base,
    mode: 'development',
    devServer: {
      static: './dist',
      hot: true,
    },
    mode: 'development',
    devtool: 'inline-source-map',
  };
};

const buildForProduction = (base) => {
  return {
    ...base,
    mode: 'production',
  };
};

module.exports =
  process.env.NODE_ENV === 'production'
    ? buildForProduction(sharedConfig)
    : buildForDevelopment(sharedConfig);
