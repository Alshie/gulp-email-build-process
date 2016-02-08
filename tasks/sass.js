var gulp          = require('gulp');
var sass          = require('gulp-sass');
var plumber       = require('gulp-plumber');
var browserSync   = require('browser-sync');
var autoprefixer  = require('gulp-autoprefixer');
var sourcemaps    = require('gulp-sourcemaps');
var setup         = require('../setup.js');
var handleError = require('../handleError.js');


gulp.task('sass', function () {
  return gulp.src(setup.paths.scss_src)
        .pipe(plumber(handleError('Error running sass'))) // checks for errors in plugins
        .pipe(sourcemaps.init())
        .pipe(sass(setup.sass_options))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(setup.paths.scss_dest))
        .pipe(browserSync.stream());
});
