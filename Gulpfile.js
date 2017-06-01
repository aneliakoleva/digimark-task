var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


var input = './sass/**/*.scss';
var output = './dist/css';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(output));
});


gulp.task('parsley', function () {
    gulp.src('./bower_components/parsleyjs/dist/parsley.min.js')
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('hamburger', function() {
   gulp.src('./bower_components/css-hamburgers/dist/hamburgers.css')
   .pipe(gulp.dest('./dist/css'));
});

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('watch', function() {
  return gulp
    .watch(input, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('prod', [], function () {
  return gulp
    .src(input)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output));
});

gulp.task('default', ['hamburger', 'parsley', 'sass', 'watch']);
