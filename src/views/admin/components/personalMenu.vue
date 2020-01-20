<template>
  <div class="personalmenu">
    <div class="title">
      <img src="/image/personal/head_portrait.jpg" />
      <p>{{ name }}</p>
      <span>{{ level }}</span>
    </div>
    <div class="operate">
      <div class="operate-t">
        <img src="/image/personal/icon.png" />
        <label>{{ title }}</label>
      </div>
      <!-- 根据角色判断需要显示路由 -->
      <ul class="operate-b">
        <template
          v-for="(item,index) in (role==1?dataList:role==2?dataList1:role==3?dataList2:dataList3)"
        >
          <router-link :to="item.path" :key="index">
            <li :class="item.path == navPath ?'light':''">
              <!-- :to="personalInfo || item.name == '修改密码'?item.path:'/personal/completeInformation'" -->
              <img :src="item.src" />
              <label @click="select()">{{item.name}}</label>
            </li>
          </router-link>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["role"],
  computed: {
    ...mapGetters(["personalInfo"])
  },
  data() {
    return {
      menurole: "",
      title: "",
      name: "lucky",
      level: "一级运动员",
      // 运动员
      dataList: [
        {
          path: "/personal/gradeTestRecord",
          name: "等级测试记录",
          src: "/image/personal/icon2.png"
        },
        {
          path: "/personal/competitionApplication",
          name: "赛事申请",
          src: "/image/personal/icon3.png"
        },
        {
          path: "/personal/competitionApplicationRecord",
          name: "赛事申请记录",
          src: "/image/personal/icon4.png"
        },
        {
          path: "/personal/gradeCertificate",
          name: "等级证书",
          src: "/image/personal/icon5.png"
        },
        {
          path: "/personal/invoiceList",
          name: "发票",
          src: "/image/personal/icon6.png"
        },
        {
          path: "/personal/completeInformation",
          name: "基本信息",
          src: "/image/personal/icon2.png"
        },
        {
          path: "/personal/changePassword",
          name: "修改密码",
          src: "/image/personal/icon7.png"
        }
      ],
      // 考评员
      dataList1: [
        {
          path: "/personal/trainingRecord",
          name: "培训记录",
          src: "/image/personal/icon2.png"
        },
        {
          path: "/personal/workRecord",
          name: "工作记录",
          src: "/image/personal/icon3.png"
        },
        {
          path: "/personal/gradeCertificate",
          name: "等级证书",
          src: "/image/personal/icon4.png"
        },
        {
          path: "/personal/invoiceList",
          name: "发票",
          src: "/image/personal/icon6.png"
        },
        {
          path: "/personal/payRecord",
          name: "缴费记录",
          src: "/image/personal/icon2.png"
        },
        {
          path: "/personal/completeInformation",
          name: "基本信息",
          src: "/image/personal/icon2.png"
        },
        {
          path: "/personal/changePassword",
          name: "修改密码",
          src: "/image/personal/icon7.png"
        }
      ],
      // 测试机构
      dataList2: [
        {
          path: "/personal/qualificationApplication",
          name: "资质申请",
          src: "/image/personal/icon2.png"
        },
        {
          path: "/personal/testList",
          name: "测试列表",
          src: "/image/personal/icon3.png"
        },
        {
          path: "/personal/complaintHandling",
          name: "申诉处理",
          src: "/image/personal/icon4.png"
        },
        {
          path: "/personal/orderCenter",
          name: "订单中心",
          src: "/image/personal/icon3.png"
        },
        {
          path: "/personal/pliceApplication",
          name: "考点申请",
          src: "/image/personal/icon5.png"
        },
        {
          path: "/personal/completeInformation",
          name: "基本信息",
          src: "/image/personal/icon2.png"
        },
        {
          path: "/personal/changePassword",
          name: "修改密码",
          src: "/image/personal/icon7.png"
        }
      ],
      dataList3: [],
      navPath: ""
    };
  },
  watch: {
    $route() {
      this.checkRouterLocal();
    }
  },
  created() {
    this.checkRouterLocal();
    //判断进入的角色
    this.menurole = this.role;
    if (this.menurole == 1 || this.menurole == 2) {
      this.title = "个人中心";
    } else if (this.menurole == 3) {
      this.title = "机构主页";
    }
  },
  methods: {
    // 检索当前路径
    checkRouterLocal() {
      // 查找当前路由下标高亮
      window.console.log(this.$route);
      this.navPath = this.$route.fullPath;
    },
    select() {
      if (!this.personalInfo) {
        this.$message({
          showClose: true,
          message: "请完善您的个人信息",
          type: "warning"
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.personalmenu {
  .title {
    position: relative;
    background: #f3fafd;
    text-align: center;
    padding: 15px 0;
    margin-bottom: 20px;
    span {
      position: absolute;
      bottom: 42px;
      right: 0;
      display: block;
      background: #ffffff;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
  .operate {
    .operate-t {
      position: relative;
      background: #f3fafd;
      text-align: center;
      padding: 28px 0;
      img {
        position: absolute;
        left: 54px;
        top: 16px;
        width: 20px;
        height: 20.7px;
      }
      label {
        position: absolute;
        left: 81px;
        top: 16px;
        font-weight: bold;
        color: #0058a1;
      }
    }
    .operate-b {
      background: #cde8fe;
      padding: 10px 0;
      text-align: center;
      li {
        position: relative;
        padding: 17px;
        background: #cde8fe;
        img {
          position: absolute;
          top: 8px;
          left: 39px;
          width: 14px;
          height: 18px;
        }
        label {
          position: absolute;
          top: 8px;
          left: 60px;
          color: #000;
          font-size: 14px;
        }
      }
      .light {
        background: #8dc3ff;
      }
    }
  }
}
</style>
