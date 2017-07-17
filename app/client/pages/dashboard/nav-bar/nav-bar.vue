<template>
    <div class="nav-bar">
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" router theme="light">
          <el-menu-item index="/dashboard/home">Home</el-menu-item>
          <el-submenu index="/dashboard/salary-basic">
              <template slot="title">Salary</template>
              <el-menu-item index="/dashboard/salary-basic">Basic</el-menu-item>
              <el-menu-item index="/dashboard/salary-bonus">Bonus</el-menu-item>
              <el-menu-item 
                index="/dashboard/salary-dep"
                v-if="authority==2"
              >
                Dep
              </el-menu-item>
              <el-menu-item 
                index="/dashboard/salary-company"
                v-if="authority==0"
              >
                Company
              </el-menu-item>
              <el-menu-item 
                index="/dashboard/salary-set" 
                v-if="authority==0"
              >
                Set
              </el-menu-item>
          </el-submenu>
          <el-submenu index="/dashboard/query-attendance">
            <template slot="title">Attendance</template>
            <el-menu-item index="/dashboard/query-attendance">Query</el-menu-item>
            <el-menu-item index="/dashboard/add-attendance">Add</el-menu-item>
          </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: 'navBar',
  //根据不同的权限开放不同的入口，
  //权限为0则是公司负责人级别，如果权限为1则是普通员工，如果权限为2则是经理
  props: ['authority'],
  data() {
    return {
      activeIndex: '/dashboard/salary',
    };
  },
  methods: {
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
  .nav-bar {
    width: 100%;
    height: 60%;
    background-image: url('./images/nav-bar-bg.jpg');
    background-repeat: no-repeat;
    background-position: 100% 40%;
  }
  .el-menu {
    float: right;
    background-color: rgba(251, 253, 255, 0.44);
  }
</style>
