var gulp = require('gulp'); 

var livereload = require('gulp-livereload');

var requireDir = require('require-dir');
requireDir('./gulp-tasks');

//File paths
var LESS_PATH = './src/assets/less/styles.less';
var IMAGES_PATH = './src/assets/img/**/*.{png,jpg,jpeg,svg,gif}';
var SRC_PATH = './src/index.html';
var SCRIPTS_PATH = './src/assets/js/*.js';

//Watch
gulp.task('watch', ['default'], function() {
	console.log('starting watch task');
	require('./serverBuild.js');
	livereload.listen();
	gulp.watch(SCRIPTS_PATH, ['scripts']);
	gulp.watch(LESS_PATH, ['styles']);
	gulp.watch(IMAGES_PATH, ['images']);
	gulp.watch(SRC_PATH, ['html']);
});

gulp.task('default', ['styles', 'scripts', 'images', 'html'], function() {
	console.log('starting default task');
});