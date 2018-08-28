let gulp = require("gulp-param")(require("gulp"), process.argv);
let service = require("./gulp/service");
var header = require('gulp-header');

gulp.task("service", service); // ex: gulp service --name invoice
