module.exports = app => {
  class DepartmentService extends app.Service {
    * getDepInfoById({ id }) {
      const result = yield this.app.mysql.get('department', { id });
      return result;
    }
    * getAllDeps() {
      const result = yield this.app.mysql.select('department');
      return result;
    }
  }
  return DepartmentService;
};
