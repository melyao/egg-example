'use strict';
module.exports = app => {
  class IndexController extends app.Controller {
    async getList() {
      // const current = this.ctx.query.current;
      // const pageSize = this.ctx.query.pageSize;
      const json = await this.app.mysql.query('select id, todo from todolist order by create_date desc');
      const res = {
        count: json.length,
        data: json,
      };
      this.ctx.body = res;
    }
    async addTodo() {
      const data = this.ctx.request.body;
      const json = {
        todo: data.newtodo,
        create_date: new Date(),
        update_date: new Date(),
      };
      const res = this.app.mysql.insert('todolist', json);
      console.log(res);
      if (res.affectedRows === 1) {
        this.ctx.body = { errno: 0, msg: '新增成功' };
      } else {
        this.ctx.body = { errno: 1, msg: '新增失败！' };
      }
    }
  }
  return IndexController;
};
