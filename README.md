# nuxt-text-01

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
## 项目总结

总体来说项目搭建过程比较顺利
基于NUXT的后台页面渲染使用起来相比vue-router要简便不少
不需要配置路由项，只要完成文件结构的建立系统会自动生成路由系统
中间件的使用也是通过在middleware文件夹中直接添加js就可以了
后台渲染页面在打包后整体运行速度还是不错的
值得一提的是 npm run build后的项目文件并不是非常庞大
打包后的项目在页面显示的过程中也没有再吃出现dev模式下的样式闪动问题
当然，一些常用的样式库可以放在head里作为静态资源使用
通过CDN也是可以提高加载速度的
目前来看，异步交互完全依靠fetch是可行的

我尝试在koa项目的启动中将NUXT项目打包部署
但是失败了
原因是nuxt是对象...
但是在网上的一些demo中却使用了new nuxt(confg)这种方法
目前还没弄清楚是怎么回事..
出现问题的demo代码如下
```js
const nuxtConfigFile = resolve(rootDir, 'nuxt.config.js')

let options = {}
if (fs.existsSync(nuxtConfigFile)) {
  options = require(nuxtConfigFile)
}
if (typeof options.rootDir !== 'string') {
  options.rootDir = rootDir
}

const nuxt = new Nuxt(options)
nuxt.build()
```
##项目踩坑
+ fetch is not a function与document is not define之谜
毫无疑问基于后台渲染的项目中异步交互不能使用浏览器方法
这也就是问什么我在使用的"document.getElementById('XX')"时候出现了报错 --> document is not define
因为这个时候浏览器对象还没有生成呢...  
asyncData中执行的代码都是不能使用window方法的
任何方法都不行...

+ 莫名其妙的报错
可能是因为引入了代码检查工具的原因
我的代码总会报错
报错的内容还都是因为少了空格多了分号之类的...
这也让我重新学习了一下webstorm的基础设置  
Settings-->Editor-->Code Style-->Javascript
可以调整代码格式化(Shift+Ctrl+l)的方法
简单的调整之后报错就少多了
再有就是不能使用双引号而使用单引号
行尾不能有;的问题了
通常在Settings-->Editor-->Live Templates下可以更改一下也是可以的
