<template>
  <div class="search">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" v-if="showHide">
        <div class="screen">省市区筛选</div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <el-select v-model="searhFrom.province" placeholder="请选择省">
          <el-option
            v-for="item in province"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <el-select v-model="searhFrom.city" placeholder="请选择市">
          <el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <el-select v-model="searhFrom.area" placeholder="请选择区">
          <el-option v-for="item in area" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <el-select v-model="searhFrom.grade" placeholder="请选择等级">
          <el-option
            v-for="item in grade"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="7" :xl="1" v-if="!showHide">
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
      <el-col :xs="8" :sm="6" :md="4" :lg="5" :xl="1">
        <div>
          <el-input placeholder="输入内容要搜索的内容" v-model="searhFrom.content" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    showHide: Boolean
  },
  data() {
    return {
      province: [
        {
          value: "0",
          label: "山东省"
        }
      ],
      city: [
        {
          value: "0",
          label: "青岛市"
        }
      ],
      area: [
        {
          value: "0",
          label: "李沧区"
        }
      ],
      grade: [
        {
          value: "0",
          label: "Ⅰ级"
        }
      ],
      searhFrom: {},
      testTime: []
    };
  },
  methods: {
    search() {
      window.console.log(this.searhFrom);
    }
  }
};
</script>

<style lang="less" scoped>
.search {
  margin:15px 0px;
  .screen {
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #ffffff;
  }
}
</style>