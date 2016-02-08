var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var setup       = require('../setup.js');
var handleError = require('../handleError.js');
var litmus      = require('gulp-litmus');

gulp.task('litmus', function () {
    return gulp.src(setup.paths.workingDirectory + '/dist/*.html')
        .pipe(litmus(setup.litmusConfig));
});
