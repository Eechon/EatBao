//������
var gulp = require('gulp');
var connect = require('gulp-connect');

//����watch����ȥ���html�ļ�,�䶨���˵�html�Ķ�֮��ȥ����һ��Gulp��Task
gulp.task('watch', function () {
    gulp.watch(['./*/*.html'], ['html']);
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