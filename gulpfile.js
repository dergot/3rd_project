const { src, dest, watch, series } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const prettier = require('gulp-prettier');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

function minify() {
  return src('app/scss/*/*-style.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(autoprefixer())
    .pipe(dest('app/css/'))
};

exports.pretty = function() {
  return src('app/scss/*/*.scss')
    .pipe(prettier({
      useTabs: true,
      singleQuote: true
    }))
    .pipe(dest('app/scss/'))
}

exports.default = function() {
  watch('app/scss/**', minify)
}