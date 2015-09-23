gulp = require 'gulp'
babel = require 'gulp-babel'

gulp.task 'build', ->
  gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dest'))

gulp.task 'test', ->
  karma = require('gulp-karma');
  return gulp.src('./idontexist')
    .pipe(
      karma(
        configFile: 'karma.conf.js'
        action: 'run'
      )
    )
