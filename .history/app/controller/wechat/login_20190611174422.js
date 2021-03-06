'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async code2session() {
    const code = this.ctx.query.code;
    const { appid, appsecret } = this.config.wechat;
    //获取access_token
    const result = await this.app.curl('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + appsecret, {
      // 自动解析 JSON response
      dataType: 'json',
    });
    const openid = await this.app.curl('https://qyapi.weixin.qq.com/cgi-bin/miniprogram/jscode2session?access_token=' + result.data.access_token + '&js_code=' + code + '&grant_type=authorization_code', {
      // 自动解析 JSON response
      dataType: 'json',
    });
    const res = {
      retMsg: '获取成功',
      retCode: '9997',
      data: openid,
    };
    this.ctx.body = res;
  }
}
module.exports = LoginController;
