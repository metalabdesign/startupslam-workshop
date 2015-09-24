
import { optimize } from 'webpack';

export default function({ target }) {
  return {
    externals: target === 'node' ? [(context, request, cb) => {
			// TODO: Make this work properly.
      if (/^[a-z\-0-9]+$/.test(request)) {
        return cb(null, `commonjs ${request}`);
      }
      cb();
    }] : [ ],
    plugins: target !== 'node' ? [
      // This performs the actual bundling of all the vendor files into their
      // own package. See the vendor entry above for more info.
      new optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: '[name].[hash].js',
        minChunks: (module) => {
          return module.resource &&
            module.resource.indexOf('node_modules') !== -1;
        }
      })
    ] : [ ]
  };
}
