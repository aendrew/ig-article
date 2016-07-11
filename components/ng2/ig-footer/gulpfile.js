var gulp = require('gulp');
var obt = require('origami-build-tools');

gulp.task('sass', () => {
  obt.build.sass(gulp, {
    sass: 'ig-footer.scss',
    buildCss: 'ig-footer.css',
    buildFolder: './'
  });
});
