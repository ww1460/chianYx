<template>
  <div class="index">
    <div class="backgrond common_backgroundImg">
      <div class="header">
        <div class="header_box common_content">
          <div class="header_left">{{title}}</div>
          <div class="header_right">
            <div v-if="logonStatus">
              <span @click="login">登录</span>
              <span>|</span>
              <span @click="register">注册</span>
            </div>
            <div v-if="userStatus">
              <p>
                <span>
                  <i class="el-icon-user-solid"></i>
                  {{userInfo.mobile}}
                </span>
                <span></span>
                <span>
                  <i class="el-icon-s-comment"></i>
                  消息 (
                  <a
                    style="color:#F56C6C;position: relative;left: -2px;top: 1px;"
                  >{{userInfo.userId}}</a>)
                </span>
                <span @click="out()">退出</span>
              </p>
            </div>
            <p v-if="loginStatus">
              <span></span>
              <span style="display:inline-block;">我已经有账户,现在就</span>
              <router-link to="/signin">
                <a style="display:inline-block;color:#ea0000;">登录</a>
              </router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="banner common_content">
        <div class="banner_photo"></div>
        <div class="banner_logo"></div>
        <div class="banner_ball"></div>
        <div class="people"></div>
      </div>
      <navigation />
    </div>
    <div class="content">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
    <div class="foot">
      <foot :content="this.$route.meta.bottomFlag" />
    </div>
  </div>
</template>

<script>
import navigation from "@/views/admin/components/navigation.vue";
import foot from "@/views/admin/components/foot.vue";
import { mapGetters } from "vuex";
import { getStore } from "@/util/store";

export default {
  components: {
    navigation,
    foot
  },
  computed: {
    ...mapGetters(["userInfo", "userToken"])
  },
  data() {
    return {
      title: "欢迎来到羽毛球运动水平等级评定!",
      logonStatus: true,
      userStatus: false,
      loginStatus: false
    };
  },
  watch: {
    userToken(val) {
      if (!val) {
        this.logonStatus = true;
        this.userStatus = false;
        this.loginStatus = false;
      }
    }
  },
  created() {
    this.$store.commit("SET_USERIFNO", getStore({ name: "userInfo" }));
    this.$store.commit("SET_USERTOKEN", getStore({ name: "userToken" }));
    this.$store.commit("SET_USERROLE", getStore({ name: "userRole" }));
    this.$store.commit("SET_PERSONALINFO", getStore({ name: "personalInfo" }));
    if (this.userToken) {
      this.logonStatus = false;
      this.userStatus = true;
      this.loginStatus = false;
    } else {
      this.logonStatus = true;
      this.userStatus = false;
      this.loginStatus = false;
    }
  },
  methods: {
    login() {
      this.logonStatus = false;
      this.userStatus = false;
      this.loginStatus = false;
      this.$router.push({ path: "/signin" });
    },
    register() {
      this.$router.push({ path: "/register" });
      this.logonStatus = false;
      this.userStatus = false;
      this.loginStatus = true;
    },
    out() {
      this.$store.dispatch("loginOut");
      this.$router.push({ path: "/index" });
    }
  }
};
</script>

<style lang="less" scoped>
.index {
  .backgrond {
    /* 背景1 4 */
    width: 100%;
    // height: 400px;
    background-image: url(/image/index/group.png);
    .header {
      /* Rectangle 137 */
      width: 100%;
      height: 42px;
      line-height: 42px;
      left: 0px;
      top: 0px;
      background: rgba(244, 244, 244, 0.85);
      .header_box {
        display: flex;
        justify-content: space-between;
        .header_left {
          font-family: Source Han Sans CN;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          color: #000000;
        }
        .header_right {
          span:nth-child(odd) {
            cursor: pointer;
          }
          span:nth-child(odd):hover {
            opacity: 0.5;
          }
          span:nth-child(even) {
            padding: 0px 10px;
          }
        }
      }
    }
    .banner {
      height: 200px;
      position: relative;
      .banner_photo {
        position: absolute;
        width: 460px;
        height: 200px;
        top: 0px;
        left: 0px;
        background: url(/image/index/headPhoto.png);
        background-size: cover;
        background-repeat: no-repeat;
      }
      .banner_logo {
        /* logo 1 */
        position: absolute;
        width: 600px;
        height: 100px;
        left: 35%;
        top: 50px;
        margin-left: -150px;
        background: url(/image/index/logo.png);
        // background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      .banner_ball {
        /* 羽毛球 1 */
        position: absolute;
        width: 90px;
        height: 90px;
        right: 50%;
        top: 52px;
        margin-right: -257px;
        background: url(/image/index/Badminton.png);
        transform: rotate(21.35deg);
        background-size: cover;
      }
      .people {
        /* 那羽毛球拍的人 1 */
        position: absolute;
        width: 212px;
        height: 237px;
        right: 0px;
        top: 0px;
        background: url(/image/index/people.png);
        background-size: cover;
        background-repeat: no-repeat;
        transform: matrix(-1, 0, 0, 1, 0, 0);
      }
    }
    width: 100%;
    .content {
      position: relative;
    }
  }
}
</style>