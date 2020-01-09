<template>
  <div class="signUp">
    <div class="common_content">
      <el-card class="box-card">
        <div slot="header">
          <h3>考评员培训班报名</h3>
        </div>
        <table class="signUp_content">
          <thead class="signUp_title">
            <tr align="center">
              <th>培训班信息</th>
              <th>金额</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in data" :key="index">
              <td class="td1">
                <div class="testIndex-content">
                  <div class="testIndex_right">
                    <ul class="card_content_ul">
                      <li>
                        <h4>{{item.trainingCourse}}</h4>
                      </li>
                      <li
                        class="card_content_li"
                      >报名时间： {{item.registrationStartTime}} 至 {{item.registrationEndTime}}</li>
                      <li class="card_content_li">测试时间：{{item.trainingStartTime}} 至 {{item.trainingEndTime}}</li>
                      <li class="card_content_li">测试地点：{{item.address}}</li>
                      <li class="card_content_li">测试等级：{{item.level}}</li>
                    </ul>
                  </div>
                </div>
              </td>
              <!--<td style="border-right: 1px solid #c4c4c4;">-->
                <!--<div class="signUp_money">-->
                  <!--<span style="color: #ea3553;">￥{{price}}</span>-->
                <!--</div>-->
              <!--</td>-->
              <td >
                <div class="signUp_money">
                  <span style="color: #ea3553;">￥{{item.price}}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </el-card>
      <el-card class="box-card signUp_card">
        <span>合计：</span>
        <span style="color:#ea3553;">￥{{data[0].price}}</span>
        <router-link to="/" >
          <el-button type="danger" style="width:100px;height:40px">去结算</el-button>
        </router-link>
      </el-card>
    </div>
    <p class="common_text_line common_content"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      let query = this.$route.query.data;
      this.data.push(query);
    }
  }
};
</script>

<style lang="less" scoped>
.signUp {
  .signUp_title {
    background-color: #f5f6f6;
    th {
      padding: 10px;
    }
  }
  .signUp_content {
    width: 100%;
    border-collapse: collapse;
    .td1 {
      width: 60%;
    }
    .testIndex-content {
      display: flex;
      border-right: 1px solid #c4c4c4;
      .testIndex_right {
        padding: 20px;
        margin: auto;
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
    .signUp_money {
      text-align: center;
    }
  }
  .signUp_card {
    margin-top: 10px;
    text-align: right;
    span {
      display: inline-block;
      margin-right: 10px;
      font-size: 16px;
    }
    span + span {
      font-size: 18px;
    }
  }
}
</style>