module.exports = app => {
  class ActorController extends app.Controller {
    * getAllActors() {
      const { service, ctx } = this;
      const result = yield service.actor.getAllActors();
      if (!result) {
        return ctx.errorRes('getActors errorRes', 500);
      }
      return ctx.successRes(result);
    }
  }
  return ActorController;
};
