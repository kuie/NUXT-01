<template>
  <div class="hello">
    <div class="loadingBox">
      <svg viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="25" :fill="Color" fill-opacity="0.2"></circle>
        <circle class="path" cx="50" cy="50" r="20" :fill="Color" fill-opacity="0.4"></circle>
        <circle class="path" cx="50" cy="50" r="15" :fill="Color" fill-opacity="0.6"></circle>
        <circle class="path" cx="50" cy="50" r=10 :fill="Color" fill-opacity="0.8"></circle>
        <circle class="path" cx="50" cy="50" r="5" :fill="Color" fill-opacity="1"></circle>
      </svg>
      <h2>
        Loading...
      </h2>
    </div>
  </div>
</template>
<script>
  'use strict'
  export default {
    name: 'hello',
    data () {
      return {
        Color: 'rab(33,33,33)'
      }
    },
    methods: {
      getCircleColors () {
        function getNum () {
          return Math.floor(Math.random() * 256)
        }

        this.Color = `rgb(${getNum()},${getNum()},${getNum()})`
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

  .loadingBox {
    padding-bottom: 100px;
  }

  h2 {
    margin-top: 15px;
  }
</style>
