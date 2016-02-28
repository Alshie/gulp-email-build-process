# Gulp Email build Process

A set of [gulp](http://gulpjs.com/) tasks to simplify building HTML emails.

## Install

1. Install node.js - the easiest way is probably from the [node.js website](https://nodejs.org/en/) however I prefer using [Homebrew](http://brew.sh/)
2. Install gulp globally `npm install --global gulp-cli` in your terminal.
3. Download this project and run `npm install` from project folder
4. You may need to have xcode command line tools installed for image minification to install correctly on OSX.

These can be installed without the need for installing the full xcode by running the following command in your terminal.

`xcode-select --install`

## Usage

Use from the terminal by running gulp tasks with your project folder passed as the --email argument

`gulp serve —email my-project-folder`

Opens a [browserSync](https://www.browsersync.io/) instance in your default web browser.
If your html file is index.html it will be loaded - otherwise just change the filename as appropriate.
This task also runs an initial sass compile and then watches your sass files and html files for changes and updates the preview in your browser.

`gulp build —email my-project-folder`

Prepares your email for sending by running `clean`, `sass`, `images`, `uncss`, `juice`, `minifyHTML` in order.

`gulp litmus —email my-project-folder`

Passes your final output html from `dist` folder to [Litmus](https://litmus.com/) via the Litmus API. You will need to setup your account details in secrets.json.

```
  "litmus": {
    "username": "YOUR_USERNAME",
    "password": "YOUR_PASSWORD",
    "url": "https://YOUR_ACCOUNT.litmus.com"
  }
```

`gulp uncss —email my-project-folder`

This task looks through your css file and checks against your html file removing any css that is not used by the email - _super handy_ for utilising with a style guide type approach where you have a large number of styles for various templates in your scss files but don’t want to bulk up your end file.

`gulp sass —email my-project-folder`

This task is primarily intended to be run by other tasks.
Takes all your scss files and compiles them into css.
Expects your scss files to be in a folder named `sass` in the `dev` folder.
Outputs to the `dev/css` folder.

`gulp minifyHTML —email my-project-folder`

Minifies your HTML to reduce file size - can be important to reduce chance of gmail cropping your email.

`gulp juice —email my-project-folder`

This takes your css and inlines it into the html.

`gulp images —email my-project-folder`

Runs any images in the `dev/images` folder through image minification to reduce file size. Outputs minified images to `dist/images`

`gulp clean —email my-project-folder`

Removes the `dist` folder to start a fresh build.

## Caveats
You will probably want to use images in your html that are hosted online with a full url - the original version of this process from which this is derived moved all images from the images folder to a CDN but it seemed weirdly specific to include here.

I've only tested this on OSX I'm afraid, no idea if it will work on Windows.

## Todo
Write better, more thorough documentation.
Add ability to send the email to any address.
Add some generic ftp capability?
