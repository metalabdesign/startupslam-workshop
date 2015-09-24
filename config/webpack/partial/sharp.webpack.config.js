
export default function() {
  return {
    module: {
      loaders: [{
        test: /\.(gif|jpe?g|png|tiff)(\?.*)?$/,
        loader: 'sharp-loader',
        query: {
          name: '[name].[hash:8].[ext]',
          presets: {
            default: {
              format: [ 'webp', 'png', 'jpeg' ],
              density: [ 1, 2, 3 ]
            },
            prefetch: {
              format: 'jpeg',
              mode: 'cover',
              blur: 100,
              quality: 30,
              inline: true,
              size: 50
            }
          }
        }
      }]
    }
  };
}
