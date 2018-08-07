'use strict';
const Controller = require('egg').Controller;
class Index extends Controller {
  async getList() {
    const json = {
      count: 2,
      data: [{
        key: 0,
        todo: 'todo1',
      }, {
        key: 1,
        todo: 'todo2',
      },
      ],
    };
    this.ctx.body = json;
  }
}

module.exports = Index;
