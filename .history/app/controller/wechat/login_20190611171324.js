'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async code2session() {
    // const code = this.ctx.query.code;
    const { appid, appsecret } = this.config.wechat;
    //获取access_token
    const result = await this.ctx.curl('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + appsecret);
    console.log(result);
  }
}
module.exports = LoginController;
