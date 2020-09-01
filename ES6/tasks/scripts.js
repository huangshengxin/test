import gulp from 'gulp';//自动化
import gulpif from 'gulp-if';//gupl中做if判断
import concat from 'gulp-concat';//连接
import webpack from 'webpack';//打包
import gulpWebpack from 'webpack-stream';//gulp打包
import named from 'vinyl-named';//文件命名
import livereload from 'gulp-livereload';//热更新
import plumber from 'gulp-plumber';//文件信息流 
import rename from 'gulp-rename';//文件重命名
import uglify from 'gulp-uglify';//压缩
import {log,colors} from 'gulp-util';//命令行工具输出包
import args from './util/args';//命令行参数进行解析

gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])//打开文件
    .pipe(plumber({
      errorHandle:function(){//出现错误抛出异常

      }
    }))
    .pipe(named())//对文件命名
    .pipe(gulpWebpack({//对js进行编译
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))//备份文件
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))//压缩文件
    .pipe(gulp.dest('server/public/js'))//重新保存压缩的文件
    .pipe(gulpif(args.watch,livereload()))//监听文件变化后自动刷新
})
