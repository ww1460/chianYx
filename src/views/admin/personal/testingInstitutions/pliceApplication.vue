<template>
  <div class="pliceApplication">
    <div class="add">
      <el-button type="primary" size="medium" @click="addAyppliy" :disabled="false">新增申请</el-button>
      <span class="notes" v-if="false">注：请在资格申请通过后再进行测试申请！</span>
      <div class="tips">
        <span>提示：点击发布按钮立即开班</span>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="1" label="序号" align="center"></el-table-column>
      <el-table-column prop="2" label="创建时间" align="center"></el-table-column>
      <el-table-column prop="3" label="测试地址" align="center"></el-table-column>
      <el-table-column prop="4" label="报名时间" align="center"></el-table-column>
      <el-table-column prop="5" label="测试时间" align="center"></el-table-column>
      <el-table-column prop="6" label="审核结果" align="center"></el-table-column>
      <el-table-column prop="7" label="操作" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
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
          1: "2016-05-02",
          2: "王小虎",
          3: "上海市普陀区金沙江路 1518 弄"
        },
        {
          1: "2016-05-04",
          2: "王小虎",
          3: "上海市普陀区金沙江路 1517 弄"
        },
        {
          1: "2016-05-01",
          2: "王小虎",
          3: "上海市普陀区金沙江路 1519 弄"
        },
        {
          1: "2016-05-03",
          2: "王小虎",
          3: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleClick() {},
    addAyppliy() {
      this.$router.push({ path: "/personal/addApplication" });
    }
  }
};
</script>

<style lang="less" scoped>
.pliceApplication {
  .add {
    margin: 0px 0px 20px 20px;
    .notes {
      padding-left: 10px;
      color: #ea0000;
    }
    .tips {
      margin-top: 20px;
      color: rgb(153, 153, 153);
      font-size: 12px;
    }
  }
}
</style>