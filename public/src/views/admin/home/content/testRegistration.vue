<template>
  <div class="testRegistration">
    <el-row :gutter="10">
      <el-col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="8"
        :xl="8"
        v-for="(item,index) in data"
        :key="index"
        style="margin-top:10px;"
      >
        <el-card shadow="always">
          <div slot="header" class="common_display">
            <p class="card_title common_display">
              <span>{{item.testTitle}}</span>
              <span style="color:#B94429">&rarr;</span>
            </p>
            <p class="signUp">报 名</p>
          </div>
          <div class="card_content">
            <ul>
              <li class="card_content_li">
                <span
                  class="icon common_backgroundImg"
                  :style="'background-image:url(' + iconList[0]  + ')'"
                ></span>
                {{item.province}} {{item.city}} {{item.area}}
              </li>
              <li class="card_content_li">
                <span
                  class="icon common_backgroundImg"
                  :style="'background-image:url(' + iconList[1]  + ')'"
                ></span>
                报名时间：{{item.registrationStartTime}} 至 {{item.registrationEndTime}}
              </li>
              <li class="card_content_li">
                <span
                  class="icon common_backgroundImg"
                  :style="'background-image:url(' + iconList[1]  + ')'"
                ></span>
                培训时间：{{item.trainingStartTime}} 至 {{item.trainingEndTime}}
              </li>
            </ul>
            <p class="line"></p>
            <p class="common_display card_bottom">
              <span class="card_bottom_left">{{item.testerGrade}}</span>
              <span>
                <el-button
                  size="mini"
                  style="color:#f56c6c;border: 0.5px solid #f56c6c;border-radius: 4px;"
                >详 情</el-button>
              </span>
            </p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      data: [
        {
          testTitle: "河南省羽毛球运动协会",
          province: "河南省",
          city: "郑州市",
          area: "惠景区",
          registrationStartTime: "2019-10-11",
          registrationEndTime: "2019-11-20",
          trainingStartTime: "2019-10-01",
          trainingEndTime: "2019-12-10",
          testerGrade: "少儿七级"
        },
        {
          testTitle: "河南省羽毛球运动协会",
          province: "河南省",
          city: "郑州市",
          area: "惠景区",
          registrationStartTime: "2019-10-11",
          registrationEndTime: "2019-11-20",
          trainingStartTime: "2019-10-01",
          trainingEndTime: "2019-12-10",
          testerGrade: "少儿七级"
        },
        {
          testTitle: "河南省羽毛球运动协会",
          province: "河南省",
          city: "郑州市",
          area: "惠景区",
          registrationStartTime: "2019-10-11",
          registrationEndTime: "2019-11-20",
          trainingStartTime: "2019-10-01",
          trainingEndTime: "2019-12-10",
          testerGrade: "少儿七级"
        },
        {
          testTitle: "河南省羽毛球运动协会",
          province: "河南省",
          city: "郑州市",
          area: "惠景区",
          registrationStartTime: "2019-10-11",
          registrationEndTime: "2019-11-20",
          trainingStartTime: "2019-10-01",
          trainingEndTime: "2019-12-10",
          testerGrade: "少儿七级"
        },
        {
          testTitle: "河南省羽毛球运动协会",
          province: "河南省",
          city: "郑州市",
          area: "惠景区",
          registrationStartTime: "2019-10-11",
          registrationEndTime: "2019-11-20",
          trainingStartTime: "2019-10-01",
          trainingEndTime: "2019-12-10",
          testerGrade: "少儿七级"
        },
        {
          testTitle: "河南省羽毛球运动协会",
          province: "河南省",
          city: "郑州市",
          area: "惠景区",
          registrationStartTime: "2019-10-11",
          registrationEndTime: "2019-11-20",
          trainingStartTime: "2019-10-01",
          trainingEndTime: "2019-12-10",
          testerGrade: "少儿七级"
        }
      ],
      iconList: ["/image/index/icon_place.png", "/image/index/icon_time.png"]
    };
  },

  mounted() {},
  methods: {}
};
</script>

<style lang="less">
.testRegistration {
  margin-top: 10px;
  .el-card__body {
    padding: 5px;
  }
  .el-card__header {
    padding: 0px;
    color: #ffffff;
    text-align: center;
    .card_title {
      width: 80%;
      background: linear-gradient(90deg, #ca6161 0%, #ffffff 130%);
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
      padding: 8px 15px;
      span {
        display: block;
      }
      span + span {
        cursor: pointer;
      }
    }
    .signUp {
      width: 20%;
      background: #b94429;
      padding: 8px 15px;
      cursor: pointer;
    }
  }
  .card_content {
    padding: 5px 10px;
    .icon {
      display: inline-block;
      width: 20px;
      height: 20px;
      position: relative;
      top: 4px;
    }
    .card_content_li,
    .card_bottom {
      margin: 10px 0px;
    }
    .line {
      border: 1px solid #c4c4c4;
    }
    .card_bottom_left {
      line-height: 32px;
    }
    .el-button:focus,
    .el-button:hover {
      background: #fddfe5;
      border-color: #fddfe5;
      color: #fff;
    }
  }
}
</style>