
var browserify =require('browserify');
var gulp =require( 'gulp');
var source =require( 'vinyl-source-stream');
var watchify =require( 'watchify');

gulp.task('default', ()=> {
    
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
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("public"));
    };
    
    bundler = watchify(bundler);
    bundler.on('update', bundle);
    
    return bundle();
});