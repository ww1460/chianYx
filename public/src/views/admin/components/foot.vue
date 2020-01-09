<template>
  <div class="foot">
    <div class="footer common_backgroundImg">
      <div class="common_content" v-if="content">
        <div :class="['footer_content',(flag?'common_display_center':'')]">
          <div class="footer_content_left">
            <div class="contact_us">
              <span :class="['contact_us_img common_backgroundImg',(flag?'':'footer_auto')]">
                <h2 class="contact_us_des">加入我们</h2>
              </span>
            </div>
            <div style="text-align:center">
              <span>renzhoutiyu.sarn.com</span>
            </div>
          </div>
          <div class="footer_content_line"></div>
          <div :class="['footer_content_right',(flag?'common_display':'')]">
            <div
              :class="flag?'footer_right':'footer_auto'"
              v-for="(item,index) in imgList"
              :key="index"
            >
              <div
                class="footer_right_img common_backgroundImg"
                :style="'background-image:url(' + item.ewmImg  + ')'"
              ></div>
              <p class="footer_right_des">
                <span>{{item.des}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <div class="common_content">
        <p>
          <span>版权所有</span>
        </p>
        <p>鲁公网安备 {{copyright}} 号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Boolean
  },
  data() {
    return {
      imgList: [
        {
          ewmImg: "/image/index/ewm1.png",
          des: "仁洲体育服务号"
        },
        {
          ewmImg: "/image/index/ewm2.png",
          des: "“羽毛球运动水平等级评定”服务号"
        },
        {
          ewmImg: "/image/index/ewm3.png",
          des: "仁洲体育服务号"
        }
      ],
      copyright: "37020202001092",
      screenWidth: document.documentElement.clientWidth, //屏幕宽度
      flag: true,
      timer: true
    };
  },
  mounted() {
    this.screenWidth = document.body.offsetWidth;
    if (this.screenWidth < 768) {
      this.flag = false;
    } else {
      this.flag = true;
    }
    window.addEventListener("resize", () => {
      this.screenWidth = document.body.offsetWidth;
    });
  },
  watch: {
    screenWidth(val) {
      if (this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = false;
        let that = this;
        setTimeout(() => {
          if (this.screenWidth < 768) {
            this.flag = false;
          } else {
            this.flag = true;
          }
          that.timer = true;
        }, 400);
      }
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.foot {
  .footer {
    width: 100%;
    background-image: url(/image/index/background.png);
    .footer_content {
      padding: 50px 0px;
      .footer_content_left {
        .contact_us {
          margin-right: 20px;
          .contact_us_img {
            position: relative;
            display: block;
            width: 200px;
            height: 150px;
            background-image: url(/image/index/contactUs.png);
            .contact_us_des {
              position: relative;
              top: 40%;
              left: 12%;
              color: #ffffff;
            }
          }
        }
      }
      .footer_content_line {
        width: 2px;
        background-color: #c4c4c4;
        margin: 0px 20px;
      }
      .footer_content_right {
        .footer_right {
          width: 150px;
          margin-left: 20px;
        }
        .footer_right_img {
          width: 150px;
          height: 150px;
          margin: 0 auto;
        }
        .footer_right_des {
          text-align: center;
          word-break: break-all;
          font-size: 16px;
          line-height: 28px;
        }
      }
    }
  }
  .footer_bottom {
    text-align: center;
    font-size: 16px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
  }
  .footer_auto {
    width: 150px;
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    .footer_content {
      padding: 50px 0px 120px 0px !important;
    }
    .contact_us {
      margin-right: 0px !important;
    }
  }
}
</style>