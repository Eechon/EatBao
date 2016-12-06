//������

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

//����watch����ȥ���html�ļ�,�䶨���˵�html�Ķ�֮��ȥ����һ��Gulp��Task
gulp.task('watch', function () {
	gulp.watch(['./*.html'], ['html']);
    gulp.watch(['./*/*.html'], ['html']);
	gulp.watch(['./*/*.js'], ['scripts']);
	gulp.watch(['./admin/assets/js/*.js'], ['scripts']);
});

//ʹ��connect����һ��Web������
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

//����Gulpʱ��Ĭ�ϵ�Task
gulp.task('default', ['connect', 'watch']);