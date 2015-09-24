
export default function babel() {
  return {
    module: {
      loaders: [{
        name: 'babel',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          stage: 0,
          optional: [
            'runtime'
          ],
          jsxPragma: 'createElement'
        }
      }]
    }
  };
}
