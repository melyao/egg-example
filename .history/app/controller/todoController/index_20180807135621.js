'use strict';
const Controller = require('egg').Controller;
class Index extends Controller {
  async getList() {
    const json = await this.ctx.db.query('select id, todo from todolist order by create_date desc');
    console.log(json);
    this.ctx.body = json;
  }
}

module.exports = Index;
