'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // *************   wechat       **************
  app.get('/wechat/home/getWxUserInfo', 'wechat.home.getWxUserInfo');
  app.post('/wechat/home/insertWxUserInfo', 'wechat.home.insertWxUserInfo');
};
