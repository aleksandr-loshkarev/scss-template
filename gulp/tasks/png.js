module.exports = function () {
    $.gulp.task('png', () =>{
      return $.gulp.src('./src/sprites/png/*.png')
        .pipe($.gp.spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.scss'
        }))
        .pipe($.gulp.dest('./build/images/'));
    });
  }