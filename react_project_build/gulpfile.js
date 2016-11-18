var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
// var babel = require('gulp-babel'); 
var notify = require('gulp-notify');
var glob = require('glob');

gulp.task('build', ()=>{
   var files = glob.sync('./components/*.js');
   var bundler = browserify({
		entries: files,
		transform: [['babelify',{'presets': ['es2015', 'react'], 'plugins':['transform-class-properties']}]], 
		cache: {},
		packageCache: {},
		plugin:[watchify], 
	}); 
	bundler.on('update', rebundle);
	function rebundle(){
		console.log("updated at "+ new Date().toString());
		bundler
		.bundle()
		.on('error', (err) => {
			return notify().write(err);
		})
		.pipe(source('main.js'))
		.pipe(gulp.dest('./build'));
	}
	return rebundle();
});

gulp.task('build_no_watch', ()=> {
	browserify('./main.js')
	.transform(babelify, {presets: ['es2015', 'react']})
	.bundle()
	.pipe(source('main.js'))
	.pipe(gulp.dest('./build'));
}); 

gulp.task('default', ['build']);