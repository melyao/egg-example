'use strict';
const Controller = require('egg').Controller;
class Index extends Controller {
  async getList() {
    const json = {
    };
    this.ctx.body = json;
  }
}

module.exports = Index;
