var gulp        = require('gulp');
var sass        = require('gulp-sass');
var plumber     = require('gulp-plumber');
var uncss       = require('gulp-uncss');
var setup       = require('../setup.js');
var handleError = require('../handleError.js');


gulp.task('uncss', function() {
  return gulp.src(setup.paths.css_src)
    .pipe(plumber(handleError('Error running uncss'))) // checks for errors in plugins
    .pipe(uncss({
        html: [setup.paths.workingDirectory + '/dev/*.html']
    }))
    .pipe(gulp.dest(setup.paths.css_dest));
});
