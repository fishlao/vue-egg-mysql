module.exports = app => {
  class ActorService extends app.Service {
    * getActorById({ id }) {
      const result = yield this.app.mysql.get('actor', { id });
      return result;
    }
    * getAllActors() {
      const result = yield this.app.mysql.select('actor');
      return result;
    }
  }
  return ActorService;
};
