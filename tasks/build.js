var gulp        = require('gulp');
var runSequence = require('run-sequence');
var plumber     = require('gulp-plumber');
var setup       = require('../setup.js');
var handleError = require('../handleError.js');

gulp.task('build', function() {
  runSequence('clean',
              ['sass', 'images'],
              'uncss',
              'juice',
              'minifyHTML'
            );
});