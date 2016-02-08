var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var setup       = require('../setup.js');
var handleError = require('../handleError.js');
var imagemin    = require('gulp-imagemin');
var pngquant    = require('imagemin-pngquant');

gulp.task('images', function () {
    return gulp.src(setup.paths.workingDirectory + '/dev/images/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(setup.paths.workingDirectory + '/dist/images'));
});