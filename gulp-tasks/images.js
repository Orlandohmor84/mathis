var gulp = require('gulp');

var IMAGES_PATH = './src/assets/img/**/*.{png,jpg,jpeg,svg,gif}';

//Image Compression
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');

//Images
gulp.task('images', function() {
	console.log('starting images task');
	return gulp.src(IMAGES_PATH)
	.pipe(imagemin(
		[
			imagemin.gifsicle(),
			imagemin.jpegtran(),
			imagemin.optipng(),
			imagemin.svgo(),
			imageminPngquant(),
			imageminJpegRecompress()
		]
	))
	.pipe(gulp.dest('./public/assets/img'));
});