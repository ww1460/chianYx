import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/admin/login';
import index from '@/views/admin/home/index';
import news from '@/views/admin/news/index';
import test from '@/views/admin/test/index';
import signUp from '@/views/admin/test/content/signUp';
// import {
//   getStore
// } from "@/util/store";

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: '登录',
      component: login,
      children: [{
          path: '/index',
          name: '首页',
          component: index
        },
        {
          path: '/news',
          name: '新闻动态',
          component: news
        },
        {
          path: '/test',
          name: '测试报名',
          component: test,
          children: [{
            path: '/test/signUp',
            name: '报名',
            component: signUp
          }]
        }
      ]
    },

  ]
})
// 导航守卫
//  使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {

//   // let token = getStore({
//   //   name: 'token'
//   // })
//   // window.console.log(token)
//   // requireAuth为true 必须做鉴权处理
//   if (to.matched.some(res => res.meta.requireAuth)) {
//     let token = getStore({
//       name: 'token'
//     })
//     if (token) {
//       // window.console.log(to.matched.some(res => res.meta.requireAuth))
//     } else {
//       next({
//         path: '/login',
//         query: {
//           redirect: to.path
//         }
//       })
//     }
//   } else {
//     next();
//   }
//   // if (to.path === '/login') {
//   //   next();
//   // } else {
//   //   let token = getStore({
//   //     name: 'token'
//   //   })
//   //   if (token) {
//   //     next();
//   //   } else {
//   //     next('/login');
//   //   }
//   // }
// });

var routeList = [{
  name: "首页",
  path: "/index"
}];
router.beforeEach((to, from, next) => {
  // 面包屑
  var index = -1;
  for (var i = 0; i < routeList.length; i++) {
    if (routeList[i].name == to.name) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    //如果存在路由列表，则把之后的路由都删掉
    routeList.splice(index + 1, routeList.length - index - 1);
  } else if (to.name != '登录') {
    routeList.push({
      "name": to.name,
      "path": to.path
    });
  }
  to.meta.routeList = routeList;
  next()
});
export default router;