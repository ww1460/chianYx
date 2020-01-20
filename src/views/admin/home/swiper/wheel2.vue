<template>
  <div class="wheel2">
    <div style="position: relative;width: 41px;">
      <div class="wheel2_left" @click="prev()"></div>
    </div>
    <div class="wheel2_content">
      <div class="swiper-container wheel_PV">
        <div class="swiper-wrapper">
          <div class="swiper-slide wheel2_center" v-for="(item,index) in data" :key="index">
            <div class="wheel2_img">
              <img :src="item.thumbnail" alt />
            </div>
            <div class="wheel2_wenzi">{{item.news_subject}}</div>
          </div>
        </div>
      </div>
    </div>
    <div style="position: relative;width: 41px;">
      <div class="wheel2_right" @click="next()"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { GetPhotoVideosList } from "@/api/admin/common.js";
export default {
  data() {
    return {
      data: [
        // {
        //   greatPVimg: "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
        //   greatPVWords: "1"
        // },
        // {
        //   greatPVimg: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
        //   greatPVWords: "2"
        // },
        // {
        //   greatPVimg: "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
        //   greatPVWords: "3"
        // },
        // {
        //   greatPVimg: "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
        //   greatPVWords: "4"
        // },
        // {
        //   greatPVimg: "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
        //   greatPVWords: "5"
        // },
        // {
        //   greatPVimg: "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
        //   greatPVWords: "6"
        // },
        // {
        //   greatPVimg: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
        //   greatPVWords: "7"
        // },
        // {
        //   greatPVimg: "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
        //   greatPVWords: "8"
        // }
      ],
      screenWidth: document.body.clientWidth,
      slidesPerView: 4,
      paging: {
        limit: 6,
        page: 1
      }
    };
  },
  created(){
    this.getList()
  },
  watch: {
    screenWidth(val) {
      this.screenWidth = val;
      let that = this;
      if (that.screenWidth < 768) {
        that.slidesPerView = 2;
      } else {
        that.slidesPerView = 4;
      }
      this.creSwiper();
    }
  },
  mounted() {
    this.creSwiper();
    const that = this;
    if (that.screenWidth < 768) {
      that.slidesPerView = 2;
    } else {
      that.slidesPerView = 4;
    }
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  methods: {
    getList() {
      //精彩图片视频列表
      GetPhotoVideosList(Object.assign(this.paging)).then(data => {
        var list = data.data.result;
        if (list) {
          this.data = list.items;
        }
      });
    },
    prev() {
      this.data.unshift(this.data.pop());
    },
    next() {
      this.data.push(this.data.shift());
    },
    creSwiper() {
      this.$nextTick(() => {
        this.swiper = new Swiper(".wheel_PV", {
          slidesPerView: this.slidesPerView,
          spaceBetween: 20
        });
      });
    }
  }
};
</script>
<style lang="less" scoped>
.wheel2 {
  display: flex;
  justify-content: space-between;
  .wheel2_left {
    width: 40px;
    height: 70px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top: -35px;
    background-image: url(/image/index/icon-slides.png);
    background-size: cover;
    background-position: left;
  }
  .wheel2_right {
    width: 40px;
    height: 70px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top: -35px;
    background-image: url(/image/index/icon-slides.png);
    background-size: cover;
    background-position: -45px 0px;
  }
  .wheel2_content {
    width: 94%;
    .wheel2_center {
      background: #ffffff;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
      border-radius: 0px 0px 4px 4px;
      .wheel2_img {
        img {
          width: 100%;
          height: 200px;
        }
      }
      .wheel2_wenzi {
        padding: 10px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #000000;
      }
    }
  }
}
@media screen and (width: 768px) {
  .wheel2 .wheel2_content {
    width: 90% !important;
  }
}
@media screen and (max-width: 767px) {
  .wheel2 .wheel2_content {
    width: 78% !important;
  }
}
</style>