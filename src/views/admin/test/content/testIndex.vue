<template>
  <div class="testIndex">
    <el-row :gutter="10">
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="12"
        v-for="(item,index) in data"
        :key="index"
        style="margin-top: 10px;"
      >
        <el-card shadow="always">
          <div class="testIndex-content">
            <div class="testIndex-left">
              <el-image style="width: 150px; height: 150px" :src="item.imgSrc"></el-image>
            </div>
            <div class="testIndex_right">
              <ul class="card_content_ul">
                <li>
                  <h4>{{item.test_class_title}}</h4>
                </li>
                <li class="card_content_li">
                  <span
                    class="icon common_backgroundImg"
                    :style="'background-image:url(' + iconList[1]  + ')'"
                  ></span>
                  报名时间： {{item.registration_start_time|dateformat('YYYY-MM-DD HH:mm')}} 至 {{item.registration_end_time|dateformat('YYYY-MM-DD HH:mm')}}
                </li>
                <li class="card_content_li">
                  <span
                    class="icon common_backgroundImg"
                    :style="'background-image:url(' + iconList[1]  + ')'"
                  ></span>
                  测试时间：{{item.test_start_time|dateformat('YYYY-MM-DD HH:mm')}} 至 {{item.test_end_time|dateformat('YYYY-MM-DD HH:mm')}}
                </li>
                <li class="card_content_li">
                  <span
                    class="icon common_backgroundImg"
                    :style="'background-image:url(' + iconList[1]  + ')'"
                  ></span>
                  测试地点：{{item.test_detail_addr}}
                </li>
                <li class="card_content_li">
                  <span
                    class="icon common_backgroundImg"
                    :style="'background-image:url(' + iconList[1]  + ')'"
                  ></span>
                  测试等级：<span
                   v-for="(item,index) in item.grade"
                   :key="index"
                  >{{item}}\</span>
                </li>
                <!-- <span class="card_details">
                  <el-button size="mini">详 情</el-button>
                </span> -->
              </ul>
            </div>
          </div>
          <div style="text-align:center;margin:5px 0px;">
            <router-link :to="{path:'/test/signUp',query:{data:item,surePay: false}}">
              <el-button type="danger" style="width:150px;height:40px" @click="signUp(item)">报 名</el-button>
            </router-link>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="pagination">
       <el-pagination background 
            layout="prev, pager, next" 
            @current-change="handleCurrentChange"
            :page-size="paging.limit"
            :total="totalCount">
        </el-pagination> 
    </div>
  </div>
</template>

<script>
import { GetExaminerClassList } from "@/api/admin/common.js";

export default {
  data() {
    return {
      iconList: ["/image/index/icon_place.png", "/image/index/icon_time.png"],
      data: [],
      val: {},
      totalCount:0,
      paging: {
        limit: 1,
        page: 1
      },
      test:{}
    };
  },
  created(){
    // search.$on('blur', (arg) => { 
    //     this.test= arg; // 接收        
    // });
    // window.console.log("11"+this.test);
    this.getList();
  },
  methods: {
    signUp(item) {
      window.console.log(item);
    },
    getList() {
      // 测试班列表
      GetExaminerClassList(Object.assign(this.paging)).then(data => {
        var list = data.data.result;
        if (list) {
          this.data= list.items;
          this.totalCount=list.totalCount;
        }
      });
    },
    // 分页
    handleCurrentChange(cpage){
      this.paging.page=cpage;
      GetExaminerClassList(Object.assign(this.paging)).then(data => {
        var list = data.data.result;
        if (list) {
          this.data= list.items;
        }
      });
    },
  }
};
</script>

<style lang="less" scoped>
.testIndex {
  .el-card__body {
    padding: 15px;
  }
  .testIndex-content {
    width: 100%;
    display: flex;
    .testIndex_left {
      width: 100%;
    }
    .testIndex_right {
      width: 100%;
      padding: 10px;
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
  .pagination {
    margin: 50px 0px;
    text-align: center;
  }
}
</style>