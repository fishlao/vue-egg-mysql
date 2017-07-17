<template>
    <div class="dashboard">
        <div class="nav-row">
            <userInfo :name="name" />
            <div class="login_out_bt">
                <router-link  to="/">
                    Login out
                </router-link>
            </div>
            <navBar :authority="authority"/>
        </div>
        <div class="container-row">
            <el-card class="container-card">
                <router-view></router-view>
            </el-card>
        </div>
    </div>
</template>

<script>
import navBar from './nav-bar/nav-bar.vue';
import userInfo from './user-info/user-info.vue';
export default {
  name: 'dashboard',
  components: {
    navBar,
    userInfo
  },
  data() {
    return {
        authority: window.localStorage['authority'],
        name: window.localStorage['name'],
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.dashboard {
    height: 100%;
    display: flex;
}
.nav-row {
    width:100%;
}
.container-row {
    position: absolute;
    top: 30%;
    width: 100%;
}
.container-card {
    margin: auto 20%;
    height: 400px;
    background-color: rgba(255, 255, 255, 0.81);
}
.login_out_bt {
    float: left;
    margin: 10px;
    font-size: 16px;
    color: white;
    padding: 5px;
    border-radius: 15px;
}
.login_out_bt:hover {
    color: #98d0f1;
}
</style>
