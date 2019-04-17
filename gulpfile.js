'use strict';

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
  bulkSass: require('gulp-sass-glob-import'),

  path: {
    tasks: require('./gulp/config/tasks.js'),
    jsLibraries: require('./gulp/libraries.script.js'),
    stylesLibraries: require('./gulp/libraries.styles.css')
  }
};

$.path.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('dev',$.gulp.series(
    $.gulp.parallel('clean'),
    $.gulp.parallel('pug','sass','scripts:lib','scripts:plugin','scripts','img','svg','fonts'),
    $.gulp.parallel('watch','serve')
));

$.gulp.task('build',$.gulp.series(
    $.gulp.parallel('clean'),
    $.gulp.parallel('pug','sass','scripts:lib','scripts:plugin','scripts','img','svg','fonts')
));