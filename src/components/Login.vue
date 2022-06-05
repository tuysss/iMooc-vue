<template>
  <body id="poster">
    <el-form class="login-container" label-position="left"
             label-width="0px">
      <h3 class="login_title">系统登录</h3>
      <el-form-item>
        <el-input type="text" v-model="loginForm.username"
                  auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password"
                  auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-radio v-model="loginForm.role" label=0>管理员</el-radio>
        <el-radio v-model="loginForm.role" label=1>教师</el-radio>
        <el-radio v-model="loginForm.role" label=2>学生</el-radio>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </body>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        role: 0
      },
      responseResult: []
    }
  },
  methods: {
    login () {
      var _this = this
      console.log(this.$store.state)
      this.$axios
        .post('/login', { // post请求，axios携带参数传给接口
          name: this.loginForm.username,
          password: this.loginForm.password,
          role: this.loginForm.role
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            // var data = this.loginForm
            _this.$store.commit('login', _this.loginForm)
            // var path = this.$route.query.redirect
            console.log(this.loginForm.role)
            if (this.loginForm.role === '2') {
              this.$router.replace({path: '/stu/home'})
            } else if (this.loginForm.role === '1') {
              this.$router.replace({path: '/tea/home'})
            } else {
              alert('未选中权限 或者 该权限尚未开发，敬请期待^_^')
            }
            // this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
          }
        })
        .catch(failResponse => {
        })
    }
  }
}

</script>

<style>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
#poster {
  background: url("../assets/img/bg/truman.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body{
  margin: 0px;
}

</style>
