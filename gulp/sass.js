var gulp                       = require('gulp');
var config                     = require('../package.json').config;
var plumber 				   = require('gulp-plumber');
var sourcemaps                 = require('gulp-sourcemaps');
var autoprefixer               = require('gulp-autoprefixer');
// var cssnano                    = require('gulp-cssnano');
var rename                     = require('gulp-rename');
var cleancss = require('gulp-clean-css');

gulp.task("reload-css", function () {
	gulp.src(config.src.css)
	// .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(sourcemaps.init())
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest(config.dist.css))
	.pipe(cleancss({compatibility: 'ie8'}))
	.pipe(rename({suffix: '.min'}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(config.dist.css))
});



gulp.task('reload-css:watch', function () {
	gulp.watch(config.src.css, ['reload-css']);
});