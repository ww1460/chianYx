<template>
  <div class="personalHead">
    <h2 :class="hide?'title':'title_hide'">{{title}}</h2>
    <p class="xing" v-if="hide">带星号 * 的为必填项</p>
    <p class="line" v-if="hide"></p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    hide: Boolean
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.personalHead {
  .title {
    display: inline-block;
    border-bottom: 2px solid #ea0000;
    padding: 2px;
  }
  .title_hide {
    display: inline-block;
    padding: 2px;
  }
  padding: 0px 20px 10px 20px;
  .xing {
    color: #ea0000;
    margin: 10px 0px 0px 0px;
  }
  .line {
    width: 100%;
    height: 2px;
    background: #c4c4c4;
    margin: 10px 0px;
  }
}
</style>