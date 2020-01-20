<template>
  <div class="navigation common_content">
    <div class="nav">
      <button type="button" class="navbar" @click="changeNav" v-show="navShow">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <ul class="nav_ul" v-show="navShow2">
        <li
          class="nav_li"
          v-for="(item, index) in list"
          :key="index"
          @click="select(item, index)"
        >
          <router-link :to="item.path">
            <div>{{ item.name }}</div>
            <div v-if="navName == item.path">
              <img src="/image/index/whiteBadminton.png" alt />
              <div class="sj"></div>
            </div>
          </router-link>
        </li>
      </ul>
      <ul class="nav_ul2" v-show="navShow3">
        <li
          class="nav_li2"
          v-for="(item, index) in list"
          :key="index"
          @click="select2(item, index)"
        >
          <router-link :to="item.path">
            <div>{{ item.name }}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="crumbs" v-if="this.$route.meta.crumbsFlag">
      <div class="crumbs_left"></div>
      <div class="crumbs_right">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            :to="item.path"
            v-for="(item, index) in realList"
            :key="index"
            >{{ item.title }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { setStore, getStore } from "@/util/store";
export default {
  name: "",
  data() {
    return {
      list: [
        { path: "/index", name: "首页" },
        { path: "/news", name: "新闻动态" },
        { path: "/notice", name: "通知公告" },
        { path: "/test", name: "测试报名" },
        { path: "/evaluationStaff", name: "考评员" },
        { path: "/testInstitutions", name: "测试机构" },
        { path: "/personal", name: "个人中心" },
        { path: "/enquiry", name: "公开查询" }
      ],
      navShow: false,
      navShow2: true,
      navShow3: false,
      screenWidth: document.body.clientWidth,
      timer: true,
      realList: [],
      navName: ""
    };
  },
  computed: {
    ...mapGetters(["routeList"])
  },
  watch: {
    $route() {
      this.checkRouterLocal();
      this.realList = this.routeList;
    },
    routeList(val) {
      // 将面包屑所处的位置存储
      this.realList = val;
      setStore({
        name: "oldrouteList",
        content: val,
        type: "session"
      });
    },
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          that.timer = false;
        }, 400);
      }
    }
  },
  created() {
    // 路径高亮
    this.checkRouterLocal();
    this.realList = this.routeList;
    // 刷新页面需要将localstore中存储的面包屑重新赋值
    let crumbList = getStore({ name: "oldrouteList" });
    if (crumbList) {
      this.$store.commit("SET_ROUTELIST", crumbList);
    }
    if (this.screenWidth <= 768) {
      this.navShow = true;
      this.navShow2 = false;
    }
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  methods: {
    select() {
      // 导航切换需要清空面包屑
      this.$store.commit("SET_ROUTELIST", [
        // {
        //   title: "首页",
        //   path: "/index"
        // },
        {
          title: this.$route.meta.title,
          path: this.$route.fullPath
        }
      ]);
    },
    select2() {
      this.select();
      this.navShow3 = !this.navShow3;
    },
    // 检索当前路径
    checkRouterLocal() {
      // 查找当前路由下标高亮
      this.navName = "/" + this.$route.meta.lightFlag;
    },
    //手机端导航变换
    changeNav() {
      this.navShow3 = !this.navShow3;
    }
  }
};
</script>

<style lang="less">
.navigation {
  .nav {
    font-size: 16px;
    background: #ea0000 url(/image/index/grid.png);
    overflow: hidden;
    .navbar {
      //display: none;
      position: relative;
      float: right;
      padding: 9px 10px;
      margin-top: 8px;
      margin-right: 15px;
      margin-bottom: 8px;
      background-color: transparent;
      background-image: none;
      border: 1px solid #ddd;
      border-radius: 4px;
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
      .icon-bar {
        display: block;
        width: 22px;
        height: 2px;
        border-radius: 1px;
        background-color: #888;
      }
      .icon-bar + .icon-bar {
        margin-top: 4px;
      }
    }
    .nav_ul {
      width: 85%;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      .nav_li {
        margin: 10px 20px;
        position: relative;
        a {
          color: #ffffff;
        }
        img {
          width: 20px;
          position: absolute;
          right: -30px;
          top: -25%;
        }
        .sj {
          position: absolute;
          width: 15px;
          height: 15px;
          bottom: -19px;
          left: 50%;
          margin-left: -8px;
          background: #ffffff;
          border-radius: 0.25px;
          transform: rotate(46.35deg);
          transition: all 0.3s;
        }
      }
    }
    .nav_ul2 {
      .nav_li2 {
        margin: 10px 20px;
        a {
          color: #ffffff;
        }
      }
    }
  }
  .crumbs {
    width: 100%;
    height: 40px;
    margin: 20px 0px;
    display: flex;
    background: linear-gradient(90deg, #e6e6e6 0%, #ffffff 130%);
    .crumbs_left {
      width: 1%;
      background: #ea0000;
      height: 40px;
    }
    .crumbs_right {
      line-height: 40px;
    }
    .el-breadcrumb {
      line-height: 40px;
      padding: 0px 10px;
    }
    .el-breadcrumb__item:last-child .el-breadcrumb__inner,
    .el-breadcrumb__item:last-child .el-breadcrumb__inner a,
    .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
    .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
      font-weight: 400;
      color: #ea0000;
      cursor: text;
    }
  }
  @media only screen and (max-width: 768px) {
    .nav {
      background: none;
      .nav_ul2 {
        padding: 5px 0;
        margin-top: 45px;
        background: #ea0000 url(/image/index/grid.png);
      }
    }

    /*.nav{*/
    /*#navbar{*/
    /*display: block;*/
    /*}*/
    /*.nav_ul{*/
    /*display: none;*/
    /*}*/
    /*}*/
  }
}
</style>
