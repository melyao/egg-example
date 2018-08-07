'use strict';
module.exports = app => {
  class IndexController extends app.Controller {
    async getList() {
      // const current = this.ctx.query.current;
      // const pageSize = this.ctx.query.pageSize;
      const json = await this.app.mysql.query('select id, todo from todolist order by create_date desc');
      const arr = [];
      for (const i of json) {
        const a = {
          key: i.id,
          todo: i.todo,
        };
        arr.push(a);
      }
      const res = {
        count: json.length,
        data: arr,
      };
      this.ctx.body = res;
    }
    async addTodo() {
      const data = this.ctx.request.body;
      const json = {
        todo: data.todo,
        create_date: new Date(),
        update_date: new Date(),
      };
      const res = await this.app.mysql.insert('todolist', json);
      if (res.affectedRows === 1) {
        this.ctx.body = { errno: 0, msg: '新增成功' };
      } else {
        this.ctx.body = { errno: 1, msg: '新增失败！' };
      }
    }
    async deleteTodo() {
      const id = this.ctx.request.body.key[0];
      const res = await this.app.mysql.update('todolist', { id, deleted: 1 });
      if (res.affectedRows === 1) {
        this.ctx.body = { errno: 0, msg: '删除成功' };
      } else {
        this.ctx.body = { errno: 1, msg: '删除失败！' };
      }
    }
  }
  return IndexController;
};
