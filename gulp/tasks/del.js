module.exports = function () {
  $.gulp.task('clean', function() {
    return $.gulp.src('./build/*')
        .pipe($.gp.clean());
  });
}