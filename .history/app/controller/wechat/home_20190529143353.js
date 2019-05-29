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
  async getAlbumList() {
    const res = {
      retMsg: '获取成功',
      retCode: '0000',
      result: {
        video: [{
          src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
          id: 1,
        }, {
          src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
          id: 2,
        }],
        img: [
          { type: 1, name: '效果图', data: [{ src: 'http://172.16.2.130:7001/public/img/pic1.png', id: 1 }, { src: 'http://172.16.2.130:7001/public/img/pic2.png', id: 2 }] },
          { type: 2, name: '实景图', data: [{ src: 'http://172.16.2.130:7001/public/img/pic1.png', id: 1 }] },
        ],
      },
    };
    this.ctx.body = res;
  }
}

module.exports = HomeController;
