<template>
  <div class="complaintHandling">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="1" label="姓名" align="center"></el-table-column>
      <el-table-column prop="2" label="等级" align="center"></el-table-column>
      <el-table-column prop="3" label="测试时间" align="center"></el-table-column>
      <el-table-column prop="4" label="处理状态" align="center"></el-table-column>
      <el-table-column prop="5" label="操作" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
    handleClick(){

    }
  }
};
</script>

<style lang="less" scoped>
</style>