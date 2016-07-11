var gulp = require('gulp');
var inject = require('gulp-inject');
var obt = require('origami-build-tools');

gulp.task('sass', () => {
  obt.build.sass(gulp, {
    sass: 'ig-footer.scss',
    buildCss: 'o-footer.css',
    buildFolder: './dist'
  });
});

gulp.task('build:styles', ['sass'], () => {
  gulp.src('./o-footer-styles.html')
  .pipe(inject(gulp.src(['./dist/o-footer.css']), {
    starttag: '<!-- inject:compiledSass -->',
    transform: function (filePath, file) {
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest('./dist'));
});
