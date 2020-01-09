<template>
  <div class="appraiser">
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
          <div slot="header">
            <p class="card_title">
              <span>{{item.appraiserTitle}}</span>
            </p>
          </div>
          <div class="card_content">
            <ul>
              <li class="card_content_li">
                <span
                  class="icon common_backgroundImg"
                  :style="'background-image:url(' + iconList[0]  + ')'"
                ></span>
                {{item.appraiserProvince}} {{item.appraiserCity}} {{item.appraiserArea}}
              </li>
              <li class="card_content_li">
                <span
                  class="icon common_backgroundImg"
                  :style="'background-image:url(' + iconList[1]  + ')'"
                ></span>
                报名时间：{{item.registrationStartTime}} 至 {{item.registrationEndTime}}
              </li>
            </ul>
            <p class="line"></p>
            <p class="common_display card_bottom">
              <!-- <span class="card_bottom_left">￥{{item.testPrice}}</span> -->
              <span class="card_bottom_left"></span>
              <span>
                <el-button size="mini" type="danger">报 名</el-button>
                <el-button
                  size="mini"
                  style="color:#f56c6c;border: 0.5px solid #f56c6c;border-radius: 4px;"
                  class="btn_details"
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
  props: {
    title: String
  },
  data() {
    return {
      data: [
        {
          appraiserTitle:
            "【二级考评员】 中国羽毛球协会2019年第二期羽毛球运动水平等级考试培训班",
          appraiserProvince: "河南省",
          appraiserCity: "郑州市",
          appraiserArea: "惠景区",
          registrationStartTime: "2019-10-11",
          registrationEndTime: "2019-11-20",
          testPrice: "3950"
        },
        {
          appraiserTitle:
            "【二级考评员】 中国羽毛球协会2019年第二期羽毛球运动水平等级考试培训班",
          appraiserProvince: "河南省",
          appraiserCity: "郑州市",
          appraiserArea: "惠景区",
          registrationStartTime: "2019-10-11",
          registrationEndTime: "2019-11-20",
          testPrice: "3950"
        },
        {
          appraiserTitle:
            "【二级考评员】 中国羽毛球协会2019年第二期羽毛球运动水平等级考试培训班",
          appraiserProvince: "河南省",
          appraiserCity: "郑州市",
          appraiserArea: "惠景区",
          registrationStartTime: "2019-10-11",
          registrationEndTime: "2019-11-20",
          testPrice: "3950"
        }
      ],
      iconList: ["/image/index/icon_place.png", "/image/index/icon_time.png"]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.appraiser {
  margin-top: 10px;
  .el-card__body {
    padding: 5px;
  }
  .el-card__header {
    padding: 0px;
    color: #ffffff;
    .card_title {
      width: 100%;
      background: #7a8be1;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
      span {
        display: block;
        padding: 20px;
      }
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
      color: #f56c6c;
    }
    .btn_details.el-button:focus,
    .btn_details.el-button:hover {
      background: #FDDFE5;
    }
  }
}
</style>