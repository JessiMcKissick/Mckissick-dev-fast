var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('dev', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        },
        files: ['index.html', 'Script/main.js']
    });
});


gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        files: ['index.html']
    });
});
