const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const autoprefixer = require("gulp-autoprefixer");

exports.default = () => (
  gulp.src("images/*").pipe(imagemin()).pipe(gulp.dest("dist/images")),
  gulp
    .src("styles.css")
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("dist"))
);
