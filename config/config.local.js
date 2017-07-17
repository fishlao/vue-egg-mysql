module.exports = config => {
  return {
    mysql: {
        // 单数据库信息配置
      client: {
        // host
        host: '112.74.85.212',
        // 端口号
        port: '3306',
        // 用户名
        user: '',
        // 密码
        password: '',
        // 数据库名
        database: 'salary',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
  };
};
