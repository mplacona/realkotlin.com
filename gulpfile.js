var gulp = require('gulp');
var postcss = require('gulp-postcss');
var uncss = require('postcss-uncss');
var cleanCSS = require('gulp-clean-css');

gulp.task('uncss', function () {
    var plugins = [
        uncss({
            html: [
                'http://localhost:4003/',
                'http://localhost:4003/tutorials/',
                'http://localhost:4003/tutorials/extension-functions-in-kotlin/',
            ]
        }),
    ];
    return gulp.src('./_site/assets/css/main.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./assets/css/min'));
});

// Removing tabs and spaces in CSS
gulp.task('minify-css', ['uncss'], function() {
    return gulp.src('./assets/css/min/main.css')
    .pipe(cleanCSS({compatibility: 'ie8', level: {1: {specialComments: 0}} }))
    .pipe(gulp.dest('./assets/css/min/'));
});