<template>
  <div class="login-container">
    <div class="fff">
    </div>
    <div class="juxing">
      <img src="../../assets/img/backgroundblue.png" alt="">
    </div>
    <el-form class="login-form" autoComplete="on" :model="loginForm" ref="loginForm"
             label-position="left">
      <h3 class="title">用户登录</h3>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user"/>
        </span>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="username"/>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password"
                  autoComplete="on"
                  placeholder="password"></el-input>
        <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye"/></span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
      <!--<div class="tips">-->
      <!--<span style="margin-right:20px;">username: admin</span>-->
      <!--<span> password: admin</span>-->
      <!--</div>-->
    </el-form>
  </div>
</template>

<script>
  /* eslint-disable object-curly-spacing,no-undef,space-before-function-paren,no-empty */

  import {isvalidUsername} from '@/utils/validate'
  // import qs from 'qs'

  export default {
    name: 'login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      }
      const validatePass = (rule, value, callback) => {
        if (value.length < 5) {
          callback(new Error('密码不能小于5位'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: 'ytl',
          password: '123456',
          loginType: 2,
          loginSource: 1
        },
        loginRules: {
          username: [{required: true, trigger: 'blur', validator: validateUsername}],
          password: [{required: true, trigger: 'blur', validator: validatePass}]
        },
        loading: false,
        pwdType: 'password'
      }
    },
    methods: {
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      // handleLogin() {
      //   this.$http.post('http://192.168.1.207:8001/login/user/login', qs.stringify({
      //     loginName: this.loginForm.username,
      //     password: this.loginForm.password,
      //     loginType: this.loginForm.loginType,
      //     loginSource: this.loginForm.loginSource
      //   }))
      //     .then(function (response) {
      //       console.log(response)
      //     })
      //     .catch(function (error) {
      //       console.log(error)
      //     })
      // }
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('Login', this.loginForm).then(() => {
              this.loading = false
              this.$router.push({path: '/'})
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg: #2d3a4b;
  $light_gray: #eee;

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .el-button {
      span {
        font-size: 18px;
      }
    }
  }

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;
  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background: url("../../assets/img/background.png") no-repeat;
    background-size: 100% 100%;
    .fff {
      position: fixed;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.8);
    }
    .all {
      opacity: 1;
      filter: alpha(opacity=100); /* IE8 及其更早版本 */
      margin-top: 150px;
      width: 850px;
      .logo {
        width: 250px;
        margin: 0 auto;
      }
      .title1 {
        width: 90%;
        margin: 20px auto;
      }
    }
    .login-form {
      position: absolute;
      right: 40px;
      width: 520px;
      padding: 35px 35px 15px 35px;
      margin: 238px auto;
      z-index: 11;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title {
      font-size: 30px;
      font-weight: bold;
      color: #01579B;
      margin: 0px auto 40px auto;
      text-align: center;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
    .juxing {
      position: fixed;
      height: 100%;
      z-index: 10;
      opacity: 0.8;
      filter: alpha(opacity=80); /* IE8 及其更早版本 */
      background-size: 100% 100%;
      img {
        height: 100%;
      }
    }

  }

</style>
