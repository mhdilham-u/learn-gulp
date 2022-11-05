const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildFiles() {
  return src("assets/sass/**/*.scss").pipe(sass()).pipe(dest("assets/css"));
}

function watchFiles() {
  watch(["assets/sass/**/*.scss"], buildFiles);
}

exports.default = series(buildFiles, watchFiles);
