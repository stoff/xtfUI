'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var Eyeglass = require('eyeglass');

var eyeglass = new Eyeglass({
  // ... node-sass options
    // importer: function(uri, prev, done) {
    //     done(sass.compiler.types.NULL);
    // }
});

// Disable import once with gulp until we
// figure out how to make them work together.
// eyeglass.enableImportOnce = false

gulp.task('sass', function() {
	console.log(eyeglass.options);
	return gulp.src('src/core/*.scss')
		.pipe(sass(eyeglass.options).on('error', sass.logError))
		.pipe(gulp.dest('dist/css'));
});
