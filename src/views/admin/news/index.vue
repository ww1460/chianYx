<template>
  <div class="newsIndex">
    <top :titleHide="true" />
    <div class="common_content">
      <div>
        <el-row :gutter="10" style="margin-top:10px;margin-bottom:10px">
          <el-col :xs="12" :sm="8" :md="8">
            <div class="block">
              <el-date-picker
                v-model="testTime"
                type="daterange"
                start-placeholder="测试开始日期"
                end-placeholder="测试结束日期"
                prefix-icon="el-icon-date"
                style="width:100%;"
              ></el-date-picker>
            </div>
          </el-col>
          <el-col :xs="12" :sm="8" :md="8">
            <div>
              <el-input placeholder="输入内容要搜索的内容" v-model="keyword">
                <el-button slot="append" @click="search">
                  <i class="el-icon-search" style="font-size:16px"></i>
                </el-button>
              </el-input>
            </div>
          </el-col>
        </el-row>
        <div class="list">
          <ul>
            <li v-for="(item,index) in data" :key="index">
              <div class="nrow" @click="getInto()">
                <el-row :gutter="10">
                  <el-col :xs="19" :sm="19" :md="19">
                    <div class="ellipsis">
                      <span class="dian"></span>
                      <span class="content">{{item.news_subject}}</span>
                    </div>
                  </el-col>
                  <el-col :xs="5" :sm="5" :md="5">
                    <div class="time">{{item.publish_date|dateformat('YYYY-MM-DD')}}</div>
                  </el-col>
                </el-row>
              </div>
            </li>
          </ul>
        </div>
        <div class="pagination">
          <el-pagination background 
            layout="prev, pager, next" 
            @current-change="handleCurrentChange"
            :page-size="paging.limit"
            :total="totalCount">
          </el-pagination> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import top from "@/views/admin/components/top.vue";
import { GetNewsList } from "@/api/admin/common.js";
export default {
  components: {
    top
  },
  data() {
    return {
      keyword:'',
      testTime: '',
      data: [],
      totalCount:0,
      paging: {
        limit: 3,
        page: 1
      },
     
    };
  },
  created(){
    this.getList();
  },
  methods: {
    getInto(){
      this.$router.push({path:"/news/newsDetails"})
    },
    getList() {
      // 新闻列表
      GetNewsList(Object.assign(this.paging)).then(data => {
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
      GetNewsList(Object.assign(this.paging)).then(data => {
        var list = data.data.result;
        if (list) {
          this.data= list.items;
        }
      });
    },
    // 搜索
    search(){
      var condition={
        keyword:this.keyword,
        startTime:this.testTime[0],
        endTime:this.testTime[1],
      };
      GetNewsList(Object.assign(this.paging,condition)).then(data => {
        var list = data.data.result;
        if (list) {
          this.data= list.items;
          this.totalCount=list.totalCount;
        }
      });
    },
  }
};
</script>

<style lang="less" scoped>
.newsIndex {
  .list {
    .nrow {
      line-height: 1;
      padding-top: 15px;
      padding-bottom: 15px;
      border-bottom: 1px dotted #ddd;
      .ellipsis {
        display: flex;
        align-items: center;
        .dian {
          width: 5px;
          height: 5px;
          background-color: #000;
          border-radius: 50%;
          margin-right: 5px;
        }
        .content {
          width: 100%;
          font-size: 18px;
          color: #000;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .time {
        text-align: right;
        color: #999;
      }
    }
    .nrow:hover {
      cursor: pointer;
      .content {
        color: #ea0000;
      }
    }
  }
  .pagination {
    margin: 50px 0px;
    text-align: center;
  }
}
</style>