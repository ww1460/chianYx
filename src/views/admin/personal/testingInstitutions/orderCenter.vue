<template>
  <div class="orderCenter">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="1" label="订单编号" align="center"></el-table-column>
      <el-table-column prop="3" label="下单时间" align="center"></el-table-column>
      <el-table-column prop="s" label="订单状态" align="center">
        <template slot-scope="scope">
          <span
            :style="scope.row.s==0?'color:#F56C6C':scope.row.s==1?'color:#67C23A':''"
          >{{scope.row.s | status}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="5" label="操作" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button
            @click="toPay(scope.row)"
            type="text"
            size="small"
            :disabled="scope.row.s==0?false:scope.row.s==1?true:false"
          >去支付</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          1: "6783463223",
          s: 0,
          3: "2016-05-02"
        },
        {
          1: "4353463242",
          s: 1,
          3: "2016-05-07"
        }
      ]
    };
  },
  methods: {
    toPay() {}
  },
  filters: {
    status: i => {
      switch (i) {
        case 0:
          return "未完成";
        case 1:
          return "已完成";
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>