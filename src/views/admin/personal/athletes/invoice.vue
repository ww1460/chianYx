<template>
  <div class="invoice">
    <personalHead title="发票" :hide="false" />
    <table width="100%" cellspacing="0" id="table">
      <thead>
        <tr bgcolor="#F5F6F6">
          <td width="15%">发票信息</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>发票状态</td>
          <td style="color:#67C23A">开发票</td>
        </tr>
        <tr>
          <td>发票内容</td>
          <td>商品明细</td>
        </tr>
        <tr>
          <td>发票抬头</td>
          <td>个人</td>
        </tr>
      </tbody>
    </table>

    <table width="100%" cellspacing="0" id="table">
      <thead>
        <tr bgcolor="#F5F6F6">
          <td align="center">发票代码</td>
          <td align="center">发票号</td>
          <td align="center">微信扫码获取电子普通发票</td>
          <td align="center">下载电子普通发票</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center">01200191300897</td>
          <td align="center">5475533</td>
          <td align="center">
            <div class="ewm">
              <span class="common_backgroundImg" :style="'background-image: url('+ewmImg+')'"></span>
            </div>
          </td>
          <td>
            <div class="icon">
              <span class="common_backgroundImg"></span>
              <span>查看发票</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="btn">
      <el-button size="mini" round type="danger" @click="sendMailbox">发送邮箱</el-button>
    </div>
  </div>
</template>

<script>
import personalHead from "@/views/admin/components/personalHead.vue";
export default {
  components: {
    personalHead
  },
  data() {
    return {
      ewmImg: "/image/personal/ewm.png"
    };
  },
  methods: {
    sendMailbox() {
      this.$prompt("发送邮箱", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "邮箱格式不正确",
        inputPlaceholder: "请输入您的邮箱号"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的邮箱是: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>

<style lang="less" scoped>
.invoice {
  #table {
    margin: 20px 0px;
    border-spacing: 0;
    border-collapse: collapse;
    color: #4e4e4e;
    thead {
      tr {
        border: 1px solid #c4c4c4;
        td {
          padding: 20px;
        }
      }
    }
    tbody {
      tr {
        td {
          padding: 20px;
          border: 1px solid #c4c4c4;
        }
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            margin-right: 10px;
          }
          span:nth-child(1) {
            width: 24px;
            height: 24px;
            background-image: url(/image/personal/icon8.png);
          }
          span:nth-child(2) {
            cursor: pointer;
          }
        }
        .ewm {
          span {
            display: inline-block;
            width: 80px;
            height: 80px;
          }
        }
      }
    }
  }
  .btn {
    margin: 30px 0px 60px 0px;
  }
}
</style>