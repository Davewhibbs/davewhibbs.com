const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');

gulp.task('styles', function() {
    return gulp
        .src('src/sass/styles.scss') // Path to your main SCSS file
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename('styles.min.css')) // Output filename
        .pipe(gulp.dest('src/css')); // Output directory
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', gulp.series('styles'));
});



gulp.task('default', gulp.series(['styles']));