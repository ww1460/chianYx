<template>
  <div class="viewEntry">
    <el-row style="margin-bottom:20px;">
      <a class="download" :href='downloadhttp' download=""  title="下载" style="color:#f56c6c"><el-button type="danger" plain style="margin:0 10px">下载报名信息</el-button></a>
      <router-link to="/personal/testList/viewEntry/testScheduling"><el-button type="danger" >批量报名</el-button></router-link>
      <router-link to="/personal/testList/viewEntry/testScheduling" style="margin:0 10px"><el-button type="primary" plain > 测试编排</el-button></router-link>
      <el-button type="primary" >成绩录入</el-button>
      <el-button type="primary" @click="batchRecordOperate">批量申请证书证章</el-button>
    </el-row>
    <el-dialog title="批量申请证书证章" :visible.sync="dialogTableVisible">
      <div class="batchRecord">
         <h3>申请记录</h3>
         <ul>
           <li v-for="(item,index) in batchRecord" :key="index">
              <div>时间:<span>{{item.date}}</span></div>
              <div>姓名:<span>{{item.name}}</span></div>
              <div>地址:<span>{{item.address}}</span></div>
           </li>
         </ul>
      </div>
      <el-dialog
        width="30%"
        title="提示"
        :visible.sync="innerVisible"
        append-to-body>
        <span style="font-size:16px;">确定要申请全部人员的证书证章吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="innerVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmApplication">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        width="30%"
        title="提示"
        :visible.sync="addressVisible"
        append-to-body>
        <span style="font-size:16px;">填写地址</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="innerVisible = false">取 消</el-button>
          <el-button type="primary" >确 定</el-button>
        </span>
      </el-dialog>
      <el-button type="primary" @click="batchRecordDialog" v-show="batchButton">批量申请</el-button>
      <el-button type="primary"  v-show="!batchButton" style="margin-left:0">去缴费</el-button>
      <p style="color:red">申请全部人员的证书证章</p>
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
      
    </el-dialog>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="1" label="序号" align="center"></el-table-column>
      <el-table-column prop="2" label="创建时间" align="center"></el-table-column>
      <el-table-column prop="3" label="测试地址" align="center"></el-table-column>
      <el-table-column prop="4" label="报名时间" align="center"></el-table-column>
      <el-table-column prop="5" label="测试时间" align="center"></el-table-column>
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
      ],
      downloadhttp:'报名信息.xls',
      gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
      innerVisible:false,
      addressVisible:false,
      batchButton:true,
      batchRecord:[
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
   
   };
  },
  methods: {
    handleClick(row){
      window.console.log(row)
    },
    batchRecordOperate(){
      this.dialogTableVisible = true;
    },
    batchRecordDialog(){
      this.innerVisible = true
      
    },
    confirmApplication(){
      this.innerVisible = false;
      this.batchButton=false;
      this.addressVisible=true;
    }
  }
};
</script>

<style lang="less" scoped>
.viewEntry {
  .download:hover{
    color: #FFFFFF;
  }
  .batchRecord{
    ul{
      margin:10px 0;
      div{
        line-height:24px;
      }
    
    }
  }


}
</style>
<style lang="less">
.viewEntry{
  .el-dialog__body{
    padding:10px 20px 20px 20px;
    overflow: hidden;
  }
}
</style>