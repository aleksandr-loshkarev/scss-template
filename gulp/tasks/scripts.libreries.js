module.exports = function () {
  $.gulp.task('scripts:lib', function() {
    return $.gulp.src($.path.jsLibraries)
        .pipe($.gp.concat('libreries.js'))
        .pipe($.gulp.dest('build/js/'))
        .pipe($.bs.reload({
          stream: true
        }));
  });
}