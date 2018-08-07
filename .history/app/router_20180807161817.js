'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.get('/wechat/home/index', 'wechat.home.index');
  app.get('/wechat/home/list', 'wechat.home.list');
  app.get('/wechat/home/home', 'wechat.home.home');
  app.get('/wechat/home/other', 'wechat.home.other');
  app.get('/todoController/index/getList', 'todoController.index.getList');
  app.post('/todoController/index/addTodo', 'todoController.index.addTodo');
  app.post('/todoController/index/deleteTodo', 'todoController.index.deleteTodo');
};
