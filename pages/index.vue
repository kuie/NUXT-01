<template>
  <div class="hello">
    <div class="loadingBox" v-if="loading">
      <svg viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="25" :fill="Color" fill-opacity=".2"></circle>
        <circle class="path" cx="50" cy="50" r="20" :fill="Color" fill-opacity=".2"></circle>
        <circle class="path" cx="50" cy="50" r="15" :fill="Color" fill-opacity=".2"></circle>
        <circle class="path" cx="50" cy="50" r=10 :fill="Color" fill-opacity=".2"></circle>
        <circle class="path" cx="50" cy="50" r="5" :fill="Color" fill-opacity=".2"></circle>
      </svg>
      <h2 :style="`color:${Color}`" class="loadingBox">Loading...</h2>
      <el-button type="primary" @click="skipAD">跳过广告</el-button>
    </div>
    <div v-else>
      <nuxt-link to="/login" class="el-button el-button--primary">登陆</nuxt-link>
      <nuxt-link to="/register" class="el-button el-button--success">注册</nuxt-link>
      <nuxt-link to="/start" class="el-button el-button--success">测试</nuxt-link>
    </div>
  </div>
</template>
<script>
  'use strict'
  export default {
    name: 'start',
    data () {
      return {
        Color: 'rab(33,33,33)',
        loading: true
      }
    },
    methods: {
      getCircleColors () {
        function getNum () {
          return Math.floor(Math.random() * 256)
        }

        this.Color = `rgb(${getNum()},${getNum()},${getNum()})`
      },
      skipAD () {
        this.loading = false
      }
    },
    created () {
      /**
       * 开始加载计时器
       * */
      let loadingInt = setInterval(this.getCircleColors, 800)
      /**
       * 停止加载计时器
       * */
      let t = setTimeout(() => {
        clearInterval(loadingInt)
        clearTimeout(t)
        t = loadingInt = null
        this.loading = false
      }, 5000)
    }
  }
</script>

<style scoped lang="less">
  .hello {
    height: 100%;
    width: 100%;
    position: relative;
    border: 1px solid #eee;
  }

  h2 {
    text-align: center;
  }

  .el-button {
    margin: 10px auto;
    width: 75%;
    display: block;
  }
</style>
