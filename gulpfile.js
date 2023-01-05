const { series, dest, src, watch, parallel } = require('gulp')
const twig = require('gulp-twig')
const sass = require('gulp-sass')(require('sass'))
const browsersync = require('browser-sync').create()
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');


function styleTask(){
    const tailwindcss = require('tailwindcss'); 
    return src(`./src/assets/css/*.scss`).pipe(sass().on('error', sass.logError))
      .pipe(dest('./src/assets/css'))
      .pipe(postcss([
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
      ]))
      .pipe(concat({ path: 'style.css'}))
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(dest('dist/assets/css'));
}

// Concat all the plugins css
function mergeAllPuginStyles(){
    return src('./src/assets/css/pugins/**').pipe(concat('plugins.min.js')).pipe(dest('dist/assets/css'))
}


// Template engine twig
function templateTask() {
    return src('./src/*.twig')
        .pipe(twig()).pipe(dest('dist'))
}

// SCSS Styles
// function styleTask() {
//     return src('./src/assets/scss/*.scss')
//         .pipe(sourcemap.init())
//         .pipe(sass({ outputStyle: 'compressed' }))
//         .pipe(sourcemap.write('.'))
//         .pipe(dest('dist/assets/css')).pipe(browsersync.stream())
// }

// CSS Styles
// function cssPluginTask() {
//     return src('./src/assets/css/*.css')
//         .pipe(concat('plugins.min.css'))
//         .pipe(dest('dist/assets/css'))
// }

// CSS Styles
function videoTask() {
    return src('./src/assets/video/**')
        .pipe(dest('dist/assets/video'))
}

// Image asssets
function imageTask() {
    return src('./src/assets/img/**')
        .pipe(dest('dist/assets/img'))
}

// js asssets
function jsPluginsTask() {
    return src(['./src/assets/js/**/*.js', '!src/assets/js/scripts.js'])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(dest('dist/assets/js'))
}

// Custom JS task
function customJsTask() {
    return src('src/assets/js/main.js')
        .pipe(dest('dist/assets/js'))
}

// Fonts file
function custonFonts() {
    return src('src/assets/fonts/**')
        .pipe(dest('dist/assets/fonts'))
}

// Live reload browsersync
function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: './dist'
        }
    })
    cb()
}

// Watch all files
function watcher() {
    watch('./src/**/*.twig').on("change", series(parallel([templateTask, styleTask]), browsersync.reload))
    watch('./src/assets/img/**', imageTask)
    watch('./src/assets/js/**/*.js', jsPluginsTask)
    watch('./src/assets/js/scripts.js', customJsTask)
    watch('./src/assets/css/*.scss', styleTask)
    watch('./src/assets/css/pugins/**', mergeAllPuginStyles)
    watch('./src/assets/fonts/**', custonFonts)
    watch('./src/assets/video/**', videoTask)
}



exports.default = series(
    templateTask,
    styleTask,
    mergeAllPuginStyles,
    videoTask,
    imageTask,
    jsPluginsTask,
    customJsTask,
    custonFonts,
    browsersyncServe,
    watcher
)