
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

function loaders({ target, external, minimize }) {
  const config = {
    modules: true,
    importLoaders: 1,
    localIdentName: '[name]-[local]-[hash:base64:5]',
    minimize: minimize
  };
  if (target === 'web') {
    if (external) {
      return ExtractTextPlugin.extract(
        'style-loader',
        `${q('css-loader', config)}!postcss-loader`
      );
    }
    return `style-loader!${q('css-loader', config)}!postcss-loader`;
  }
  return `${q('css-loader/locals', config)}!postcss-loader`;
}

export default function postcss({ target }) {
  const env = process.env.NODE_ENV || 'development';
  const external = env !== 'development' && target === 'web';
  const minimize = env === 'production';

  return {
    // Module settings.
    module: {
      loaders: [{
        test: IS_STYLE,
        loader: loaders({ target, external, minimize })
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
