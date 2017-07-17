import curl from '$common/utils/curl';

module.exports = {
  install(Vue) {
    // 把 curl 方法注入到 Vue.prototype 可以全局使用
    Vue.prototype.$curl = curl;  // eslint-disable-line
  },
};
