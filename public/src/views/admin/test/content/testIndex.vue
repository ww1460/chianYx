<template>
  <div class="testIndex">
    <el-row :gutter="10">
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="12"
        v-for="(item,index) in data"
        :key="index"
        style="margin-top: 10px;"
      >
        <el-card shadow="always">
          <div class="testIndex-content">
            <div class="testIndex-left">
              <el-image style="width: 150px; height: 150px" :src="item.imgSrc"></el-image>
            </div>
            <div class="testIndex_right">
              <ul class="card_content_ul">
                <li>
                  <h4>{{item.testTitle}}</h4>
                </li>
                <li class="card_content_li">
                  <span
                    class="icon common_backgroundImg"
                    :style="'background-image:url(' + iconList[1]  + ')'"
                  ></span>
                  报名时间： {{item.registrationStartTime}} 至 {{item.registrationEndTime}}
                </li>
                <li class="card_content_li">
                  <span
                    class="icon common_backgroundImg"
                    :style="'background-image:url(' + iconList[1]  + ')'"
                  ></span>
                  测试时间：{{item.testStartTime}} 至 {{item.testEndTime}}
                </li>
                <li class="card_content_li">
                  <span
                    class="icon common_backgroundImg"
                    :style="'background-image:url(' + iconList[1]  + ')'"
                  ></span>
                  测试地点：{{item.testLocation}}
                </li>
                <li class="card_content_li">
                  <span
                    class="icon common_backgroundImg"
                    :style="'background-image:url(' + iconList[1]  + ')'"
                  ></span>
                  测试等级：{{item.testLevel}}
                </li>
                <!-- <span class="card_details">
                  <el-button size="mini">详 情</el-button>
                </span> -->
              </ul>
            </div>
          </div>
          <div style="text-align:center;margin:5px 0px;">
            <router-link :to="{path:'/test/signUp',query:{data:item,surePay: false}}">
              <el-button type="danger" style="width:150px;height:40px" @click="signUp(item)">报 名</el-button>
            </router-link>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconList: ["/image/index/icon_place.png", "/image/index/icon_time.png"],
      data: [
        {
          registrationStartTime: "2019-10-11",
          registrationEndTime: "2019-10-11",
          testStartTime: "2019-10-11",
          testEndTime: "2019-10-11",
          testLocation: "山东省青岛市李沧区精神病医院",
          testLevel: "低能7级",
          testTitle: "航州畅想体育策划有限公司",
          imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"
        },
        {
          registrationStartTime: "2019-10-11",
          registrationEndTime: "2019-10-11",
          testStartTime: "2019-10-11",
          testEndTime: "2019-10-11",
          testLocation: "山东省青岛市李沧区精神病医院",
          testLevel: "低能7级",
          testTitle: "航州畅想体育策划有限公司",
          imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"
        },
        {
          registrationStartTime: "2019-10-11",
          registrationEndTime: "2019-10-11",
          testStartTime: "2019-10-11",
          testEndTime: "2019-10-11",
          testLocation: "山东省青岛市李沧区精神病医院",
          testLevel: "低能7级",
          testTitle: "航州畅想体育策划有限公司",
          imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"
        },
        {
          registrationStartTime: "2019-10-11",
          registrationEndTime: "2019-10-11",
          testStartTime: "2019-10-11",
          testEndTime: "2019-10-11",
          testLocation: "山东省青岛市李沧区精神病医院",
          testLevel: "低能7级",
          testTitle: "航州畅想体育策划有限公司",
          imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"
        },
        {
          registrationStartTime: "2019-10-11",
          registrationEndTime: "2019-10-11",
          testStartTime: "2019-10-11",
          testEndTime: "2019-10-11",
          testLocation: "山东省青岛市李沧区精神病医院",
          testLevel: "低能7级",
          testTitle: "航州畅想体育策划有限公司",
          imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"
        },
        {
          registrationStartTime: "2019-10-11",
          registrationEndTime: "2019-10-11",
          testStartTime: "2019-10-11",
          testEndTime: "2019-10-11",
          testLocation: "山东省青岛市李沧区精神病医院",
          testLevel: "低能7级",
          testTitle: "航州畅想体育策划有限公司",
          imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"
        }
      ],
      val: {}
    };
  },
  methods: {
    signUp(item) {
      window.console.log(item);
    }
  }
};
</script>

<style lang="less" scoped>
.testIndex {
  .el-card__body {
    padding: 15px;
  }
  .testIndex-content {
    width: 100%;
    display: flex;
    .testIndex_left {
      width: 100%;
    }
    .testIndex_right {
      width: 100%;
      padding: 10px;
      .card_content_ul {
        position: relative;
        .card_content_li {
          margin: 5px 0px;
          .icon {
            display: inline-block;
            width: 20px;
            height: 20px;
            position: relative;
            top: 4px;
          }
        }
        .card_details {
          position: absolute;
          right: 0px;
          top: 0px;
        }
        .el-button:focus,
        .el-button:hover {
          background: #fddfe5;
          border-color: #fddfe5;
          color: #fff;
        }
      }
    }
  }
  .pagination {
    margin: 50px 0px;
    text-align: center;
  }
}
</style>