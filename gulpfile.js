const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('css',function () {
    return gulp.src('./src/css/**/*.css')
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('default', ['css'], function () {
    gulp.watch('./src/css/**/*.css', ['css']);
   
});