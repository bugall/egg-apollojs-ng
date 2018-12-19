'use strict';

module.exports = {
  configServerUrl: 'http://dev-config.videojj.com',
  appId: 'huobao-app-backend', // 配置中心命名和项目名称保持一致,
  clusterName: 'default',
  namespaceName: [ 'huobao-app-backend.json' ], // 两个namespace相同配置，application配置会覆盖'python.mysql'
};
