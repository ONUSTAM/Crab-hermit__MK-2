// @file build.js
var gulp = require('gulp');

gulp.task('build', ['webpack', 'copy', 'jade']);
// gulp.task('build', ['webpack', 'stylus', 'copy']);
