'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // *************   wechat       **************
  app.get('/wechat/home/getWxUserInfo', 'wechat.home.getWxUserInfo');
  app.post('/wechat/home/insertWxUserInfo', 'wechat.home.insertWxUserInfo');
  //登录 通过 code得到 openid
  app.get('/wechat/login/code2session', 'wechat.login.code2session');
  //绑定用户信息
  app.post('/wechat/login/loginbybindtel', 'wechat.login.loginbybindtel');
};
