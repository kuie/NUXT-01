const Koa = require('koa')
const app = new Koa()
const index = require('./api/index')
app.use(async (ctx, next) => {
  await next()
})
app.use(index.routes(), index.allowedMethods());

app.listen(8800, '127.0.0.1')

