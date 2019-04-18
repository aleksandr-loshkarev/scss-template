module.exports = function () {
  $.gulp.task('sass', function() {
    return $.gulp.src('src/scss/main.scss')
        .pipe($.gp.sourcemaps.init())
        .pipe($.bulkSass())
        .pipe($.gp.sass())
        .pipe($.gp.autoprefixer({
          browsers: ['last 2 versions']
        }))
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