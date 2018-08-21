// var gulp                       = require('gulp');
// var config                     = require('../package.json').config;
// var plumber 				   = require('gulp-plumber');
// var notify					   = require("gulp-notify");
// var cssnano                    = require('gulp-cssnano');
// var rename                     = require('gulp-rename');

// gulp.task('libs', function () {

// 	return gulp.src(config.src.libs.css)
// 		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
// 		.pipe(importCss())
// 		.pipe(cssnano())
// 		.pipe(rename({
// 			dirname: "",
// 			basename: "libs",
// 			prefix: "",
// 			suffix: ".min",
// 			extname: ".css"
// 		  }))
// 		.pipe(gulp.dest(config.dist.css));
// });

// gulp.task('libs:watch', function () {
// 	gulp.watch('./src/sass/**/*.*', ['libs']);
// });