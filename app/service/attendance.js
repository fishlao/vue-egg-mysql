module.exports = app => {
  class AttendanceService extends app.Service {
    * createAttendance(params) {
     	const result = yield this.app.mysql.insert('attendance', params);
     	return result;
    }

    * getAttendance({ id }) {
    	const result = yield this.app.mysql.select('attendance', { // 搜索 post 表
        where: { id }, // WHERE 条件
      });
    	return result;
    }
  }
  return AttendanceService;
};
