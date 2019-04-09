'use strict';

global.$ = {
    package: require('./package.json'),
    config: require('./gulp/config'),
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    csso: require('gulp-csso'),
    del: require('del'),
    purge: require('gulp-css-purge'),
    concatCss: require('gulp-concat-css'),
    cssunit : require('gulp-css-unit'),
    gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('build', $.gulp.series(

    $.gulp.parallel(
        'css'
    )
));