const fs = require('fs');
const path = require('path');
const glob = require('glob');

module.exports = function (webpackConfig, env) {
  const root=__dirname+'/demo';
  webpackConfig.context=root;
  webpackConfig.entry={
    index:'./index.js'
  };
  webpackConfig.resolve.root=root;

  webpackConfig.babel.babelrc = false;
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css'  // if true, use less
  }]);

  // Enable hmr for development.
  if (env === 'development') {
    //webpackConfig.babel.plugins.push('dva-hmr');
  }

  // Parse all less files as css module.
  webpackConfig.module.loaders.push(
    {
      test: /\.scss$/,
      loaders: [
        'style?sourceMap',
        'css?sourceMap&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
        'resolve-url',
        'sass?sourceMap'
      ]
    }
  );
  webpackConfig['sassLoader']={
    includePaths:[path.resolve(__dirname,'./src')]
  };

  return webpackConfig;
};
