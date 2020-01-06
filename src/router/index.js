import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/admin/login';
import index from '@/views/admin/home/index';
import news from '@/views/admin/news/index';
import test from '@/views/admin/test/index';
import signUp from '@/views/admin/test/content/signUp';
import store from '@/store';
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
      name: 'login',
      component: login,
      meta: {
        title: "登录",
        keepAlive: true, //控制页面缓存参数
        lightFlag: "login",
      },
      children: [{
          path: '/index',
          name: 'index',
          component: index,
          meta: {
            title: "首页",
            keepAlive: true, //控制页面缓存参数
            lightFlag: "index", //导航高亮标识
          }
        },
        // 新闻动态
        {
          path: '/news',
          name: 'news',
          component: news,
          meta: {
            title: "新闻动态",
            keepAlive: true,
            lightFlag: "news",
          }
        },
        // 测试报名
        {
          path: '/test',
          name: 'test',
          component: test,
          meta: {
            title: "测试报名",
            keepAlive: true,
            lightFlag: "test",
          }
        }, {
          path: '/test/signUp',
          name: 'signUp',
          component: signUp,
          meta: {
            title: "报名",
            keepAlive: true,
            lightFlag: "test",
          }
        },
      ]
    },

  ]
})

router.beforeEach((to, from, next) => {
  var index = -1;
  for (var i = 0; i < store.getters.routeList.length; i++) {
    if (store.getters.routeList[i].title == to.meta.title) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    //如果存在路由列表，则把之后的路由都删掉
    store.getters.routeList.splice(index + 1, store.getters.routeList.length - index - 1);
  } else if (to.meta.title != '登录') {
    store.getters.routeList.push({
      "title": to.meta.title,
      "path": to.fullPath
    });
  }
  store.commit("SET_ROUTELIST", store.getters.routeList)
  next()
});
export default router;