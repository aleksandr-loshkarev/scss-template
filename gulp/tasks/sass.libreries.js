module.exports = function () {
  $.gulp.task('sass:lib', function() {
    return $.gulp.src($.path.stylesLibraries)
        .pipe($.gp.concat('libreries.js'))
        .pipe($.gp.sourcemaps.init())
        .pipe($.bulkSass())
        .pipe($.gp.sass())
        .on("error", $.gp.notify.onError({
          message: "Error: <%= error.message %>",
          title: "sass"
        }))
        .pipe($.gp.sourcemaps.write('/map'))
        .pipe($.gulp.dest('build/css/'))
        .pipe($.bs.reload({
          stream: true
        }));
  });
}