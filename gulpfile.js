var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var htmlReplace = require('gulp-html-replace');



gulp.task('html',function(){
    gulp.src(['src/**/*.html','index.html'])
		.pipe(htmlReplace({
			head:gulp.src('./src/html/common/header.html'),
			aside:gulp.src('./src/html/common/aside.html'),
			style:gulp.src('./src/html/common/style.html')
		}))

        .pipe(htmlmin({
		collapseWhitespace:true,
	    minifyJS:true,
		minifyCSS:true,
		removeComments:true
	}))
	.pipe(gulp.dest('dist'))


})

gulp.task('less',function(){
	gulp.src('src/less/*.less')
		.pipe(less())
		.pipe(cleanCss())
		.pipe(rename({
			suffix:'.min'
		}))
		.pipe(gulp.dest('dist/css'))
})

var jsLibs=[
	'node_modules/art-template/lib/template-web.js',
	'node_modules/jquery/dist/jquery.js',
	'node_modules/bootstarp/dist/js/bootstrap.js',
	'node_modules/jquery.cookie/jquery.cookie.js'
]

gulp.task('jsLib',function(){
	gulp.src(jsLibs)
		.pipe(concat('lib.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
})

var jsModules = [
	// ��ҳ
	'src/js/index.js',
	// �û�
	'src/js/user/login.js',
	'src/js/user/repass.js',
	'src/js/user/profile.js',
	// ��ʦ
	'src/js/teacher/add.js',
	'src/js/teacher/edit.js',
	'src/js/teacher/list.js',
	// �γ�
	'src/js/course/add.js',
	'src/js/course/course_s1.js',
	'src/js/course/course_s2.js',
	'src/js/course/course_s3.js',
	'src/js/course/list.js',
	// ѧ�Ʒ���
	'src/js/category/add.js',
	'src/js/category/edit.js',
	'src/js/category/list.js'
];

gulp.task('js',function(){
	jsModules.forEach(function(jsPath){
		var pathArr = jsPath.split('/');
		var jsName = pathArr.pop();
		pathArr.shift();
		browserify(jsPath,{debug:true}).bundle()
			.pipe(source(jsName))
			.pipe(buffer())
			.pipe(uglify())
			.pipe(gulp.dest('dist/'+pathArr.join('/')))
	})

})

gulp.task('build',function(){
	gulp.run(['html','less','jsLib','js'])
})

gulp.task('default',function(){
	gulp.run('build')

	gulp.watch(['src/**/*.html','index.html'],function(){
		gulp.run('html')
	})

	gulp.watch('src/**/*.less',function(){
		gulp.run('less')
	})

	gulp.watch(['src/**/*.js'],function(){
		gulp.run('js')
	})
})

