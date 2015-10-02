import nearest from 'find-nearest-file';
import partial from 'webpack-partial';
import path from 'path';

// No matter where we are, locate the canonical root of the project.
const root = path.dirname(nearest('package.json'));

const config = {
  id: 'server',
  entry: {
    server: path.join(root, 'entry', 'server.entry.js')
  },
  target: 'node',
  context: root,
  // Output controls the settings for file generation.
  output: {
    libraryTarget: 'commonjs2',
    filename: '[name].js',
    path: path.join(root, 'build', 'server'),
    chunkFilename: '[id].js'
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
  'optimize'
);
