var gulp = require('gulp')
var runSequence = require('run-sequence')
var mjml = require('gulp-mjml')

gulp.task('compile_mjml', function() {
	return gulp.src('./email.mjml')
		.pipe(mjml())
		.pipe(gulp.dest('./html'))
})

gulp.task('mjml:watch', function() {
	gulp.watch([`./email.mjml`], ['compile_mjml'])
})

gulp.task('default', function () {
	return runSequence('compile_mjml');
})