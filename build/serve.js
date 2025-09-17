const gulp = require("gulp");
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./../webpack.config.js');
const port = 9000;

gulp.task('serve-run', function (done) {
  const serverOptions = {
    port: port,
    static: {
      directory: './',
    },
    hot: true,
    open: true,
    historyApiFallback: true
  };

  const compiler = webpack(config);
  const server = new WebpackDevServer(serverOptions, compiler);
  server.startCallback(() => {
    console.log('Reports javascript docs sample is listening on localhost:', port);
    done();
  });
});

gulp.task('serve', gulp.series('clean', 'serve-run'));