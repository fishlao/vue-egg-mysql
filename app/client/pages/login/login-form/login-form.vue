<template>
  <el-card class="box-card">
    <el-form :model="form" ref="form" label-width="100px">
      <el-form-item label="Name" prop="name">
        <el-input
          type="text"  
          v-model="form.name"
          placeholder="name" 
          auto-complete="off"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          type="password" 
          v-model="form.password" 
          placeholder="password" 
          auto-complete="off"
        >
        </el-input>
      </el-form-item>
      <el-button plain 
        class="submit-bt"
        type="primary"
        size="large"
        @click="submitForm('form')"
      >
        Login
      </el-button >
     </el-form>
   </el-card>
</template>

<script>
export default {
  data() {
      return {
        form: {
          name: '',
          password: '',
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.getLoginInfo();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      getLoginInfo() {
        console.log(this.form);
         this.$curl({
           url: '/api/login/get_login_info',
           data: this.form,
         }).then(({ data, metadata }) => {
            if (data) {
              // 将用户信息存在window变量中，方便其他组件共享
              window.localStorage.setItem('id', data.userid);
              window.localStorage.setItem('name', data.name);
              window.localStorage.setItem('authority', data.authority);
              window.localStorage.setItem('avatar', data.avatar);
              this.$router.push('/dashboard');
            }
         }).catch(error => {
          console.log(error);
        });
      },
   }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.submit-bt {
  width: 30%;
}
.box-card {
  background-color: rgba(238, 241, 246, 0.38);
}
</style>
