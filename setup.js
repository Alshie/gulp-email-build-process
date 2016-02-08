var minimist        = require('minimist');
var secrets         = require('./secrets.json');

var cli_options     = minimist(process.argv.slice(2));
if(!cli_options.email){
  console.error("Error: You need to specify the folder to perform tasks on.\n\n e.g. gulp build --email my-email-folder")
  process.exit(1);
}

var path            = cli_options.email;
var directory       = path.replace(/^.*[\\\/]/, '');
var wd              = 'emails/' + path.replace(/^.*[\\\/]/, '');

module.exports = {

  "sass_options": {
    "outputStyle": "nested" // Values: nested, expanded, compact, compressed
  },

  "juiceOptions": {
    "preserveMediaQueries": true,
    "preserveImportant": true,
    "applyAttributesTableElements": true,
    "applyWidthAttributes": true,
    "removeStyleTags": false,
    "webResources": {
      "images": false,
      "cssmin": true
    }
  },

   "minOptions": {
    "keepClosingSlash": true,
    "collapseWhitespace": true,
    "conservativeCollapse": true
  },

  "litmusConfig": {
      "username": secrets.litmus.username,
      "password": secrets.litmus.password,
      "url": secrets.litmus.url,
      "applications": [
        'aolonline',
        'androidgmailapp',
        'aolonline',
        'ffaolonline',
        'chromeaolonline',
        'appmail7',
        'appmail8',
        'iphone6',
        'iphone5s',
        'iphone5sios8',
        'ipadmini',
        'ipad',
        'chromegmailnew',
        'gmailnew',
        'ffgmailnew',
        'googleapps',
        'chromegoogleapps',
        'iphone6plus',
        'notes85',
        'ol2000',
        'ol2002',
        'ol2003',
        'ol2007',
        'ol2010',
        'ol2011',
        'ol2013',
        'ol2013dpi120',
        'ol2015',
        'ol2015',
        'office365',
        'chromeoutlookcom',
        'chromeyahoo'
      ]
  },

  "paths":{
    "scss_src" : wd + '/dev/sass/**/*.scss',
    "scss_dest": wd + '/dev/css',
    "css_src"  : wd + '/dev/css/**/*.css',
    "css_dest" : wd + '/dev/css',
    "workingDirectory" : wd
  }
}