'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async code2session() {
    const code = this.ctx.query.code;
    const { appid, appsecret } = this.config.wechat;
    const result = await this.app.curl('https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + appsecret + '&js_code=' + code + '&grant_type=authorization_code', {
      // 自动解析 JSON response
      dataType: 'json',
    });
    let res = { };
    if (result.data.errcode === '0') {
      const openid = result.data.openid;
      const wx_userinfo = await this.app.mysql.get('wx_info', { openid });
      const userCacheId = this.helper.uuid();
      if (wx_userinfo === null || wx_userinfo === undefined) {
        const info = await this.app.mysql.insert('wx_info', { openid, sessionKey: result.data.sessionKey, unionid: result.data.unionid, userCacheId });
        if (info.affectedRows === 1) {
          console.log(info.affectedRows);
          res = {
            retMsg: '操作成功',
            retCode: '0000',
          };
        } else {
          res = {
            retMsg: '新增用户失败',
            retCode: '0001',
          };
        }
      } else {
        const row = await this.app.mysql.update('posts', { userCacheId }, { where: { openid } });
        if (row.affectedRows === 1) {
          res = {
            retMsg: '操作成功',
            retCode: '0000',
          };
        }
        res = {
          retMsg: '更新userCacheId失败',
          retCode: '0001',
        };
      }
    } else {
      res = {
        retMsg: result.data.errmsg,
        retCode: result.data.errcode,
      };
    }
    this.ctx.body = res;
  }
}
module.exports = LoginController;
