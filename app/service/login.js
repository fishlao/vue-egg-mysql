module.exports = app => {
  class loginService extends app.Service {
    * getLoginInfo({ name, password }) {
      const result = yield this.app.mysql.get('user', { userid: name });
      return result;
    }
  }
  return loginService;
};
