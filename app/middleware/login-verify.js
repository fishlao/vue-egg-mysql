// options === app.config.robot
module.exports = (options, app) => {
  return function* loginMiddleware(next) {
    // const cookie = this.ctx.cookies;
    // console.log(cookie);
    yield next;
  };
};
