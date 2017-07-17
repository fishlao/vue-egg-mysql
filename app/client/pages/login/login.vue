<template>
  <div class="login">
  	<div class="login-main"><loginForm class="login-form"/></div>
    <div class="login-side"></div>
  </div>
</template>

<script>
import loginForm from './login-form/login-form.vue';
export default {
  name: 'login',
  components: {
    loginForm
  },
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.login {
    display: flex;
    height: 100%;
    width: 100%;
}
.login-main {
	flex:1;
	background-size: cover;
  	background-repeat: no-repeat;
	background-image: url('./images/june.jpg');
}
.login-form {
	position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%,-50%);
}
.login-side {
  flex:1;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('./images/handmade.jpg');
}
</style>
