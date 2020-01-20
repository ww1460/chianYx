<template>
  <div class="grade">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="证书证章" name="first" style="text-align:center">
        <h2>{{ level }}</h2>
        <ul>
          <li v-for="(item, index) in imgUrl" :key="index">
            <p><img :src="item" class="badge" /></p>
          </li>
        </ul>
        <router-link to="/personal/gradeCertificateDelivery"
          ><el-button type="danger" style="margin-top:20px"
            >申请证书证章</el-button
          ></router-link>
      </el-tab-pane>
      <el-tab-pane label="申请记录" name="second">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="1" label="申请日期" align="center"></el-table-column>
            <el-table-column prop="2" label="证书等级" align="center"></el-table-column>
            <el-table-column prop="3" label="类型" align="center"></el-table-column>
            <el-table-column prop="4" label="状态" align="center"></el-table-column>
            <el-table-column prop="3" label="费用" align="center"></el-table-column>
            <el-table-column prop="4" label="快递公司" align="center"></el-table-column>
            <el-table-column prop="4" label="快递单号" align="center"></el-table-column>
            <el-table-column prop="4" label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                @click="application(scope.row)"
                type="text"
                size="small"
                >付款</el-button>
                <el-button
                @click="application(scope.row)"
                type="text"
                size="small"
                >查看物流</el-button>
            </template>
          </el-table-column>
          </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      level: "二级运动员",
      imgUrl: ["/image/personal/certificate.jpg", "/image/personal/badge.png"],
      tableData: [
        {
          1: "2016-05-02",
          2: "二级",
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
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      window.console.log(tab, event);
    },
    application(row) {
      window.console.log(row);
    },
  }
};
</script>

<style lang="less" scoped>
.grade {
  h2 {
    text-align: center;
    margin-bottom: 15px;
  }
  ul {
    display: flex;
    li {
      flex: 1;
      border-right: 1px solid #e4e7ed;
      p {
        text-align: center;
        img {
          width: 55%;
        }
      }
    }
    li:nth-child(2) img {
      width: 78%;
    }
  }
}
</style>
