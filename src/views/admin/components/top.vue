<template>
  <div class="top">
    <div class="common_content">
      <div class="top_background common_backgroundImg"></div>
      <div class="top_title" v-if="titleHide">
        <h3>{{this.$route.meta.title}}</h3>
        <span class="top_title_span"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleHide: Boolean
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.top {
  .top_background {
    width: 100%;
    height: 100px;
    background-image: url("/image/index/bac.jpg");
    margin: 20px 0px;
  }
  .top_title {
    position: relative;
    margin: 20px 0px;
    padding: 3px 0px;
    border-bottom: 1px solid #ea0000;
    .top_title_span {
      position: absolute;
      bottom: -10px;
      left: 30px;
      display: inline-block;
      width: 0;
      height: 0;
      border-width: 5px;
      border-style: solid;
      border-color: #ea0000 transparent transparent transparent;
    }
  }
}
</style>