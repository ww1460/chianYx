<template>
  <div class="search">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3"  v-if="showHide">
        <div class="screen">省市区筛选</div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" >
        <el-select v-model="searchForm.province" placeholder="请选择省" @change="chooseProvince($event)">
          <el-option
            v-for="item in province"
            :key="item.id"
            :label="item.area_name"
            :value="item.id" 
          ></el-option>
        </el-select>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" >
        <el-select v-model="searchForm.city" placeholder="请选择市" @change="chooseCity($event)">
          <el-option v-for="item in city" :key="item.id" :label="item.area_name" :value="item.id"></el-option>           
        </el-select>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" >
        <el-select v-model="searchForm.district" placeholder="请选择区"  @change="chooseDistrict($event)"> 
          <el-option v-for="item in district" :key="item.id" :label="item.area_name" :value="item.id"></el-option>
        </el-select>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3"  v-if="!showHide">
        <el-select v-model="searchForm.grade" placeholder="请选择等级">
          <el-option
            v-for="item in grade"
            :key="item.id"
            :label="item.dict_key_name"
            :value="item.dict_key_value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="7"  v-if="!showHide">
        <div class="block">
          <el-date-picker
            v-model="testTime"
            type="datetimerange"
            start-placeholder="测试开始日期"
            end-placeholder="测试结束日期"
            :default-time="['12:00:00']"
            prefix-icon="el-icon-date"
            style="width:100%;"
          ></el-date-picker>
        </div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="5">
        <div>
          <el-input placeholder="输入内容要搜索的内容" v-model="searchForm.keyword">
            <el-button slot="append" @click="search">
              <i class="el-icon-search"></i>
            </el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { GetDistrictList,GetTestClassLevel } from "@/api/admin/common.js";

export default {
  props: {
    showHide: Boolean
  },
  data() {
    return {
      province: [],
      city: [],
      district: [],
      grade: [],
      searchForm:{},
      testTime:[],
    };
  },
  created(){
    this.getDistrictList();
  },
  methods: {
    search() {
      var condition={
        provice:this.searchForm.province,
        city:this.searchForm.city,
        district:this.searchForm.district,
        level:this.searchForm.grade,
        keyword:this.searchForm.keyword,
        startTime:this.testTime[0],
        endTime:this.testTime[1],
      };
      window.console.log(condition);
      // search.$emit('blur','condition'); //触发事件
      
      // GetExaminerClassList(Object.assign(this.paging,condition)).then(data => {
      //   if (data.data.result) {
      //     //this.province = data.data.result.items;
      //   }
      // });
      
    },
    getDistrictList(){
      // 区域列表
      GetDistrictList({ parent_id: "-1" }).then(data => {
        if (data.data.result) {
          this.province = data.data.result.items;
        }
      });
      //可申请等级
      GetTestClassLevel({code:'test_class_can_apply_for_grade'}).then(data => {
        if (data.data.result) {
          this.grade = data.data.result.items;
        }
      });
    },
    chooseProvince(item) {
      GetDistrictList({ parent_id: item }).then(data => {
        this.city = data.data.result.items;
      });
    },
    chooseCity(item) {
      GetDistrictList({ parent_id: item }).then(data => {
        this.district = data.data.result.items;
        // this.ruleForm.district = this.district[0].id;
      });
    },
    chooseDistrict() {
      // this.$forceUpdate();
    }
  }
};
</script>

<style lang="less">
.search {
  margin: 15px 0px;
  .el-input-group__append:hover {
    opacity: 0.7;
  }
  .screen {
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #ffffff;
  }
}
</style>