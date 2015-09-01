var gulp = require('gulp');
var babel = require('gulp-babel');
var shell = require('gulp-shell');

gulp.task('default', [
  'js',
  'watch'
]);

gulp.task('js', function () {
  gulp.src(['src/**/*.js'])
    .pipe(babel())
    .on('error', function (err) {
      console.log(err);
    })
    .pipe(gulp.dest('dist/'))
    .pipe(shell('node dist/app.js'))
  ;
});

gulp.task('watch', function () {
  gulp.watch(['src/**/*.js'], ['js']);
});
