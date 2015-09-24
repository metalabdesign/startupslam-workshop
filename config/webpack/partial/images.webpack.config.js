export default function() {
  return {
    module: {
      loaders: [{
        test: /\.(gif|jpe?g|png|tiff|svg)(\?.*)?$/,
        loader: 'file-loader',
      }]
    }
  };
}
