var gulp = require('gulp'),
    http = require('http'),
    st = require('st');

gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname + '/src', index: 'index.html', cache: false })
  ).listen(8080, done);
});

gulp.task('watch', function() {
  gulp.watch('src/*.js');
});

gulp.task('default', ['server', 'watch']);