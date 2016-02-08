var gulp        = require('gulp');
var del         = require('del');
var plumber     = require('gulp-plumber');
var setup       = require('../setup.js');
var handleError = require('../handleError.js');

gulp.task('clean', function() {
  return del([
    setup.paths.workingDirectory + '/dist/**/*',
  ]);
});