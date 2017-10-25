var gulp = require('gulp'),
    rename = require('gulp-rename'),
    http = require('http'),
    st = require('st')
    babel = require("gulp-babel");

gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname + '/src', index: 'index.html', cache: false })
  ).listen(8080, done);
});

gulp.task('watch', function() {
  gulp.watch('src/*.js');
});

gulp.task('js', function() {
  return gulp.src("src/app.js")
    .pipe(babel({
      presets: ['env', 'es2017']
    }))
    .pipe(rename('navLoginStatus.js'))
    .pipe(gulp.dest("dist"));
});

gulp.task('css', function() {
  return gulp.src("src/styles.css")
    .pipe(rename('navLoginStatus.css'))
    .pipe(gulp.dest("dist"));
});

gulp.task('default', ['server', 'watch']);
gulp.task('build', ['js', 'css']);