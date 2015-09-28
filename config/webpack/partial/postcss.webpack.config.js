
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// `postcss` modules.
import autoprefixer from 'autoprefixer-core';
import precss from 'precss';
import lost from 'lost';
import cssimport from 'postcss-import';
import fonts from 'postcss-font-magician';

const IS_STYLE = /\.(scss|sass|css)$/;

function q(loader, query) {
  return `${loader}?${JSON.stringify(query)}`;
}

export default function postcss({ target }) {
  const env = process.env.NODE_ENV || 'development';
  const external = env !== 'development' && target === 'web';
  const config = {
    modules: true,
    importLoaders: 1,
    localIdentName: '[name]_[local]_[hash:base64:5]',
    minimize: env === 'production'
  };
  return {
    // Module settings.
    module: {
      loaders: [{
        test: IS_STYLE,
        loaders: [
          ...(external ? [ExtractTextPlugin.loader({
            extract: true,
            omit: 1
          })] : []),
          ...(target === 'web' ?
            ['style-loader', q('css-loader', config)] :
            [q('css-loader/locals', config)]
          ),
          'postcss-loader'
        ]
      }]
    },

    postcss() {
      return [
        cssimport({
          onImport: files => files.forEach(this.addDependency)
        }),
        lost,
        precss,
        fonts,
        autoprefixer({
          browsers: [ 'last 2 versions' ]
        })
      ];
    },

    plugins: [
      ...(target !== 'web' ? [
        // Ignore CSS far as server-side goes

      ] : [ ]),
      ...(external ? [
        // Some crawlers or things with Javascript disabled prefer normal CSS
        // instead of Javascript injected CSS, so this plugin allows for the
        // collection of the generated CSS into its own file.
        new ExtractTextPlugin('[name].[contenthash].css')
      ] : [ ])
    ]
  };
}
