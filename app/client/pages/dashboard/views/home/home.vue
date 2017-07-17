<template>
    <div class="home">
        <div class="avatar">
           <img :src="avatar"/>
        </div>
        <div class="basic-info">
            <p><span>birth:</span>{{ basinInfo.birth }}</p>
            <p><span>gender:</span>{{ basinInfo.gender === 1 ? 'male' : 'female' }}</p>
            <p><span>phone:</span> {{ basinInfo.phone }} </p>
            <p><span>department:</span> {{ basinInfo.dep_name }} </p>
            <p><span>actor:</span> {{ basinInfo.actor_name }} </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
        basinInfo: {},
        avatar: window.localStorage['avatar'],
    };
  },
  created() {
    this.$curl({
        url: '/api/home/get_basic_info',
        method: 'get',
        query: {
          id: localStorage['id'],
        }
    }).then(({ data, metadata }) => {
        const { birth } = data;
        this.basinInfo = data;
        // 修改时间显示方式
        this.basinInfo.birth = this.$date(birth);
    }).catch(error => {
        console.log(error);
    });
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.home {
    text-align: center;
}
.avatar {
    width: 200px;
    height: 200px;
    position: relative;
    margin: auto;
}
.avatar > img {
    position: absolute;
    border-radius: 5%;
    top: 50%;
    left: 50%;
    max-width: 100%;
    transform: translate(-50%,-50%);
}
.basic-info {
    line-height: 30px;
}
.basic-info > p > span {
    margin: 10px;
}
</style>
