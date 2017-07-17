const path = require('path');
const rootJoin = path.join.bind(process.cwd());
const paths = {
  runDir: rootJoin('private', 'run'),
  logDir: rootJoin('private', 'log'),
};
module.exports = config => {
  return {
    logger: {
      dir: paths.logDir, // 日志存储目录
      rotateLogDirs: [paths.logDir], // 自动按日切割目录
      appLogName: 'app-log.log',
    },
    keys: 'a447c9dfd62911a79ee2fa070a9b4c17ce386869c3178cd8a3bc76a1f841472630883c864279b501341715b842ff7e65c2e4bf3ac7f894a02ebabd4056a4fc74a70e1fbb69b0114a92404e834feb992a924ae1dcbea0d415',
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    },
    news: {
      pageSize: 5,
      serverUrl: 'https://hacker-news.firebaseio.com/v0',
    },
    middleware: [
      'loginVerify',
    ],
    // 网站安全设置
    security: {
      // 关闭csrf防范，**NOTICE** 有一定安全风险
      csrf: {
        enable: false,
      },
    },
  };
};



