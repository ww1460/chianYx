<template>
  <div class="test_head">
    <el-row :gutter="10" style="margin-left: 0px;margin-right: 0px;">
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <p
          class="test_line common_backgroundImg"
          :style="'background-image:url(' + bgImgSrc  + ')'"
        ></p>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <p>
          <span class="test_center">
            <h2 class="test_title">
              <span
                class="test_center_left common_backgroundImg"
                :style="'background-image:url(' + imgSrc  + ')'"
              ></span>
              {{title}}
            </h2>
          </span>
        </p>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <p
          :class="['test_line  common_backgroundImg',(!moreHide?'pos':'')]"
          :style="'background-image:url(' + bgImgSrc  + ')'"
        >
          <a :href="morePath" v-if="moreHide">查看更多&gt;</a>
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
    morePath: String,
    moreHide: Boolean,
    imgSrc: String,
    bgImgSrc: String
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.test_head {
  margin: 20px 0px;
  .el-row {
    border-bottom: 1.5px solid #c4c4c4;
  }
  .test_line {
    height: 74px;
    position: relative;
    a {
      position: absolute;
      bottom: 0px;
      right: -5px;
      color: #b93229;
    }
  }
  .test_center_left {
    display: inline-block;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 15px;
    left: -50px;
  }
  @media screen and (max-width: 768px) {
    .test_center_left {
      width: 30px;
      height: 30px;
    }
  }
  .test_center {
    display: block;
    height: 74px;
    text-align: center;
    .test_title {
      display: inline-block;
      line-height: 60px;
      border-bottom: 2px solid #b93229;
      position: relative;
    }
  }
  .pos {
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
}
</style>