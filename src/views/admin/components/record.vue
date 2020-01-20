<template>
  <div class="record">
    <div class="title" style="overflow:hidden">
      <label>{{ title2 }}</label>
      <el-select
        v-model="selectTime.time"
        placeholder="请选择时间段"
        style="float:right;width:148px"
        v-if="!title2 == '发票'"
      >
        <el-option
          v-for="item in time"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="con">
      <ul class="thead">
        <li v-for="(item, index) in thead" :key="index">{{ item }}</li>
      </ul>
      <ul class="tbody" v-if="title2 == '等级测试记录'">
        <li v-for="(item, index) in tbody" :key="index">
          <div class="order">
            <span style="display:block;float:left">{{ item.order_time }}</span>
            <span style="display:block;float:right"
              >订单号:{{ item.order_number }}</span
            >
          </div>
          <div class="order_detail">
            <div
              style="overflow:hidden;width:40%;float:left;border-right:1px solid #C4C4C4"
            >
              <img
                src="/image/personal/test1.jpg"
                style="width:100px;height:100px; margin-right:10px; float:left;"
              />
              <h4 style="padding-top:27px;margin-bottom:5px;">
                {{ item.testing_Institutions }}
              </h4>
              <h4>{{ item.level }}</h4>
            </div>
            <div class="money">
              <h4 style="margin-bottom:5px;">总额:¥{{ item.money }}</h4>
              <h4>{{ item.payment_Status }}</h4>
            </div>
            <div class="detail">
              <router-link to="/">详情</router-link>
            </div>
            <div
              class="operate"
              v-if="item.payment_Status == '未支付'"
              style="text-align: center;padding-top: 26px;"
            >
              <el-button><router-link to="/">去支付</router-link></el-button>
            </div>

            <div class="operate" v-if="item.payment_Status == '支付成功'">
              <router-link to="/">查看成绩</router-link>
              <router-link to="/" style="color:#28B28B">查看发票</router-link>
              <router-link to="/">申诉</router-link>
              <router-link to="/" style="color:#D62000">退费</router-link>
            </div>
          </div>
        </li>
      </ul>
      <ul class="tbody" v-if="title2 == '发票'">
        <li v-for="(item, index) in tbody2" :key="index">
          <div class="order">
            <span style="display:block;float:left">{{ item.order_time }}</span>
            <span style="display:block;float:right"
              >订单号:{{ item.order_number }}</span
            >
          </div>
          <div class="order_detail">
            <div
              style="overflow:hidden;width:40%;float:left;border-right:1px solid #C4C4C4"
            >
              <img
                src="/image/personal/test1.jpg"
                style="width:100px;height:100px; margin-right:10px; float:left;"
              />
              <h4 style="padding-top:27px;margin-bottom:5px;">
                {{ item.testing_Institutions }}
              </h4>
              <h4>{{ item.level }}</h4>
            </div>
            <div class="money" style="padding:40px 0">
              <h4>{{ item.invoice_type }}</h4>
            </div>
            <div class="detail">{{ item.invoice_status }}</div>
            <div class="operate" style="text-align: center;padding-top: 26px;">
              <el-button><router-link to="/personal/invoice">发票详情</router-link></el-button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      title2: "",
      time: [
        {
          value: "0",
          label: "近三个月"
        }
      ],
      selectTime: {},
      thead: [],
      tbody_Show: true,
      opeate_Show: true,
      tbody: [
        {
          order_time: "2020/01/13 14:33",
          order_number: "123456789",
          testing_Institutions: "杭州畅想体育策划有限公司",
          level: "少儿七级",
          money: "300",
          payment_Status: "未支付"
        },
        {
          order_time: "2020/01/13 14:33",
          order_number: "123456789",
          testing_Institutions: "杭州畅想体育策划有限公司",
          level: "少儿七级",
          money: "300",
          payment_Status: "支付成功"
        },
        {
          order_time: "2020/01/13 14:33",
          order_number: "123456789",
          testing_Institutions: "杭州畅想体育策划有限公司",
          level: "少儿七级",
          money: "300",
          payment_Status: "未支付"
        },
        {
          order_time: "2020/01/13 14:33",
          order_number: "123456789",
          testing_Institutions: "杭州畅想体育策划有限公司",
          level: "少儿七级",
          money: "300",
          payment_Status: "支付成功"
        }
      ],
      tbody2: [
        {
          order_time: "2020/01/13 14:33",
          order_number: "123456789",
          testing_Institutions: "杭州畅想体育策划有限公司",
          level: "少儿七级",
          invoice_type: "电子普通发票",
          invoice_status: "已开"
        },
        {
          order_time: "2020/01/13 14:33",
          order_number: "123456789",
          testing_Institutions: "杭州畅想体育策划有限公司",
          level: "少儿七级",
          invoice_type: "电子普通发票",
          invoice_status: "已开"
        },
        {
          order_time: "2020/01/13 14:33",
          order_number: "123456789",
          testing_Institutions: "杭州畅想体育策划有限公司",
          level: "少儿七级",
          invoice_type: "电子普通发票",
          invoice_status: "已开"
        },
        {
          order_time: "2020/01/13 14:33",
          order_number: "123456789",
          testing_Institutions: "杭州畅想体育策划有限公司",
          level: "少儿七级",
          invoice_type: "电子普通发票",
          invoice_status: "已开"
        }
      ]
    };
  },
  created() {
    //判断进入的角色
    this.title2 = this.title;
    if (this.title2 == "等级测试记录") {
      this.thead = ["详情", "状态", "操作"];
    }
    if (this.title2 == "发票") {
      this.thead = ["详情", "发票", "操作"];
    }
  },

  methods: {}
};
</script>

<style lang="less" scoped>
.record {
  .title {
    label {
      font-size: 18px;
      line-height: 47px;
    }
  }
  .con {
    border: 1px solid #dcdfe6;
    padding: 5px;
    margin-top: 5px;
    .thead {
      background: #f5f6f6;
      overflow: hidden;
      li {
        float: left;
        padding: 6px;
        box-sizing: border-box;
        text-align: center;
      }
      li:first-child {
        width: 40%;
      }
      li:nth-child(2) {
        width: 23%;
      }
      li:nth-child(3) {
        width: 37%;
      }
    }
    .tbody {
      li {
        border-bottom: 1px solid #dcdfe6;
        .order {
          padding: 6px 18px;
          background: #f5f6f6;
          overflow: hidden;
          margin-top: 10px;
        }
        .order_detail {
          padding: 15px 10px;
          overflow: hidden;
          h4 {
            font-weight: normal;
          }
          .money {
            width: 25%;
            margin: auto;
            float: left;
            text-align: center;
            padding: 27px 0;
            border-right: 1px solid rgb(196, 196, 196);
          }
          .detail {
            width: 15%;
            margin: auto;
            float: left;
            text-align: center;
            padding: 39px 0;
            border-right: 1px solid rgb(196, 196, 196);
            a {
              color: #000000;
            }
          }
          .operate {
            padding-top: 10px;
            a {
              color: #000000;
              display: block;
              text-align: center;
              margin-bottom: 2px;
            }
          }
        }
      }
      li:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
