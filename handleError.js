var plumber          = require('gulp-plumber');
var notify           = require('gulp-notify');

var handleError = function(errTitle) {
  return plumber({
    errorHandler: notify.onError({
      title: errTitle || "Error running Gulp",
      message: "Error: <%= error.message %>",
    })
  });
}

module.exports = handleError;