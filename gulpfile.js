const gulp = require('gulp');
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const sass = gulpSass(dartSass);

// Задача для компиляции SCSS в CSS
function buildStyles() {
  return gulp
    .src('./src/sass/**/*.sass') // Исходные SCSS файлы
    .pipe(sass().on('error', sass.logError)) // Компиляция SCSS
    .pipe(gulp.dest('./css')); // Сохранение в папку
}

// Задача для отслеживания изменений
function watchFiles() {
  gulp.watch('./src/sass/**/*.sass', buildStyles); // Отслеживание SCSS файлов
}

// Экспортируем задачи
exports.buildStyles = buildStyles;
exports.watch = gulp.series(buildStyles, watchFiles); // Последовательное выполнение задач