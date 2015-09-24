
import { optimize } from 'webpack';

export default function optimizer() {
  return {
    plugins: process.env.NODE_ENV === 'production' ? [
      new optimize.DedupePlugin(),
      new optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ] : []
  };
}
