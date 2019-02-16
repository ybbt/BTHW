var gulp = require('gulp');


var less = require('gulp-less');
var path = require('path');
let cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var pug = require('gulp-pug');
var htmlbeautify = require('gulp-html-beautify');
var rename = require("gulp-rename");
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');
const webp = require('gulp-webp');


// gulp.task('less', function () {
// 	return gulp.src(['./dev/**/*.less', '!./dev/**/libs/**/*.less'])
// 		.pipe(less({}))
// 		.pipe(concatCss("css/index.css"))
// 		.pipe(gulp.dest('./build/'));
// });




gulp.task('pug', function build() {
	// var optionsB = {
	// 	indentSize: 2,
	// 	unformatted: [
	// 		// https://www.w3.org/TR/html5/dom.html#phrasing-content
	// 		 'abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite',
	// 		'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript',
	// 		'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small',
	// 		 'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text',
	// 		'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
	// 	]
	// };
	return gulp.src(['./dev/**/*.pug', '!./dev/**/__*.pug'])
		.pipe(plumber({
			errorHandler: notify.onError()
		}))
		.pipe(pug({pretty: true}))
		// .pipe(htmlbeautify(optionsB))
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('./test_build/'))

});



gulp.task('less', function () {
	return gulp.src(['./dev/general/**/*.less', './dev/pages/**/*.less', './dev/bem/**/*.less', '!./dev/**/libs/**/*.less'])
		.pipe(plumber({
			errorHandler: notify.onError()
		}))
		.pipe(concat('index.less'))
		.pipe(less({}))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('./test_build/css/'))

});

gulp.task('js', function () {
	return gulp.src(['./dev/pages/**/*.js', './dev/bem/**/*.js', '!./dev/**/libs/**/*.js'])
		.pipe(plumber({
			errorHandler: notify.onError()
		}))
		.pipe(concat('index.js'))		
		.pipe(gulp.dest('./test_build/js/'))

});

gulp.task('dirClean', function () {
	return gulp.src(['./test_build/img/*.jpg', './test_build/img/*.png'], {read: false})
		.pipe(clean());
});

gulp.task('dirCleanServ', function () {
	return gulp.src(['./test_build/img_serv/*.*'], {read: false})
		.pipe(clean());
});

gulp.task('img', function () {
	return gulp.src(['./dev/img_serv/*.*'])
		.pipe(plumber({
			errorHandler: notify.onError()
		}))
		.pipe(gulp.dest('./test_build/img_serv/'))

});

gulp.task('webp', () =>
	gulp.src(['./dev/img/*.jpg', './dev/img/*.png'])
		.pipe(webp())
		.pipe(gulp.dest('./test_build/img/'))
);



gulp.task('watch', function () {
	gulp.watch('./dev/**/*.less', gulp.series(['less']));
	gulp.watch('./dev/**/*.pug', gulp.series(['pug']));
	gulp.watch('./dev/**/*.js', gulp.series(['js']));
	gulp.watch('./dev/img/', gulp.series(['dirClean', 'webp']));
	gulp.watch('./dev/img_serv/', gulp.series(['dirCleanServ', 'img']));
}); //остановить таск - ctrl+C


gulp.task('default', gulp.series(['watch']));


///////////////////////////

gulp.task('pugFin', function build() {
	return gulp.src(['./dev/**/*.pug', '!./dev/**/__*.pug'])
		.pipe(plumber({
			errorHandler: notify.onError()
		}))
		.pipe(pug({pretty: false}))
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('./build/'))

});

gulp.task('lessFin', function () {
	return gulp.src(['./dev/general/**/*.less', './dev/pages/**/*.less', './dev/bem/**/*.less', '!./dev/**/libs/**/*.less'])
		.pipe(plumber({
			errorHandler: notify.onError()
		}))
		.pipe(concat('index.less'))
		.pipe(less({}))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('./build/css/'))

});

gulp.task('jsFin', function () {
	return gulp.src(['./dev/pages/**/*.js', './dev/bem/**/*.js', '!./dev/**/libs/**/*.js'])
		.pipe(plumber({
			errorHandler: notify.onError()
		}))
		.pipe(concat('index.js'))		
		.pipe(gulp.dest('./build/js/'))

});



gulp.task('imgFin', function () {
	return gulp.src(['./dev/img_serv/*.*'])
		.pipe(plumber({
			errorHandler: notify.onError()
		}))
		.pipe(gulp.dest('./build/img_serv/'))

});

gulp.task('webpFin', () =>
	gulp.src(['./dev/img/*.jpg', './dev/img/*.png'])
		.pipe(webp())
		.pipe(gulp.dest('./build/img/'))
);

gulp.task('finBuild' , gulp.series(['pugFin', 'lessFin', 'jsFin', 'webpFin','imgFin']));

