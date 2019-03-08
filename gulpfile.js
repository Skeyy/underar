//导入模块
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const img = require('gulp-imagemin')
//
gulp.task('sass',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	//.pipe(cssnano())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'))
})
gulp.task('img',function(){
	gulp.src('./src/img/*.jpg')
	.pipe(img())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist/img'))
})
gulp.task('default',()=>{
	gulp.watch(['./src/sass/*.scss','./src/img/*.jpg'],['sass','img'])
	
})
