"use strict";
import browserify from 'browserify';
import gulp from 'gulp';
import source from 'vinyl-source-stream';
 
gulp.task('default', ()=> {
    return browserify("src/app.js")
        .transform("babelify")
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("public"));
});