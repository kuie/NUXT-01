"use strict";
const router = require('koa-router')();
const path = require('path');
// vue Template
console.log('dff');
router.get('/', async ctx => {
  ctx.body = '测试'
});

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
});

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
});

module.exports = router;
