const Koa = require('koa')
const app = new Koa()
const index = require('./api/index')
app.use(async (ctx, next) => {
  /**
   * 访问规则
   * 1.阻止一切非/api开头的请求
   * */
  if (/^\/api\//.test(ctx.url) || /^(127\.0\.0\.1|localhost)/.test(ctx.host)) {
    await next()
  } else {
    ctx.throw(404, '请求被阻止了啦...')
  }
})
app.use(index.routes(), index.allowedMethods());

app.listen(8800, '127.0.0.1')

