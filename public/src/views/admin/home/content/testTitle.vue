<template>
  <div class="test_head">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <p class="test_line"></p>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <p class="common_display justCenter">
          <span class="test_center_left common_backgroundImg"></span>
          <span class="test_center">
            <h2 class="test_title">{{title}}</h2>
          </span>
          <span class="test_center_right common_backgroundImg"></span>
        </p>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <p class="test_line">
          <a :href="morePath">查看更多&gt;</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    title: String,
    morePath: String
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.test_head {
  .test_line {
    height: 50px;
    border-bottom: 1.5px solid #c4c4c4;
    position: relative;
    a {
      position: absolute;
      bottom: 0px;
      right: 2px;
      color: #b93229;
    }
  }
  .test_center_left,
  .test_center_right {
    display: inline-block;
    width: 100px;
    height: 74px;
    background-image: url("/image/index/badmintonPlayer.png");
  }
  .test_center_left {
    background-position: 2px 2px;
  }
  .test_center_right {
    background-position: -225px 0px;
  }
  .test_center {
    display: inline-block;
    height: 74px;
    .test_title {
      display: inline-block;
      line-height: 60px;
      border-bottom: 2px solid #b93229;
    }
  }
  
  @media screen and (max-width: 1000px) {
    .test_center_left {
      display: none;
    }
    .test_center_right {
      display: none;
    }
    .justCenter {
      justify-content: center !important;
    }
  }
}
</style>