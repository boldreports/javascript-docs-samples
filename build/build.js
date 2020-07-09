const gulp = require("gulp");
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const shelljs = require('shelljs');
const runSequence = require('run-sequence');

gulp.task('build', function (callback) {
    runSequence('clean', 'production', 'copy-files', callback);
});

gulp.task('clean', function () {
    shelljs.rm('-rf', 'dist');
    shelljs.rm('-rf', 'demos');
});

gulp.task('copy-files', function () {
    shelljs.mkdir('-p', 'dist');
    shelljs.cp('-r', ['index.html', 'favicon.ico', 'assets', 'src', 'scripts'], 'dist');
})

gulp.task('production', function () {
    return gulp.src('.')
        .pipe(webpackStream(require('./../webpack.config.js'), webpack))
        .pipe(gulp.dest('dist'));
});