import date from '$common/utils/date';

module.exports = {
  install(Vue) {
    // 把 curl 方法注入到 Vue.prototype 可以全局使用
    Vue.prototype.$date = date;  // eslint-disable-line
  },
};
