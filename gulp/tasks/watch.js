module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('src/pages/**/*.pug',$.gulp.series('pug'));
    $.gulp.watch('src/modules/**/**/**/*.pug',$.gulp.series('pug'));
    $.gulp.watch('src/scss/**/*.scss',$.gulp.series('sass'));
    $.gulp.watch('src/modules/**/**/*.scss',$.gulp.series('sass'));
    $.gulp.watch('src/modules/**/**/*.js',$.gulp.series('scripts'));
    $.gulp.watch('src/img/**/*.{png,jpg,gif}',$.gulp.series('img'));
    $.gulp.watch('src/sprites/svg/*.svg',$.gulp.series('svg'));
    $.gulp.watch('src/fonts/**/*',$.gulp.series('fonts'));
    $.gulp.watch('src/scripts/plugins/*',$.gulp.series('scripts:plugin'));
  });
}