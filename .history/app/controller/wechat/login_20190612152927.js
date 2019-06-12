'use strict';

// const Controller = require('egg').Controller;
module.exports = app => {
  class LoginController extends app.Controller {
    async code2session() {
      const code = this.ctx.query.code;
      const { appid, appsecret } = this.config.wechat;
      const result = await app.curl('https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + appsecret + '&js_code=' + code + '&grant_type=authorization_code', {
        // 自动解析 JSON response
        dataType: 'json',
      });
      let res = {};
      // console.log("1:" + JSON.stringify(result));
      if (result.status === 200) {
        const openid = result.data.openid;
        const wx_userinfo = await app.mysql.get('wx_info', { openid });
        const userCacheId = app.helper.uuid();
        console.log("2:" + wx_userinfo);
        if (wx_userinfo === null || wx_userinfo === undefined) {
          const info = await app.mysql.insert('wx_info', { openid, sessionKey: result.data.sessionKey, unionid: result.data.unionid, userCacheId });
          if (info.affectedRows === 1) {
            console.log("3: " + info.affectedRows);
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
          const row = await app.mysql.update('posts', { userCacheId }, { where: { openid } });
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
  return LoginController;
};
