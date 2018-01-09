<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxt-text-01
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <h2>{{$store.state.stars}}</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
      <nuxt-link to="/user" class="el-button el-button--success">用户</nuxt-link>
      <el-button type="primary" @click="$store.commit('increment')">测试按钮{{$store.state.counter}}</el-button>
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import axios from 'axios'

  export default {
    fetch ({ store, params }) {
      return axios.get('/api/user')
        .then((res) => {
          store.commit('setStars', res.data)
        })
        .catch(err => console.log(err))
        .finally(res => {
          console.log(res)
        })
    },
    components: {
      Logo
    }
  }
</script>

<style lang="less" scoped>
  a {
    text-decoration-line: none;
  }

  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
