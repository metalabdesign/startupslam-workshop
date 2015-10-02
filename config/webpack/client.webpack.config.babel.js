import nearest from 'find-nearest-file';
import partial from 'webpack-partial';
import path from 'path';

// No matter where we are, locate the canonical root of the project.
const root = path.dirname(nearest('package.json'));

const config = {
  id: 'client',
  entry: {
    client: path.join(root, 'entry', 'client.entry.js')
  },
  target: 'web',
  context: root,
  // Output controls the settings for file generation.
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: '/assets',
    path: path.join(root, 'build', 'client'),
    chunkFilename: '[id].[chunkhash].js'
  }
};

// Extend the default webpack configuration with any partials you want.
// e.g. partial(config, 'babel', 'compatibility');
export default partial(
  config,
  'root',
  'env',
  'build-info',
  'hot',
  'babel',
  'images',
  'postcss',
  'json',
  'vendor',
  'source-maps',
  'optimize',
  'compatibility',
  'stats'
);
