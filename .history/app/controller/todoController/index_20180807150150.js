'use strict';
module.exports = app => {
  class IndexController extends app.Controller {
    async getList() {
      // const current = this.ctx.query.current;
      // const pageSize = this.ctx.query.pageSize;
      const json = await this.app.mysql.query('select id, todo from todolist order by create_date desc');
      this.ctx.body = json;
    }
    async addTodo() {
      
    }
  }
  return IndexController;
};
