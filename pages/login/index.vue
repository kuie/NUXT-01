<template>
  <div class="login">
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
  import { login } from '../../API/index'

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
        login(this.form.name, this.form.pwd)
          .then(res => {
            this.$message({
              type: res.code === 200 ? 'success' : 'warning',
              message: res.msg
            })
          })
          .catch(err => {
            this.$message({ type: 'error', message: err.toString() })
          })
          .finally(() => {
            this.submitState = false
          })
      }
    }
  }
</script>

<style scoped lang="less">
  .login {
    width: 80%;
    margin: 30px auto;
    .el-button {
      width: 60%;
      display: block;
      margin: auto;
    }
  }
</style>
