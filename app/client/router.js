const realPath = paths => {
  const length = paths.length;
  // 只有一层时，直接指向 container 的文件路径
  if (length === 1) {
    const containerPath = paths[0];
    return `pages/${containerPath}/${containerPath}`;
  } else if (length === 2) {
    // 有两层时，页面由 container + component 组成
    const containerPath = paths[0];
    const componentPath = paths[1];
    return `pages/${containerPath}/views/${componentPath}/${componentPath}`;
  }
};
/**
 * 封装通用的 vue-router 组件异步按需加载的方法
 * 只有当 前端路由 匹配了才会加载对应路由下组件依赖的静态资源
 * @param {array}  paths   对应组件的文件目录路径
 */
const resolve = paths => {
  return resolve => {
    // webpack 2可以通过 import 实现动态表达式加载，很强大
    import(`./${realPath(paths)}.vue`).then(function(module) {
      resolve(module);
    }).catch(function(err) {
      console.log(`Failed to load module [${paths}]`, err);
    });
  };
};


export default [
  { path: '/', component: resolve(['login']) },
  { path: '/dashboard',
    redirect: '/dashboard/home',
    component: resolve(['dashboard']),
    children: [
      {
        // 个人资料
        path: 'home',
        component: resolve(['dashboard', 'home']),
      },
      // 查看月工资
      {
        path: 'salary-basic',
        component: resolve(['dashboard', 'salary-basic']),
      },
      // 查看年终奖
      {
        path: 'salary-bonus',
        component: resolve(['dashboard', 'salary-bonus']),
      },
      // 查看部门工资
      {
        path: 'salary-dep',
        component: resolve(['dashboard', 'salary-dep']),
      },
      // 查看公司工资
      {
        path: 'salary-company',
        component: resolve(['dashboard', 'salary-company']),
      },
      // 设置工种工资
      {
        path: 'salary-set',
        component: resolve(['dashboard', 'salary-set']),
      },
      // 增加考勤
      {
        path: 'add-attendance',
        component: resolve(['dashboard', 'add-attendance']),
      },
      // 查询考勤
      {
        path: 'query-attendance',
        component: resolve(['dashboard', 'query-attendance']),
      },
    ],
  },
];
