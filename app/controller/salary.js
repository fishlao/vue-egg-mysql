module.exports = app => {
  class SalaryController extends app.Controller {
    * getBasicSalary() {
      const { service, ctx } = this;
      const { id } = ctx.request.query;
      const result = yield service.salary.getBasicSalary({ id });
      if (!result) {
        return ctx.errorRes('getBasicSalary errorRes', 500);
      }
      return ctx.successRes(result);
    }

    * getDepSalary() {
      const { service, ctx } = this;
      const { id } = ctx.request.query;
      const employee = yield service.employee.getBasicInfo({ id });
      if (!employee) {
        return ctx.errorRes('getBasicInfo errorRes', 500);
      }
      const { department_id } = employee;
      const result = yield service.salary.getDepSalary({ id: department_id });
      if (!result) {
        return ctx.errorRes('getDepSalary errorRes', 500);
      }
      return ctx.successRes(result);
    }

    * setSalary() {
      const { service, ctx } = this;
      const params = ctx.request.body;
      const result = yield service.salary.setSalary(params);
      if (!result) {
        return ctx.errorRes('setSalary errorRes', 500);
      }
      return ctx.successRes(result);
    }

    * getBonus() {
      const { service, ctx } = this;
      const { id } = ctx.request.query;
      const result = yield service.salary.getBonus({ id });
      if (!result) {
        return ctx.errorRes('getBonus errorRes', 500);
      }
      return ctx.successRes(result);
    }

    * getCompanySalary() {
      const { service, ctx } = this;
      const result = yield service.salary.getCompanySalary();
      if (!result) {
        return ctx.errorRes('getCompanySalary errorRes', 500);
      }
      return ctx.successRes(result);
    }
  }
  return SalaryController;
};
