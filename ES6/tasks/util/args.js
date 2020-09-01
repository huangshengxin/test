import yargs from 'yargs';

const args = yargs

  .option('production',{
    boolean:true,
    default:false,
    describe:'min all scripts'
  })//区分环境

  .option('watch',{
    boolean:true,
    default:false,
    describe:'watch all files'
  })//是否监听

  .option('verbose',{
    boolean:true,
    default:false,
    describe:'log'
  })//是否输出日志

  .option('sourcemaps',{
    describe:'force the creation of sroucemaps'
  })//是否生成sourcemaps

  .option('port',{
    string:true,
    default:8080,
    describe:'server port'
  })//端口号

  .argv//字符串作为解析

export default args;
