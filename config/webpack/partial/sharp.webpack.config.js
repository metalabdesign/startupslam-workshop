
export default function() {
  return {
    module: {
      loaders: [{
        test: /\.(gif|jpe?g|png|tiff|svg)(\?.*)?$/,
        loader: 'sharp-loader',
        query: {
          name: '[name].[hash:8].[ext]',
          presets: {
            favicon: {
              size: 32,
              format: 'png'
            },
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
