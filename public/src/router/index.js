import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store';
import login from '@/views/admin/login';
import index from '@/views/admin/home';
import news from '@/views/admin/news';
import test from '@/views/admin/test';
import signUp from '@/views/admin/test/content/signUp';
import evaluationStaff from '@/views/admin/evaluationStaff/index';
import evaluationList from '@/views/admin/evaluationStaff/content/evaluationList';
import evaluationListDetail from '@/views/admin/evaluationStaff/content/evaluationListDetail';
import evaluationStaffSignUp from '@/views/admin/evaluationStaff/content/signUp';
import testInstitutions from '@/views/admin/testInstitutions/index';
import testInstitutionsDetail from '@/views/admin/testInstitutions/content/testInstitutionsDetail';
import register from '@/views/admin/register';
import signin from '@/views/admin/login/signin';
Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin,
      meta: {
        title: "登录",
        keepAlive: false,
        lightFlag: "signin",
        crumbsFlag: false,
        bottomFlag: false,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: "主页",
        keepAlive: true,
        lightFlag: "login",
        crumbsFlag: false,
        bottomFlag: true,
      },
      children: [{
          path: '/index',
          name: 'index',
          component: index,
          meta: {
            title: "首页",
            keepAlive: true, //控制页面缓存参数
            lightFlag: "index", //判断/name导航高亮,
            crumbsFlag: false, //是否显示面包屑
            bottomFlag: true, //是否显示底部二维码
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
            crumbsFlag: true,
            bottomFlag: true,
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
            crumbsFlag: true,
            bottomFlag: true,
          }
        }, {
          path: '/test/signUp',
          name: 'signUp',
          component: signUp,
          meta: {
            title: "报名信息",
            keepAlive: false,
            lightFlag: "test",
            crumbsFlag: true,
            bottomFlag: true,
          },
        },
        {
          path: '/test/signUp/cpi',
          name: 'signUp',
          component: signUp,
          meta: {
            title: "确认支付信息",
            keepAlive: false,
            lightFlag: "test",
            crumbsFlag: true,
            bottomFlag: true,
          },
        },
        // 考评员培训
        {
          path: '/evaluationStaff',
          name: '考评员培训',
          component: evaluationStaff,
          meta: {
            title: "考评员培训",
            keepAlive: true,
            lightFlag: "evaluationStaff",
            crumbsFlag: true,
            bottomFlag: true,
          }
        },
        {
          path: '/evaluationStaff/signUp',
          name: '考评员报名信息',
          component: evaluationStaffSignUp,
          meta: {
            title: "考评员报名信息",
            keepAlive: true,
            lightFlag: "evaluationStaff",
            crumbsFlag: true,
            bottomFlag: true,
          }
        },
        {
          path: '/evaluationList',
          name: '考评员列表',
          component: evaluationList,
          meta: {
            title: "考评员列表",
            keepAlive: true,
            lightFlag: "evaluationStaff",
            crumbsFlag: true,
            bottomFlag: true,
          }
        },
        {
          path: '/evaluationList/evaluationListDetail',
          name: '考评员详情',
          component: evaluationListDetail,
          meta: {
            title: "考评员详情",
            keepAlive: true,
            lightFlag: "evaluationStaff",
            crumbsFlag: true,
            bottomFlag: true,
          }
        },
        //测试机构
        {
          path: '/testInstitutions',
          name: '测试机构',
          component: testInstitutions,
          meta: {
            title: "测试机构",
            keepAlive: true,
            lightFlag: "testInstitutions",
            crumbsFlag: true,
            bottomFlag: true,
          }
        },
        {
          path: '/testInstitutions/testInstitutionsDetail',
          name: '测试机构详情',
          component: testInstitutionsDetail,
          meta: {
            title: "测试机构详情",
            keepAlive: true,
            lightFlag: "testInstitutions",
            crumbsFlag: true,
            bottomFlag: true,
          }
        },
        {
          path: '/register',
          name: 'register',
          component: register,
          meta: {
            title: "注册",
            keepAlive: false,
            lightFlag: "register",
            crumbsFlag: false,
            bottomFlag: false,
          },
        },
      ],

    },

  ],
  // 滚动条至顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  var route = store.getters.routeList
  var index = -1;
  for (var i = 0; i < route.length; i++) {
    if (store.getters.routeList[i].title == to.meta.title) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    //如果存在路由列表，则把之后的路由都删掉
    route.splice(index + 1, route.length - index - 1);
  } else if (to.meta.title != '登录') {
    route.push({
      "title": to.meta.title,
      "path": to.fullPath
    });
  }
  store.commit("SET_ROUTELIST", route)
  next()
});


export default router;