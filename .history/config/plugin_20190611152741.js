'use strict';

// had enabled by egg
// exports.static = true;
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
exports.nunjucks = {
  enable: true,
  package: 'egg-view-ejs',
};
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
exports.wechat = {
  enable: true,
  package: 'egg-wechat',
};
