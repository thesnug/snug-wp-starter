/* eslint-disable */

/**
 * Loading config
 */
const config = require('./gulp-config.json');

/**
 * Setting default domain
 */
var domain = 'snug-starter-wp.dev';

/**
 * Checking for a local.env.js file
 * this allows the overwriting of the default domain
 */
try {
  var env = require('./local.env');
} catch(ex) {
  var env = false;
}

if(env) {
  domain = env.url;
}

/**
 * Setting up plugins
 */
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');
var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var cache = require('gulp-cache');
var connect = require('gulp-connect');
var svgmin = require('gulp-svgmin');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var gulpSrc = gulp.src;

/**
 * Gulp Tasks
 */
gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: domain
  });
});

/**
 * Error Reporting
 */
gulp.src = function() {
  return gulpSrc.apply(gulp, arguments)
    .pipe(plumber(function(error) {
      notify.onError({
        title: 'Plugin Error',
        message: 'Error with ' + error.plugin
      })(error);
      // Output an error message
      gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
      // emit the end event, to properly end the task
      this.emit('end');
    })
  );
};

/**
 * Lint Sass partials
 */
gulp.task('styles-lint', function () {
  return gulp.src(config.styles.watch)
  .pipe(sassLint({ options: { configFile: '.sass-lint.yaml' } }))
  .pipe(sassLint.format())
});

/**
 * Concatenate Sass partials and minify to single CSS file
 */
gulp.task('styles', function() {
  return gulp.src(config.styles.src)
  .pipe(sourcemaps.init())
	.pipe(sass({ outputStyle: 'compressed' }))
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(sourcemaps.write())
	.pipe(gulp.dest(config.styles.dest))
  .pipe(browserSync.stream())
  .pipe(sourcemaps.write())
	.pipe(notify({ message: 'Styles task complete' }));
});

/**
 * Concatenate and minify Bower Components
 */
gulp.task('components', function() {
	return gulp.src(config.components.src)
  .pipe(sourcemaps.init())
	.pipe(concat(config.components.file))
	.pipe(gulp.dest(config.components.dest))
	.pipe(rename(config.components.min))
	.pipe(uglify())
  .pipe(browserSync.stream())
  .pipe(sourcemaps.write())
	.pipe(gulp.dest(config.components.dest));
});

/**
 * Concatenate and minify custom JavaScript
 */
gulp.task('scripts', function() {
	return gulp.src(config.scripts.src)
  .pipe(sourcemaps.init())
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(babel())
	.pipe(concat(config.scripts.file))
	.pipe(gulp.dest(config.scripts.dest))
	.pipe(rename(config.scripts.min))
	.pipe(uglify({mangle: false}))
  .pipe(browserSync.stream())
  .pipe(sourcemaps.write())
	.pipe(gulp.dest(config.scripts.dest));
});

/**
 * Compressing images
 */
gulp.task('images', function() {
  return gulp.src(config.images.src)
  .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
  .pipe(gulp.dest(config.images.dest))
  .pipe(browserSync.stream())
  .pipe(notify({ message: 'Images task complete' }));
});

/**
 * Cleaning SVGs
 */
gulp.task('svg-clean', function() {
  return gulp.src(config.svgs.src)
  .pipe(svgmin())
  .pipe(gulp.dest(config.svgs.dest))
  .pipe(browserSync.stream())
  .pipe(notify({ message: 'SVG task complete' }));
});

/**
 * Creating SVG partials for PHP includes
 */
gulp.task('svg-partial', function() {
  return gulp.src(config.svgs.src)
  .pipe(svgmin())
  .pipe(rename(function(path) {
    path.basename += '.svg';
    path.extname = '.php';
    return path;
  }))
  .pipe(gulp.dest(config.svgs.partials))
  .pipe(browserSync.stream())
  .pipe(notify({ message: 'SVG task complete' }));
});

/**
 * Serve task
 */
gulp.task('serve', ['styles'], function() {

  // Watch .scss files
  gulp.watch(config.styles.watch, ['styles-lint', 'styles']);

  // Watch .js files
  gulp.watch(config.scripts.watch, ['components', 'scripts']);

  // Watch image files
  gulp.watch(config.images.watch, ['images']);

  // Watch svg files
  gulp.watch(config.svgs.watch, ['svg-clean', 'svg-partial']);

  // Watch PHP files
  gulp.watch(config.php.watch).on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'styles-lint', 'styles', 'components', 'scripts', 'images', 'svg-clean', 'svg-partial', 'serve']);
