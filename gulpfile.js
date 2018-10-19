var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

var browserSync = require('browser-sync').create();

var scripts_folder = './public/scripts';
var styles_folder = './public/css';
var output_folder = './public/assets';

gulp.task('uglify-js', function () {
    // uglify js
    gulp.src([
        scripts_folder + '/main.js', scripts_folder + '/game.js', scripts_folder + '/motor_functions.js'
    ]).pipe(concat("/main.js"))
        .pipe(uglify())
        .pipe(gulp.dest(output_folder + "/js"));
});

gulp.task('uglify-css', function () {
    // uglify css
    gulp.src([
        styles_folder + '/style.css', styles_folder + '/game.css', styles_folder + '/motor_functions.css', styles_folder + '/animate.css'
    ]).pipe(concat("/css/app.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest(output_folder));
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });

    // rerun uglify-js
    gulp.watch(scripts_folder + "/*.js", ['uglify-js']).on('change', browserSync.reload);

    // rerun uglify-css
    gulp.watch(styles_folder + "/*.css", ['uglify-css']).on('change', browserSync.reload);
});

gulp.task('watch', ['uglify-js', 'uglify-css', 'browser-sync'], function () {
    // wanna print something?
});

gulp.task('default', ['uglify-js', 'uglify-css'], function () {
    // wanna print something?
});