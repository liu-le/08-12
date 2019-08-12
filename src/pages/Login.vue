<template>
  <div class="login">
    <div id="top">
      <a id="logo" href="index.html">
        <img src="../assets/images/home.png" style="padding:.4rem .125rem;height:1.6rem;" />
      </a>
      <a id="title">登录</a>
      <span id="list">
        <a href="javascript:window.history.back();">
          <img src="../assets/images/goback.png" style="padding:.4rem .2rem;height:1.6rem" />
        </a>
        <a href="login.jsp">
          <img src="../assets/images/userlogin.png" style="padding:.4rem .2rem;height:1.6rem" />
        </a>
      </span>
    </div>
    <div id="login_div">
      <form>
        <div class="idname">
          <span>用户名</span>
          <input type="text" placeholder="请输入用户名/手机号/邮箱" v-model="username" />
          <b>
            <img src="../assets/images/login.png" style="height:1.5rem;vertical-align: middle;" />
          </b>
        </div>

        <div class="idpass">
          <span>password</span>
          <input type="password" placeholder="请输入用户password" v-model="password"/>
          <b>
            <img src="../assets/images/lock.png" style="height:1.5rem;vertical-align: middle;" />
          </b>
        </div>
        <router-link to="/login" class="btn" @click.native="login">登录</router-link>
        <span class="spanb" placeholder="提示信息">{{mess}}</span>

        <router-link to="/reg" class="button">注册</router-link>
      </form>
    </div>
  </div>
</template>
<style scoped>
#top {
  width: 100%;
  height: 2.5rem;
  position: relative;
  left: 0rem;
  top: 0rem;
  background-color: #ffffff;
  text-align: center;
  line-height: 4rem;
  color: #ff5400;
  font-size: 14px;
  font-family: "microsoft yahei", Verdana, Arial, Helvetica, sans-serif;
  z-index: 4;
  border-bottom: 1px solid #cccccc;
  display: flex;
  justify-content: center;
}
#logo {
  flex: 1;
  height: 3rem;
  padding-top: 3px;
}
#title {
  flex: 8;
  color: #ff5400;
  font: 1rem/2.5rem "";
  height: 2.5rem;
}
#list {
  flex: 1;
  display: flex;
  padding: 0.3rem 0.2rem;
  height: 2.5rem;
}

form {
  text-align: center;
  line-height: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
}
form input {
  box-sizing: border-box;
  border: 0.1rem solid white;
  background: #ffffff;
  padding: 0.1rem 2rem;
}
form span {
  display: block;
  background: #ff54;
  height: 2rem;
  width: 8rem;
}
form b {
  display: block;
  background: white;
  height: 2rem;
  width: 2rem;
}
form .btn {
  width: 24rem;
  height: 2rem;
  background: rgb(255, 7, 7);
  margin: 1rem auto;
}
.button {
  width: 6rem;
  height: 2rem;
  background: rgba(194, 9, 80, 0.63);
  margin: 0 auto;
  border: 0;
}
.idname {
  display: flex;
  padding-top: 4rem;
  justify-content: center;
}
.idpass {
  display: flex;
  margin: 2rem 0;
  justify-content: center;
}
.spanb {
  width: 24rem;
  height: 2rem;
  margin: 0 auto;
  background: white;
}
</style>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      mess: ""
    };
  },
  methods: {
    login() {
      axios({
        url: "/api/login",
        method: "post",
        data: { username: this.username, password: this.password }
      }).then(res => {
        // console.log('1',res);
        if (res.data.err === 0) {
          this.$router.push("/home");
        } else {
          this.mess = res.data.msg;
        }
      });
    }
  }
};
</script>
