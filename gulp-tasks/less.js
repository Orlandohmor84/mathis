var gulp = require('gulp');

//LESS Path
var LESS_PATH = './src/assets/less/styles.less';

//LESS Plugins
var plumber  = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-clean-css');
var livereload = require('gulp-livereload');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var lessAutoprefix = new LessAutoprefix({
	browsers: ['last 2 versions']
});

//Styles for LESS
gulp.task('styles', function() {
	console.log('starting styles task');
	return gulp.src(LESS_PATH)
	.pipe(plumber(function(err) {
		console.log('Styles Task Error');
		console.log(err);
		this.emit('end');
	}))
	.pipe(sourcemaps.init())
	.pipe(less({
		plugins: [lessAutoprefix]
	}))
	.pipe(minifyCss())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./public/assets/css'))
	.pipe(livereload());
});