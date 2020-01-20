<template>
  <div class="record">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="1" label="赛事" align="center"></el-table-column>
      <el-table-column prop="2" label="等级" align="center"></el-table-column>
      <el-table-column prop="3" label="名字" align="center"></el-table-column>
      <el-table-column prop="4" label="状态" align="center"></el-table-column>
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
          3: "上海市普陀区金沙江路 1518 弄",
          4: "已通过"
        },
        {
          1: "2016-05-04",
          2: "王小虎",
          3: "上海市普陀区金沙江路 1517 弄",
          4: "待审核"
        },
        {
          1: "2016-05-01",
          2: "王小虎",
          3: "上海市普陀区金沙江路 1519 弄",
          4: "已通过"
        },
        {
          1: "2016-05-03",
          2: "王小虎",
          3: "上海市普陀区金沙江路 1516 弄",
          4: "已通过"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped></style>
