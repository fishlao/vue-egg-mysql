module.exports = app => {
  class EmployeeController extends app.Controller {
    * getBasicInfo() {
      const { service, ctx } = this;
      const { id } = ctx.request.query;
      console.log(ctx.request.query, '=====>');
      const result = yield service.employee.getBasicInfo({ id });
      if (!result) {
        return ctx.errorRes('getBasicInfo errorRes', 500);
      }
      // 获取部门名称
      const dep_res = yield service.department.getDepInfoById({ id: result.department_id });
      result.dep_name = dep_res.name;
      // 获取工种名称
      const actor_res = yield service.actor.getActorById({ id: result.actor_id });
      result.actor_name = actor_res.name;
      return ctx.successRes(result);
    }
  }
  return EmployeeController;
};
