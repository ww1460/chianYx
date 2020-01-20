<template>
  <div class="success">
    <div class="success_img">
      <span class="common_backgroundImg"></span>
    </div>
    <div class="success_img">
      <a>恭喜您注册成功</a>!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      this.$router.push({ path: "/signin" });
    }, 1000);
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.success {
  margin: 50px 0px;
  .success_img {
    text-align: center;
    span {
      display: inline-block;
      width: 100px;
      height: 100px;
      background-image: url(/image/index/success.png);
    }
    a {
      font-size: 18px;
    }
  }
}
</style>