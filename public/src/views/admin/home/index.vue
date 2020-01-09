<template>
  <div class="indexView">
    <div class="home common_content">
      <!-- 轮播图 -->
      <wheel />
      <!-- 新闻 -->
      <news-information />
      <!-- 测试报名 -->
      <test-title title="测试报名" morePath="/" />
      <test-registration />
      <!-- 考评员 -->
      <testTitle title="考评员" morePath="/" />
      <appraiser />
    </div>
    <div class="home1 common_backgroundImg">
      <div class="home1_content common_content">
        <!-- 精彩图片/视频 -->
        <wonderfulPVTitle
          title="精彩图片/视频"
          morePath="/"
          :moreHide="true"
          imgSrc="/image/index/wonderfulPictures.png"
        />
        <wheel2 />
        <!-- 合作伙伴 -->
        <wonderfulPVTitle
          title="合作伙伴"
          morePath="/"
          :moreHide="false"
          imgSrc="/image/index/cooperativePartner.png"
        />
      </div>
    </div>
    <div class="home2">
      <div class="home2_title common_content">
        <wonderfulPVTitle
          title="常见问题"
          morePath="/"
          :moreHide="false"
          imgSrc="/image/index/icon_problem.png"
          bgImgSrc="/image/index/rightBall.png"
        />
      </div>
      <div class="home2_content common_backgroundImg">
        <commonProblem />
      </div>
    </div>
  </div>
</template>

<script>
// 轮播图
import wheel from "@/views/admin/home/swiper/wheel.vue";

// 新闻动态
import newsInformation from "@/views/admin/home/content/newsInformation.vue";

// 测试报名和考评员
import testTitle from "@/views/admin/home/content/testTitle.vue";
import testRegistration from "@/views/admin/home/content/testRegistration.vue";
import appraiser from "@/views/admin/home/content/appraiser.vue";
// 精彩图片视频
import wonderfulPVTitle from "@/views/admin/home/content/wonderfulPVTitle.vue";
import wheel2 from "@/views/admin/home/swiper/wheel2.vue";
// 常见问题
import commonProblem from "@/views/admin/home/content/commonProblem.vue";
export default {
  components: {
    wheel,
    newsInformation,
    testRegistration,
    testTitle,
    appraiser,
    wonderfulPVTitle,
    wheel2,
    commonProblem
  },
  data() {
    return {
      test_title: ["测试报名", "考评员"]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.indexView {
  .home {
    .test_head {
      .test_line {
        height: 50px;
        border-bottom: 1.5px solid #c4c4c4;
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
          display: block;
          font-weight: bold;
          font-size: 2rem;
          line-height: 60px;
          color: #000000;
          border-bottom: 1px solid #b93229;
        }
      }
    }
  }
  .home1 {
    background-image: url(/image/index/BadmintonBg.png);
  }
  .home2 {
    .home2_content {
      background-image: url(/image/index/454.png);
    }
  }
}
</style>