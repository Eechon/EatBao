//引入插件

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var cache = require('gulp-cache');
var del = require('del');
var connect = require('gulp-connect');

// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

//创建watch任务去检测html文件,其定义了当html改动之后，去调用一个Gulp的Task
gulp.task('watch', function () {
	gulp.watch(['./*.html'], ['html']);
    gulp.watch(['./*/*.html'], ['html']);
	gulp.watch(['./*/*.js'], ['scripts']);
	gulp.watch(['./admin/assets/js/*.js'], ['scripts']);
});

//使用connect启动一个Web服务器
gulp.task('connect', function () {
    connect.server({
        root: '.',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./*/*.html')
        .pipe(connect.reload());
});

//运行Gulp时，默认的Task
gulp.task('default', ['connect', 'watch']);