'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async code2session() {
    const code = this.ctx.query.code;
    const { appid, appsecret } = this.config.wechat;
    //获取access_token
    // const result = await this.app.curl('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + appsecret, {
    //   // 自动解析 JSON response
    //   dataType: 'json',
    // });
    // console.log('token: ' + result.data.access_token);
    const openid = await this.app.curl('https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + appsecret + '&js_code=' + code + '&grant_type=authorization_code', {
      // 自动解析 JSON response
      dataType: 'json',
    });
    let res = { };
    if (openid.data.errcode === '0') {
        C
    } else {
      res = {
        retMsg: openid.data.errmsg,
        retCode: openid.data.errcode,
      };
    }
    this.ctx.body = res;
  }
}
module.exports = LoginController;
