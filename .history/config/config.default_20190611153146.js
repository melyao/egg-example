'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.view = {
    mapping: {
      '.ejs': 'ejs',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523505754786_9223';

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'test_database',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your config here
  config.middleware = [];
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
  };
  config.security = {
    csrf: {
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    methodnoallow: {
      enable: false,
    },
  };
  exports.cluster = {
    // listen: {
    //   port: 80,
    //   hostname: '0.0.0.0',
    //   // path: '/var/run/egg.sock',
    // },
  };
  config.wechat = {
    appid: 'wx5805a527a516bf1d',
    appsecret: '22b1e82c81119ad8716f0973275c0520',
    token: 'csccsccsc',
    encodingAESKey: '',
    pay: {
      partnerKey: '',
      mchId: '',
      notifyUrl: '',
      pfx: '',
    },
  };
  return config;
};
