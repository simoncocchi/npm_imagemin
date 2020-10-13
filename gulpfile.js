const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const autoprefixer = require("gulp-autoprefixer");
const { parallel } = require("gulp");

function reduceImage(cb) {
  gulp.src("images/*").pipe(imagemin()).pipe(gulp.dest("dist/images")), cb();
}

function cssModify(cb) {
  gulp
    .src("styles.css")
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("dist"));
  cb();
}

exports.cssModify = cssModify;
exports.reduceImage = reduceImage;
exports.default = parallel(reduceImage, cssModify);
