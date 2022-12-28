const gulp = require("gulp");
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const shelljs = require('shelljs');
const runSequence = require('gulp4-run-sequence');

gulp.task('build', function (done) {
    runSequence('clean', 'production', 'copy-files', done);
});

gulp.task('clean', function (done) {
    shelljs.rm('-rf', 'dist');
    shelljs.rm('-rf', 'demos');
    done();
});

gulp.task('copy-files', function (done) {
    shelljs.mkdir('-p', 'dist');
    shelljs.cp('-r', ['index.html', 'favicon.ico', 'assets', 'src', 'scripts'], 'dist');
    done();
})

gulp.task('production', function () {
    return gulp.src('.')
        .pipe(webpackStream(require('./../webpack.config.js'), webpack))
        .pipe(gulp.dest('dist'));
});