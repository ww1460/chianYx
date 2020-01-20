import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store';

import login from '@/views/admin/login';
import index from '@/views/admin/home';
import news from '@/views/admin/news';
import newsDetails from '@/views/admin/news/details';
import notice from '@/views/admin/notice';
import noticeDetails from '@/views/admin/notice/details';
import test from '@/views/admin/test';
import enquiry from '@/views/admin/enquiry';
import signUp from '@/views/admin/test/content/signUp';
import evaluationStaff from '@/views/admin/evaluationStaff/index';
import evaluationList from '@/views/admin/evaluationStaff/content/evaluationList';
import evaluationListDetail from '@/views/admin/evaluationStaff/content/evaluationListDetail';
import evaluationStaffSignUp from '@/views/admin/evaluationStaff/content/signUp';
import testInstitutions from '@/views/admin/testInstitutions/index';
import testInstitutionsDetail from '@/views/admin/testInstitutions/content/testInstitutionsDetail';

import personal from '@/views/admin/personal/index';
// 运动员
import gradeTestRecord from '@/views/admin/personal/athletes/gradeTestRecord';
import competitionApplication from '@/views/admin/personal/athletes/competitionApplication';
import competitionApplicationRecord from '@/views/admin/personal/athletes/competitionApplicationRecord';
import gradeCertificate from '@/views/admin/personal/athletes/gradeCertificate';
import gradeCertificateDelivery from "@/views/admin/personal/athletes/gradeCertificateDelivery";
import invoice from '@/views/admin/personal/athletes/invoice';
import invoiceList from '@/views/admin/personal/athletes/invoiceList';
import completeInformation from '@/views/admin/components/completeInformation';
import changePassword from '@/views/admin/components/changePassword';
//考评员
import trainingRecord from '@/views/admin/personal/evaluationStaff/trainingRecord';
import workRecord from '@/views/admin/personal/evaluationStaff/workRecord';
import payRecord from '@/views/admin/personal/evaluationStaff/payRecord';
// 测试机构
import qualificationApplication from '@/views/admin/personal/testingInstitutions/qualificationApplication';
import testApplication from '@/views/admin/personal/testingInstitutions/testApplication';
import testList from '@/views/admin/personal/testingInstitutions/testList';
import viewEntry from '@/views/admin/personal/testingInstitutions/viewEntry';
import testScheduling from '@/views/admin/personal/testingInstitutions/testScheduling';
import complaintHandling from '@/views/admin/personal/testingInstitutions/complaintHandling';
import pliceApplication from '@/views/admin/personal/testingInstitutions/pliceApplication';
import addApplication from '@/views/admin/personal/testingInstitutions/addApplication';
import videoRecording from '@/views/admin/personal/testingInstitutions/videoRecording';
import orderCenter from '@/views/admin/personal/testingInstitutions/orderCenter';


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
            crumbsFlag: false,
            bottomFlag: true,
          }
        },
        // 新闻详情
        {
          path: '/news/newsDetails',
          name: 'newsDetails',
          component: newsDetails,
          meta: {
            title: "新闻详情",
            keepAlive: true,
            lightFlag: "news",
            crumbsFlag: true,
            bottomFlag: true,
          }
        },
        // 通知公告
        {
          path: '/notice',
          name: 'notice',
          component: notice,
          meta: {
            title: "通知公告",
            keepAlive: true,
            lightFlag: "notice",
            crumbsFlag: false,
            bottomFlag: true,
          }
        },
        // 通知公告详情
        {
          path: '/notice/noticeDetails',
          name: 'noticeDetails',
          component: noticeDetails,
          meta: {
            title: "通知公告详情",
            keepAlive: true,
            lightFlag: "notice",
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
        // 注册
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
        // 公开查询
        {
          path: '/enquiry',
          name: 'enquiry',
          component: enquiry,
          meta: {
            title: "公开查询",
            keepAlive: false,
            lightFlag: "enquiry",
            crumbsFlag: false,
            bottomFlag: false,
          },
        },
        //个人中心 
        {
          path: '/personal',
          name: 'personal',
          component: personal,
          // 根据角色判断进入个人中心时重定向页面
          redirect: () => {
            // 判断登录信息是否完善
            if (!store.state.user.personalInfo && store.state.user.userRole) return '/personal/completeInformation'
            switch (store.state.user.userRole) {
              case "1":
                return '/personal/gradeTestRecord'

              case "2":
                return '/personal/trainingRecord'

              case "3":
                return '/personal/qualificationApplication'
              default:
                return '/signin'
            }
          },
          meta: {
            title: "个人中心",
            keepAlive: false,
            lightFlag: "personal",
            crumbsFlag: true,
            bottomFlag: true,
          },
          children: [
            // 运动员角色
            {
              path: '/personal/gradeTestRecord',
              name: 'gradeTestRecord',
              component: gradeTestRecord,
              meta: {
                title: "等级测试记录",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
                type: 1,
              },
            },
            {
              path: '/personal/competitionApplication',
              name: 'competitionApplication',
              component: competitionApplication,
              meta: {
                title: "赛事申请",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
                type: 1,
              },
            },
            {
              path: '/personal/competitionApplicationRecord',
              name: 'competitionApplicationRecord',
              component: competitionApplicationRecord,
              meta: {
                title: "赛事申请记录",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
                type: 1,
              },
            },
            {
              path: '/personal/gradeCertificate',
              name: 'gradeCertificate',
              component: gradeCertificate,
              meta: {
                title: "等级证书",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
              },
            },
            {
              path: "/personal/gradeCertificateDelivery",
              name: "gradeCertificateDelivery",
              component: gradeCertificateDelivery,
              meta: {
                title: "申请等级证书",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
                type: 1,
              }
            },
            {
              path: '/personal/invoiceList',
              name: 'invoiceList',
              component: invoiceList,
              meta: {
                title: "发票",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
              },
            },
            {
              path: '/personal/invoice',
              name: 'invoice',
              component: invoice,
              meta: {
                title: "发票详情",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
              },
            },

            {
              path: '/personal/completeInformation',
              name: 'completeInformation',
              component: completeInformation,
              meta: {
                title: "完善信息",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
              },
            },
            {
              path: '/personal/changePassword',
              name: 'changePassword',
              component: changePassword,
              meta: {
                title: "修改密码",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
              },
            },

            // 考评员
            {
              path: '/personal/trainingRecord',
              name: 'trainingRecord',
              component: trainingRecord,
              meta: {
                title: "培训记录",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
                type: 2,
              },
            },
            // 考评员
            {
              path: '/personal/payRecord',
              name: 'payRecord',
              component: payRecord,
              meta: {
                title: "培训记录",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
                type: 2,
              },
            },
            {
              path: '/personal/workRecord',
              name: 'workRecord',
              component: workRecord,
              meta: {
                title: "工作记录",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
                type: 2,
              },
            },

            // 测试机构
            {
              path: '/personal/qualificationApplication',
              name: 'qualificationApplication',
              component: qualificationApplication,
              meta: {
                title: "资质申请",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
                type: 3,
              },
            },
            // 测试申请
            {
              path: '/personal/testApplication',
              name: 'testApplication',
              component: testApplication,
              meta: {
                title: "测试申请",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
              }
            },
            // 测试列表
            {
              path: '/personal/testList',
              name: 'testList',
              component: testList,
              meta: {
                title: "测试列表",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
                type: 3,
              }
            },
            {
              path: '/personal/testList/viewEntry',
              name: 'viewEntry',
              component: viewEntry,
              meta: {
                title: "查看录入",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
              }
            },
            {
              path: '/personal/testList/viewEntry/testScheduling',
              name: 'testScheduling',
              component: testScheduling,
              meta: {
                title: "查看录入",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
              }
            },
            // 申诉处理
            {
              path: '/personal/complaintHandling',
              name: 'complaintHandling',
              component: complaintHandling,
              meta: {
                title: "申诉处理",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
                type: 3,
              }
            },
            // 订单中心
            {
              path: '/personal/orderCenter',
              name: 'orderCenter',
              component: orderCenter,
              meta: {
                title: "订单中心",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
                type: 3,
              }
            },
            // 考点申请
            {
              path: '/personal/pliceApplication',
              name: 'pliceApplication',
              component: pliceApplication,
              meta: {
                title: "考点申请",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
                type: 3,
              }
            },
            // 新增申请
            {
              path: '/personal/addApplication',
              name: 'addApplication',
              component: addApplication,
              meta: {
                title: "新增申请",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
                type: 3,
              }
            },
            // 视频录像
            {
              path: '/personal/videoRecording',
              name: 'videoRecording',
              component: videoRecording,
              meta: {
                title: "视频录像",
                keepAlive: false,
                lightFlag: "personal",
                crumbsFlag: true,
                bottomFlag: true,
                type: 3,
              }
            }
          ]

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
  window.console.log(route)
  store.commit("SET_ROUTELIST", route)
  next()


  // window.console.log(to.matched)
  if (to.matched.some(record => record.meta.type)) {
    // 根据角色判断加载的路由
    if (to.matched.some(record => record.meta.type == store.state.user.userRole)) {
      next()
    } else {
      next({
        path: '/index'
      })
    }
  } else {
    next()
  }

});


export default router;