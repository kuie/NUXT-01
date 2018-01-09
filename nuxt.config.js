module.exports = {
  dev: (process.env.NODE_ENV !== 'production'),
  css: [
    '~assets/main.css',
  ],
  /**
   ** Headers of the page
   */
  head: {
    title: 'nuxt-text-01',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.bootcss.com/element-ui/2.0.10/theme-chalk/index.css' }
    ]
  },
  /**
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070',
    failedColor: '#cf000e',
    height: '5px',
    duration: 5000
  },
  /**
   ** Build configuration
   */
  build: {
    /**
     ** Run ESLint on save
     */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash].[ext]'
        }
      },
    ],
    vendor: [
      'axios',
      'element-ui'
    ]
  },
  plugins: [
    { src: '~plugins/vue-ElementUI', ssr: false }
  ],
  /**
   * 组件缓存
   * 默认状态下缓存1000个组件，缓存时间15分钟
   * */
  cache: true,
  /**
   * 代理设置
   * */
  modules: [
    // npm install @nuxtjs/proxy -D
    ['@nuxtjs/proxy']
  ],
  proxy: {
    '/api': {
      pathRewrite: { '^/api': '/api' },
      target: 'http://127.0.0.1:8800'
    }
  },
}
