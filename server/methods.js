"use strict"
module.exports = {
  async getData (ctx) {
    let postdata = '';
    ctx.req.addListener('data', (data) => {
      postdata += data
    })
    return new Promise((resolve, reject) => {
      ctx.req.addListener('end', function () {
        try {
          postdata = JSON.parse(postdata)
        } finally {
          postdata = postdata
        }
      })
    })
  }
}
