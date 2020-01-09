<template>
  <div class="staff common_content">
    <el-row :gutter="20">
      <el-col :xs="5" :sm="5" :md="5">
        <side :showHide="false"/>
      </el-col>
      <el-col :xs="19" :sm="19" :md="19">
        <div>
          <search :showHide="true"/>
          <evaluationStaffTraining />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import side from "@/views/admin/components/side.vue";
import search from "@/views/admin/components/search.vue";
import evaluationStaffTraining from "@/views/admin/evaluationStaff/content/evaluationStaffTraining.vue";
export default {
  components: {
    side,
    search,
    evaluationStaffTraining
  },
  data() {
    return {

    };
  },
  methods: {
      signUp() {

      }
  }
};
</script>

<style lang="less">
  .staff{
    width:100%;
    /*.title{*/
      /*width: 260px;*/
      /*height: 60px;*/
      /*background:  url('/image/evaluationStaff/title_bg.jpg') no-repeat ;*/
      /*color: #FFFFFF;*/
      /*font-weight:bold;*/
      /*position: relative;*/
      /*text-align: center;*/
      /*line-height: 60px;*/
      /*.icon{*/
        /*width:40px;*/
        /*height: 40px;*/
        /*position: absolute;*/
        /*top:10%;*/
        /*left:61%;*/
      /*}*/
    /*}*/
    .el-tabs--left .el-tabs__header.is-left{
      margin-right:20px;
    }
    .el-tabs__nav-wrap::after{
      background:none;
    }
    .el-tabs__active-bar{
      background: none;
    }
    .el-tabs--left .el-tabs__item.is-left{
      text-align: center;
    }
    .el-tabs__item{
      width:260px;
    }
    .el-tabs__item.is-active{
      background: #17A1E6 url('/image/evaluationStaff/ball.png') no-repeat right 27% top 47% ;
      color: #FFFFFF;
    }

  }
</style>