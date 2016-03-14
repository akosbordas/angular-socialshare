var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');

gulp.task('default', function(){
  gulp.src('./angular-socialshare.js')
  .pipe(rename('angular-socialshare.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./'));

  gulp.src('templates/**/*.html')
      .pipe(templateCache('angular-socialshare.tpl.js',{
        module:'djds4rce.angular-socialshare.templates',
        standalone: true,
        transformUrl:function(url){
          return "templates/"+url;
        }
      }))
      .pipe(gulp.dest('./'));
});
