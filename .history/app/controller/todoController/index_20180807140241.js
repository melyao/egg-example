'use strict';
module.exports = app => {
  class IndexController extends app.Controller {
    async getList() {
      const json = await this.app.mysql.query('select id, todo from todolist order by create_date desc');
      console.log(json);
      this.ctx.body = json;
    }
  }
  return IndexController;
};