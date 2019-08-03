var gulp = require('gulp');
var sass = require('gulp-sass');  
var browserSync = require('browser-sync').create();

gulp.task('dev', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        },
        files: ['index.html', 'pages/*.html', 'Script/*.js']
    });
    gulp.watch("Style/scss/*.scss", gulp.series('sass'));
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src("Style/scss/app.scss")
        .pipe(sass())
        .pipe(gulp.dest("Style/dist"))
        .pipe(browserSync.stream());
});

gulp.task('distribute', function(){
    
});