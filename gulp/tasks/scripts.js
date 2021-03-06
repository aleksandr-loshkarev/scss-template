module.exports = function () {
  $.gulp.task('scripts', function() {
    return $.gulp.src('src/modules/**/**/*.js')
        .pipe($.gp.concat('main.js'))
        .pipe($.gulp.dest('build/js/'))
        .pipe($.bs.reload({
          stream: true
        }));
  });
}