import path from 'path'

module.exports = {
  // Entry point for your application
  entry: './src/index.js',

  // Output configuration for the bundled file
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },

  // Module loaders to handle different file types
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Rule for JavaScript and JSX files
        exclude: /node_modules/,  // Exclude node_modules folder
        use: {
          loader: 'babel-loader',  // Use Babel loader
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // Babel presets
          },
        },
      },
      {
        test: /\.css$/,  // Rule for CSS files
        use: ['style-loader', 'css-loader'],  // Use style-loader and css-loader
      },
      {
        test: /\.(png|jpg|gif|svg)$/,  // Rule for image files
        use: [
          {
            loader: 'file-loader',  // Use file-loader
            options: {
              name: '[name].[ext]',  // Preserve original filename with extension
              outputPath: 'assets',  // Output directory for images within 'dist'
            },
          },
        ],
      },
    ],
  },
};
