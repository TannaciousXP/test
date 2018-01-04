import path from 'path';

const SRC_DIR = path.join(__dirname, '/src/app');
const DIST_DIR = path.join(__dirname, '/public/dist');

const config = {
  entry: SRC_DIR,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, '/src'),
        exclude: ['node_modules'],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env'],
            },
          },
        ],
      },
    ],
  },
};

export default config;
