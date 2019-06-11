'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getWxUserInfo() {
    const openid = this.ctx.query.openid;
    const wx_userinfo = await this.app.mysql.get('wx_info', { openid });
    const res = {
      retMsg: '获取成功',
      retCode: '9997',
      data: wx_userinfo,
    };
    this.ctx.body = res;
  }
  async insertWxUserInfo() {
    const body = this.ctx.request.body;
    const wx_userinfo = await this.app.mysql.get('wx_info', { openid: body.openid });
    let result = {};
    if (wx_userinfo === null || wx_userinfo === undefined) {
      const res = await this.app.mysql.insert('wx_info', body);
      if (res.affectedRows === 1) {
        console.log(res.affectedRows);
        result = {
          retMsg: '获取成功',
          retCode: '0000',
        };
      } else {
        result = {
          retMsg: '获取失败',
          retCode: '0001',
        };
      }
    } else {
      result = {
        retMsg: '获取失败',
        retCode: '0001',
      };
    }
    this.ctx.body = result;
  }
}

module.exports = HomeController;
