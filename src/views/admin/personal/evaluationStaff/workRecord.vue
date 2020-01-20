<template>
  <div class="trainingRecord">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="1" label="序号"  align="center"></el-table-column>
      <el-table-column prop="2" label="机构"  align="center"></el-table-column>
      <el-table-column prop="3" label="工作时间" align="center"></el-table-column>
      <el-table-column prop="4" label="等级"  align="center"></el-table-column>
      <el-table-column prop="5" label="是否考评组长"  align="center"></el-table-column>
      <el-table-column prop="6" label="是否一级考评员" align="center"></el-table-column>
      <el-table-column prop="7" label="是否二级考评员"  align="center"></el-table-column>
      <el-table-column prop="8" label="是否三级考评员"  align="center"></el-table-column>
      <!-- <el-table-column prop="9" label="操作" align="center"></el-table-column> -->
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
  methods: {}
};
</script>

<style lang="less" scoped>
</style>