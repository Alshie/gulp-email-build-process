var gulp          = require('gulp');
var browserSync   = require('browser-sync');
var setup         = require('../setup.js');

gulp.task('serve', ['sass'], function() {
    browserSync.init({
      startPath: setup.paths.workingDirectory + "/dev/index.html",
      server: {
          baseDir: './'
      }
    });
    gulp.watch(setup.paths.scss_src, ['sass']);
    gulp.watch(setup.paths.workingDirectory + "/dev/*.html").on('change', browserSync.reload);
});