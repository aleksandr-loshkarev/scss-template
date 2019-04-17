module.exports = function () {
  $.gulp.task('scripts:lib', function() {
    return $.gulp.src($.path.jsLibraries)
        .pipe($.gp.concat('libs.min.js'))
        .pipe($.gulp.dest('build/js/'))
        .pipe($.bs.reload({
          stream: true
        }));
  });

  $.gulp.task('scripts:plugin', function() {
    return $.gulp.src('src/scripts/plugins/**/*.js')
        .pipe($.gp.concat('plugins.js'))
        .pipe($.gulp.dest('build/js/'))
        .pipe($.bs.reload({
          stream: true
        }));
  });

  $.gulp.task('scripts', function() {
    return $.gulp.src('src/modules/**/**/*.js')
        .pipe($.gp.concat('main.js'))
        .pipe($.gulp.dest('build/js/'))
        .pipe($.bs.reload({
          stream: true
        }));
  });
}