<template>
  <ol>
    <li v-for="(item,index) in data">
      <span>{{index+1}}</span><span :style="'color : '+item.color">{{item.val}}</span>
    </li>
  </ol>
</template>

<script>
  'use strict'
  import { axios } from '../../util/fetch'

  export default {
    name: 'index',
    async asyncData ({ params, error }) {
      const res1 = await axios.post('/api/start/data', { a: 1 })
      const res2 = await axios.post('/api/start/data', { b: 2 })
      return axios.all([res1, res2]).then(res => {
        return { data: res[0].data.data.concat(res[1].data.data) }
      })
    }
  }
</script>

<style scoped lang="less">

</style>
