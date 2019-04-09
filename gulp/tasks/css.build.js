'use strict';

module.exports = function() {
    $.gulp.task('css', function() {
        return $.gulp.src('./styles/main.css')
            .pipe($.concatCss('style/main.css'))
            .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
            .pipe($.cssunit({type: 'px-to-rem', rootSize: 16 }))
            // .pipe($.gp.csso())
            .pipe($.gulp.dest($.config.root + '/'))
    })
};