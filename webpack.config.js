const config = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
    // contacts: './src/js/contacts.js',
    // about: './src/js/about.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 8080, // Указываем порт 8080
    // Другие настройки сервера, если необходимо
  },
};

module.exports = config;
