<template>
  <div class="wheel">
    <div class="swiper-container wheel_top">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in dataList" :key="index">
          <img :src="item.file_path" @click="openUrl(item.link_url)" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev left"></div>
      <div class="swiper-button-next right"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { GetBannerList } from "@/api/admin/common.js";
export default {
  name: "",
  data() {
    return {
      dataList: [],
      swiper: null
    };
  },

  mounted() {
    this.creSwiper();
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      GetBannerList({}).then(data => {
        window.console.log(data);
        var list = data.data.result;
        if (list) {
          this.dataList = list.items;
        }
      });
    },
    openUrl(e) {
      var url = "http://" + e;
      window.open(url, "_blank");
    },
    creSwiper() {
      this.$nextTick(() => {
        this.swiper = new Swiper(".wheel_top", {
          pagination: ".swiper-pagination",
          loop: true,
          autoplay: 3000,
          paginationClickable: true,
          nextButton: ".swiper-button-next",
          prevButton: ".swiper-button-prev"
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.wheel {
  img {
    width: 100%;
    height: 332px;
  }
  .right {
    position: absolute;
    right: 0px;
    top: 50%;
    width: 40px;
    height: 70px;
    margin-top: -35px;
    background-image: url("/image/index/icon-slides.png");
    background-size: cover;
    background-position: -45px 0px;
  }
  .left {
    position: absolute;
    width: 40px;
    height: 70px;
    left: 0px;
    top: 50%;
    margin-top: -35px;
    background-image: url("/image/index/icon-slides.png");
    background-size: cover;
    background-position: left;
  }
}
</style>