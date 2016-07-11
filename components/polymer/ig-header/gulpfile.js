var gulp = require('gulp');
var inject = require('gulp-inject');
var obt = require('origami-build-tools');

gulp.task('sass', () => {
  obt.build.sass(gulp, {
    sass: 'ig-header.scss',
    buildCss: 'o-header.css',
    buildFolder: './dist'
  });
});

gulp.task('build:styles', ['sass'], () => {
  gulp.src('./o-header-styles.html')
  .pipe(inject(gulp.src(['./dist/o-header.css']), {
    starttag: '<!-- inject:compiledSass -->',
    transform: function (filePath, file) {
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest('./dist'));
});
