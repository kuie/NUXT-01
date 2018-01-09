<template>
  <div class="User">
    <el-form v-model="form" label-position="left" label-width="100px">
      <el-form-item prop="name" label="用户名：">
        <el-input autoComplete="off" name="name" type="text" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="pwd" label="密码:">
        <el-input autoComplete="off" name="pwd" type="password" v-model="form.pwd"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm" :loading="submitState">提&nbsp&nbsp&nbsp&nbsp交</el-button>
    </el-form>
  </div>
</template>

<script>
  'use strict'
  export default {
    layout () {
      return 'default'
    },
    name: 'User',
    data () {
      return {
        submitState: false,
        form: {
          name: '',
          pwd: ''
        }
      }
    },
    methods: {
      submitForm () {
        this.submitState = true
        fetch('/api/user/sdfsdf').then(res => {
          console.log(res)
        }).finally(() => {
          this.submitState = false
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .User {
    width: 80%;
    margin: 30px auto;
    .el-button {
      width: 60%;
      display: block;
      margin: auto;
    }
  }
</style>
