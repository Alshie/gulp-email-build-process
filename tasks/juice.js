var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var setup       = require('../setup.js');
var handleError = require('../handleError.js');
var juice       = require('gulp-juice');
var replace     = require('gulp-replace');


gulp.task('juice', function () {

  return gulp.src(setup.paths.workingDirectory + '/dev/*.html')
      .pipe(replace('href="css/', 'href="' + setup.paths.workingDirectory + '/dev/css/')) // juice can't find the css file with relative path
      .pipe(juice(setup.juiceOptions))
      .pipe(gulp.dest(setup.paths.workingDirectory + '/dist/'));
});