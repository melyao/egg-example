'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async code2session() {
    const code = this.ctx.query.code;
    //获取access_token
    const result = await this.ctx.curl('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${id}&secret=${secret}');
  }
}
module.exports = LoginController;
