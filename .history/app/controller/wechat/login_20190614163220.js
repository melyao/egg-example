'use strict';

const Controller = require('egg').Controller;
const WXBizDataCrypt = require('../../extend/WXBizDataCrypt');

class LoginController extends Controller {
  async code2session() {
    const ctx = this.ctx;
    const code = ctx.query.code;
    const { appid, appsecret } = this.config.wechat;
    const result = await this.app.curl('https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + appsecret + '&js_code=' + code + '&grant_type=authorization_code', {
      // 自动解析 JSON response
      dataType: 'json',
    });
    let res = {};
    // console.log("1:" + JSON.stringify(result));
    if (result.status === 200) {
      const openid = result.data.openid;
      const wx_userinfo = await this.app.mysql.get('wx_info', { openid });
      const userCacheId = ctx.helper.uuid();
      if (wx_userinfo === null || wx_userinfo === undefined) {
        const info = await this.app.mysql.insert('wx_info', { openid, sessionKey: result.data.sessionKey, unionid: result.data.unionid, userCacheId });
        if (info.affectedRows === 1) {
          res = {
            userCacheId,
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
        const row = await this.app.mysql.update('wx_info', { userCacheId }, { where: { openid } });
        if (row.affectedRows === 1) {
          res = {
            userCacheId,
            retMsg: '操作成功',
            retCode: '0000',
          };
        } else {
          res = {
            retMsg: '更新userCacheId失败',
            retCode: '0001',
          };
        }
      }
    } else {
      res = {
        retMsg: result.data.errmsg,
        retCode: result.data.errcode,
      };
    }
    ctx.body = res;
  }
  async loginbybindtel() {
    const body = this.ctx.request.body;
    const wx_userinfo = await this.app.mysql.get('wx_info', { userCacheId: body.userCacheId });
    if(wx_userinfo) {
      const pc = new WXBizDataCrypt(this.config.wechat.appid, wx_userinfo.sessionKey);
      console.log(pc, wx_userinfo.sessionKey);
      const data = pc.decryptData(body.encryptedData, body.iv);
      if (data) {
        this.ctx.body = {
          retMsg: '操作成功',
          retCode: '0000',
          result: wx_userinfo,
        };
      }
    }
  }
}
module.exports = LoginController;
