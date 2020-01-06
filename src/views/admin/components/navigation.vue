<template>
  <div class="navigation common_content">
    <div class="nav">
      <ul class="nav_ul">
        <li class="nav_li" v-for="(item,index) in list" :key="index" @click="select(item,index)">
          <router-link :to="item.path">
            <div>{{item.name}}</div>
            <div v-if="navName == item.path">
              <img src="/image/index/whiteBadminton.png" alt />
              <div class="sj"></div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="crumbs" v-if="navIndex">
      <div class="crumbs_left"></div>
      <div class="crumbs_right">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            :to="item.path"
            v-for="(item,index) in realList"
            :key="index"
          >{{item.title}}</el-breadcrumb-item>
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
        { path: "/", name: "通知公告" },
        { path: "/test", name: "测试报名" },
        { path: "/", name: "考评员" },
        { path: "/", name: "测试机构" },
        { path: "/", name: "个人中心" },
        { path: "/", name: "公开查询" }
      ],
      navIndex: "",
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
    }
  },
  created() {
    // 路径高亮
    this.checkRouterLocal();
    this.realList = this.routeList;
    // 刷新页面需要将localstore中存储的面包屑重新赋值
    this.$store.commit("SET_ROUTELIST", getStore({ name: "oldrouteList" }));
  },
  methods: {
    select(item, index) {
      this.navIndex = index;
      // 导航切换需要清空面包屑
      this.$store.commit("SET_ROUTELIST", [
        {
          title: "首页",
          path: "/index"
        },
        {
          title: this.$route.meta.title,
          path: this.$route.fullPath
        }
      ]);
    },
    // 检索当前路径
    checkRouterLocal() {
      // 获取当前路径
      let path = this.$route.path;
      // 查找当前路由下标高亮
      this.navIndex = this.list.findIndex(item => item.path === path);
      // 查找当前路由下标高亮
      this.navName = "/" + this.$route.meta.lightFlag;
    }
  }
};
</script>

<style lang="less">
.navigation {
  .nav {
    font-size: 16px;
    background: #ea0000;
    background-image: url(/image/index/grid.png);
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
}
</style>