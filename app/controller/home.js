module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      yield this.ctx.render('dist/index.tpl');
    }
  }
  return HomeController;
};

