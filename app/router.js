module.exports = app => {
  app.get('/', 'home.index');
  /* 获取登录信息 */
  app.post('/api/login/get_login_info', 'login.getLoginInfo');
  /* 获取员工基础信息 */
  app.get('/api/home/get_basic_info', 'employee.getBasicInfo');

  /* 获取基本工资 */
  app.get('/api/salary/get_basic_salary', 'salary.getBasicSalary');
  /* 获取部门工资 */
  app.get('/api/salary/get_dep_salary', 'salary.getDepSalary');
  /* 获取公司工资 */
  app.get('/api/salary/get_company_salary', 'salary.getCompanySalary');
  /* 获取年终奖 */
  app.get('/api/salary/get_bonus', 'salary.getBonus');
  /* 设定工资 */
  app.post('/api/salary/set_salary', 'salary.setSalary');
  
  /* 员工设定考勤 */
  app.post('/api/attendance/create_attendance', 'attendance.createAttendance');
  /* 员工查询考勤 */
  app.get('/api/attendance/get_attendance', 'attendance.getAttendance');
  
  /* 获取工种列表 */
  app.get('/api/actor/get_all_actors','actor.getAllActors');


  app.get('*', 'home.index');
};
