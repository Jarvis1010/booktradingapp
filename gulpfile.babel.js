"use strict"
import browserify from 'browserify';
import gulp from 'gulp';
import source from 'vinyl-source-stream';
import watchify from 'watchify';

gulp.task('default', (callback)=> {
    
    var bundler = browserify({
      entries: ['src/app.js'],
      cache: {},
      packageCache: {},
      plugin: [watchify]
    });
    
    var bundle=function(){ 
        return bundler
        .transform("babelify")
        .bundle()
        .on('error', (err)=>{
          console.log(err.message);
          this.emit('end');
        })
        .on('end',()=>{
            console.log("finished");
        })
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("public"));
    };
    
    bundler = watchify(bundler);
    bundler.on('update', bundle);
    
    return bundle();
});