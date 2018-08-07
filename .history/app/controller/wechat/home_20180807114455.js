'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const json = {
      count: 2,
      total: 1,
      data: [{
        key: 0,
        todo: 'todo1',
      }, {
        key: 1,
        todo: 'todo2',
      },
      ],
    };
    this.ctx.body = json;
  }
  async list() {
    const json = {
      retMsg: '操作成功',
      retCode: '0000',
      result: {
        memberId: '666945',
        memberHeadimg: 'http: //thirdwx.qlogo.cn/mmopen/vi_32/uU7mPicNERFAFpTbYkiazgYHA2q6VmPibNYmkDyQCqQ5mGkrzs3vnwvdlAHm2XqBFH8icfVswszibsbZJEKP0COwlTw/132',
        memberNickname: '孟姑娘\uD83D\uDC83',
        memberName: 'mel',
        memberIdcode: null,
        memberTel: '138****1036',
        memberPwd: '9186efcbc59df5a56a2178063a6c440b',
        createTime: 1524561479000,
        memberScores: 0,
        status: 1,
        createSrc: 3,
        customInfoId: 134871,
        isSmsChk: null,
        openid: 'oErwPxOjCyech9jaRedv_EooqyNU',
        buildingProjectId: null,
        unionUserId: null,
        cookieId: null,
        remember: null,
        col1: null,
        col2: null,
        col3: null,
        col4: null,
        col5: null,
        fingerprint: '31d08b7a7f3d436c81863828f6e67cef',
        isProprietor: 1,
        proprietorAuthTime: null,
        proprietorIdCode: null,
        memberTelAll: '13896511036',
        isLogin: true,
        isNew: 0,
        longitude: 106.555715,
        latitude: 29.606374,
        lastEnterName: '孟瑶',
      },
    };
    this.ctx.body = json;
  }
  * home() {
    yield this.ctx.render('wechat/home_demo.ejs', {
      a: '1',
      b: '2',
    });
  }
  * other() {
    yield this.ctx.render('wechat/home_other.ejs');
  }
}

module.exports = HomeController;
