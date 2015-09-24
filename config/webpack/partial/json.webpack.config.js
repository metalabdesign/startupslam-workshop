
export default function json5() {
  return {
    module: {
      loaders: [{
        name: 'json5',
        test: /\.json5?$/,
        loader: 'json5-loader'
      }]
    }
  };
}
