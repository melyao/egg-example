'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // *************   wechat       **************
  app.get('/wechat/home/getWxUserInfo', 'wechat.home.getWxUserInfo');
  app.post('/wechat/home/insertWxUserInfo', 'wechat.home.insertWxUserInfo');
  app.get('/wechat/home/getAlbumList', 'wechat.home.getAlbumList');
  // *************   todolist       **************
  app.get('/todoController/index/getList', 'todoController.index.getList');
  app.post('/todoController/index/addTodo', 'todoController.index.addTodo');
  app.post('/todoController/index/deleteTodo', 'todoController.index.deleteTodo');
  // *************   golf       **************
  app.get('/version1/project/index', 'version1.project.index');
  app.get('/version1/project/courtinfo', 'version1.project.courtinfo');
};
