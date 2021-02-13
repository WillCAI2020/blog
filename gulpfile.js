var gulp = require("gulp");
var debug = require("gulp-debug");
var minifycss = require('gulp-minify-css');
var uglify = require("gulp-uglify"); //js压缩组件
var htmlmin = require("gulp-htmlmin"); //html压缩组件
var htmlclean = require("gulp-htmlclean"); //html清理组件
var changed = require("gulp-changed"); //文件更改校验组件
var gulpif = require("gulp-if"); //任务 帮助调用组件
var plumber = require("gulp-plumber"); //容错组件（发生错误不跳出任务，并报出错误内容）
var isScriptAll = true; //是否处理所有文件，(true|处理所有文件)(false|只处理有更改的文件)
var isDebug = true; //是否调试显示 编译通过的文件
var del = require("del");
var Hexo = require("hexo");
var hexo = new Hexo(process.cwd(), {}); // 初始化一个hexo对象

const workbox = require("workbox-build");
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');
const Uglify = composer(uglifyes, console);
const pipeline = require('readable-stream').pipeline;

// 清除public文件夹
gulp.task("clean", function () {
    return del(["public/**/*"]);
});

// 下面几个跟hexo有关的操作，主要通过hexo.call()去执行，注意return
// 创建静态页面 （等同 hexo generate）
gulp.task("generate", function () {
    return hexo.init().then(function () {
        return hexo
            .call("generate", {
                watch: false
            })
            .then(function () {
                return hexo.exit();
            })
            .catch(function (err) {
                return hexo.exit(err);
            });
    });
});

// 压缩public目录下的js文件
gulp.task('compressJs', function () {
    return gulp
        .src(['./public/**/*.js', '!./public/**/*.min.js', '!./public/**/hbe.js','!./public/**/local-search.js','!./public/**/motion.js','!./public/**/next-boot.js','!./public/**/utils.js','!./public/**/fireworks.js','!./public/**/autoload.js','!./public/**/waifu-tips.js']) //排除的min.js
        .pipe(gulpif(!isScriptAll, changed("./public")))
        .pipe(gulpif(isDebug, debug({ title: "Compress JS:" })))
        .pipe(plumber())
        .pipe(uglify()) //调用压缩组件方法uglify(),对合并的文件进行压缩
        .pipe(gulp.dest("./public")); //输出到目标目录
});

// 压缩 css
gulp.task('compressCss', function () {
	return gulp
		.src('./public/**/*.css')
        .pipe(gulpif(!isScriptAll, changed("./public")))
        .pipe(gulpif(isDebug, debug({ title: "Compress CSS:" })))
        .pipe(plumber())	
		.pipe(minifycss())		
		.pipe(gulp.dest('./public'));
});

// 压缩 html
gulp.task('compressHtml', function () {
	return gulp
		.src('./public/**/*.html')	
        .pipe(gulpif(isDebug, debug({ title: "Compress HTML:" })))
        .pipe(plumber())	
		.pipe(htmlclean())
		.pipe(htmlmin({
			removeComments: true,
			minifyJS: true,
			minifyCSS: true,
			minifyURLs: true,
		}))
		.pipe(gulp.dest('./public'))
});

gulp.task("generate-service-worker", () => {
    return workbox.injectManifest({
        swSrc: './sw-template.js',
        swDest: './public/sw.js',
        globDirectory: './public',
        globPatterns: [
            "**/*.{html,css,js,json,woff2}"
        ],
        modifyURLPrefix: {
            "": "./"
        }
    });
});

gulp.task("Uglify", function () {
    return pipeline(
        gulp.src("./public/sw.js"),
        Uglify(),
        gulp.dest("./public")
  );
});

// 默认任务
gulp.task(
    "default",
    gulp.series(
        "clean",
        "generate",
		gulp.parallel('compressHtml', 'compressCss', 'compressJs'),
		"generate-service-worker",
		"Uglify"
    )
);
//Gulp4最大的一个改变就是gulp.task函数现在只支持两个参数，分别是任务名和运行任务的函数