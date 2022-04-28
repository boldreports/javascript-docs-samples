const gulp = require("gulp");
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const shelljs = require('shelljs');
const runSequence = require('gulp4-run-sequence');

gulp.task('build', (done) =>{
    runSequence('clean', 'production', 'copy-files', done);
});

gulp.task('clean', (done) => {
    shelljs.rm('-rf', 'dist');
    shelljs.rm('-rf', 'demos');
    done();
});

gulp.task('copy-files', (done) => {
    shelljs.mkdir('-p', 'dist');
    shelljs.cp('-r', ['index.html', 'favicon.ico', 'assets', 'src', 'scripts'], 'dist');
    done();
})

gulp.task('production',() =>{
    return gulp.src('.')
        .pipe(webpackStream(require('./../webpack.config.js'), webpack))
        .pipe(gulp.dest('dist'));
});