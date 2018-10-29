let gulp = new require('gulp');
let browserSync = new require('browser-sync');
let reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync.init({
    server: {
      port: 5000,
      baseDir: './'
    }
  })
})