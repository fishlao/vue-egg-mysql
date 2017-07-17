module.exports = {
  /**
   * API错误返回统一方法
   * @params
   * message: 错误信息
   * code: 错误码
   */
  errorRes(message, code) {
    this.body = this.errorWrap(message, code);
  },
  errorWrap(message, code) {
    return {
      error: {
        message,
        code,
      },
    };
  },
  /**
   * API正确返回统一方法
   * @params
   * data: 返回数据
   * metadata: 附加信息
   */
  successRes(data, metadata) {
    this.body = this.successWrap(data, metadata);
  },
  successWrap(data, metadata) {
    return {
      data,
      metadata,
    };
  },
  /**
   * 302到登陆页
   * @return {[type]} [description]
   */
  redirectToLogin() {
    this.redirect('/login');
  },
  /**
   * 302到dashboard页面
   * @return {[type]} [description]
   */
  redirectToDashboard() {
    this.redirect('/dashboard');
  },

};
