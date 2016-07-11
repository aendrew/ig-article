var gulp = require('gulp');
var obt = require('origami-build-tools');

gulp.task('sass', () => {
  obt.build.sass(gulp, {
    sass: 'ig-header.scss',
    buildCss: 'ig-header.css',
    buildFolder: './'
  });
});
