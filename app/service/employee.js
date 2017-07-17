module.exports = app => {
  class EmployeeService extends app.Service {
    * getBasicInfo({ id }) {
      const result = yield this.app.mysql.get('employee', { id });
      return result;
    }
  }
  return EmployeeService;
};
