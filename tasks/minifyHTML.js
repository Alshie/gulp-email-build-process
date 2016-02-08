var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var setup       = require('../setup.js');
var handleError = require('../handleError.js');
var htmlmin     = require('gulp-htmlmin');
 
gulp.task('minifyHTML', function() {
	return gulp.src(setup.paths.workingDirectory + '/dist/**/*.html')
    .pipe(htmlmin(setup.minOptions))
		.pipe(gulp.dest(setup.paths.workingDirectory + '/dist/'));
});