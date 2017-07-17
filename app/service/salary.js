module.exports = app => {
  class SalaryService extends app.Service {
  	// 获取员工基本工资
    * getBasicSalary({ id }) {
      const result = yield this.app.mysql.get('employee_salary', { id });
      return result;
    }
    // 获取部门工资
    * getDepSalary({ id }) {
      const result = yield this.app.mysql.get('department_salary', { id });
      return result;
    }
    // 获取年终奖
    * getBonus ({ id }) {
      const result = yield this.app.mysql.get('bonus', { id });
      return result;
    }
    // 获取公司工资情况
    * getCompanySalary () {
      const result = yield this.app.mysql.select('company_salary');
      return result;
    }
    // 设定工种工资
    * setSalary ({ id, level, salary }) {
      const result = yield this.app.mysql.update('actor', { id, level, salary });
      return result;
    }
  }
  return SalaryService;
};
