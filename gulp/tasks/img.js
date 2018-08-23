module.exports = function () {
  $.gulp.task('img', function() {
    return $.gulp.src('src/img/**/*.{png,jpg,gif}')
        // .pipe($.gp.imagemin())
        .pipe($.gulp.dest('build/images/'))
  });
}