<template>
    <div class="user-info">
        <span>Welcome,  {{name}} </span>
    </div>
</template>

<script>
export default {
  name: 'userInfo',
  //根据不同的权限开放不同的入口，
  //权限为0则是公司负责人级别，如果权限为1则是普通员工，如果权限为2则是经理
  props: ['name'],
}
</script>

<style scoped lang="less" rel="stylesheet/less">
  .user-info {
    font-family: -webkit-pictograph;
    color: white;
    font-size: 32px;
    float: left;
    margin: 10px;
  }
</style>
