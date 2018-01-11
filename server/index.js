const Koa = require('koa')
const app = new Koa()
/*处理json格式数据*/
const json = require('koa-json');
/*错误处理*/
const onerror = require('koa-onerror');
/*上传文件*/
const bodyparser = require('koa-bodyparser');
/*log打印*/
const logger = require('koa-logger');
/*工具箱*/
const util = require('util')
/*路由文件*/
const index = require('./api/index')
const loginRegister = require('./api/login&register')
const start = require('./api/start')
onerror(app);
/*应用中间件*/
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  util.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(async (ctx, next) => {
  /**
   * 访问规则
   * 1.阻止一切非/api开头的请求
   * */
  if (/^\/api\//.test(ctx.url) || /^(127\.0\.0\.1|localhost)$/.test(ctx.ip)) {
    await next()
  } else {
    ctx.throw(404, '请求被阻止了啦...')
  }
})
app.use(loginRegister.routes(), loginRegister.allowedMethods());
app.use(start.routes(), start.allowedMethods());

app.listen(8800, '127.0.0.1')

app.on('error', function (err, ctx) {
  consoe.error('server error', err, ctx);
});

module.exports = app;
