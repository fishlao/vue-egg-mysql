module.exports = app => {
  class AttendanceController extends app.Controller {
    * createAttendance() {
      const { service, ctx } = this;
      const params = ctx.request.body;
      const result = yield service.attendance.createAttendance(params);
      if (!result) {
        return ctx.errorRes('createAttendance errorRes', 500);
      }
      return ctx.successRes(result);
    }
    * getAttendance() {
      const { service, ctx } = this;
      const { id } = ctx.request.query;
      const result = yield service.attendance.getAttendance({ id });
      if (!result) {
        return ctx.errorRes('getAttendance errorRes', 500);
      }
      return ctx.successRes(result);
    }
  }
  return AttendanceController;
};
