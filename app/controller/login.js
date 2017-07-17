module.exports = app => {
  class LoginController extends app.Controller {
    * getLoginInfo() {
      console.log('=====>');
      const { service, ctx } = this;
      const { name, password } = ctx.request.body;
      console.log(ctx.request.body, '=====>');
      const result = yield service.login.getLoginInfo({ name, password });
      if (!result) {
        return ctx.errorRes('account is not exit', 403);
      }
      const { password: real_password } = result;
      if (real_password !== password) {
        return ctx.errorRes('password is not correct', 403);
      }
      return ctx.successRes(result);
    }
  }
  return LoginController;
};
