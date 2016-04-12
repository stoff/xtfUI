'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var Eyeglass = require('eyeglass');

var eyeglass = new Eyeglass();

gulp.task('sass', function() {
	return gulp.src('src/core/*.scss')
		.pipe(sass(eyeglass.options).on('error', sass.logError))
		.pipe(gulp.dest('dist/css'));
});
