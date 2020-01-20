<template>
  <div class="newsInformation">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" style="padding:5px">
        <div class="swiper-container wheel_content">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in dataList" :key="index">
              <img :src="item.thumbnail" class="imgs" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </el-col>
      <el-col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="8"
        :xl="8"
        style="padding: 20px 10px;"
      >
        <div class="newsList">
          <div class="newsList_title common_display">
            <p>
              <span
                class="newsTitleImgSrc common_backgroundImg"
                :style="'background-image:url(' + news.newsTitleImgSrc  + ')'"
              ></span>
              <span>{{news.newsTitle}}</span>
            </p>
            <p>
              <router-link :to="news.morePath">
                <a style="color:#B93229;cursor: pointer;">查看更多&gt;</a>
              </router-link>
            </p>
          </div>
          <p class="line"></p>
          <div class="newsList_content">
            <ul>
              <li class="common_display" v-for="(items,index) in newsList" :key="index">
                <i class="radius"></i>
                <!-- <a :href="items.newsPath" class="newsList_des common_text">{{items.news_subject}}</a> -->
                <a class="newsList_des common_text">{{items.news_subject}}</a>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="8"
        :xl="8"
        style="padding: 20px 10px;"
      >
        <div class="newsList">
          <div class="newsList_title common_display">
            <p>
              <span
                class="newsTitleImgSrc common_backgroundImg"
                :style="'background-image:url(' + notices.newsTitleImgSrc  + ')'"
              ></span>
              <span>{{notices.newsTitle}}</span>
            </p>
            <p>
              <router-link :to="notices.morePath">
                <a style="color:#B93229;cursor: pointer;">查看更多&gt;</a>
              </router-link>
            </p>
          </div>
          <p class="line"></p>
          <div class="newsList_content">
            <ul>
              <li class="common_display" v-for="(items,index) in noticeList" :key="index">
                <i class="radius"></i>
                <!-- <a :href="items.newsPath" class="newsList_des common_text">{{items.news_subject}}</a> -->
                <a class="newsList_des common_text">{{items.news_subject}}</a>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Swiper from "swiper";
import { GetPhotoList,GetNewsList,GetNotificList } from "@/api/admin/common.js";
export default {
  name: "",
  data() {
    return {
      dataList: [],
      news:{
         newsTitle: "新闻动态",
         newsTitleImgSrc: "/image/index/newsInfo.png",
         morePath: "/news",
      },
      newsList: [],
      notices:{
         newsTitle: "通知公告",
         newsTitleImgSrc: "/image/index/icon_Horn.png",
         morePath: "/notice",
      },
      noticeList:[],
      paging: {
        limit: 4,
        page: 1
      },
      paging2: {
        limit: 6,
        page: 1
      }
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
      // 新闻列表(展示图片)
      GetPhotoList(Object.assign(this.paging)).then(data => {
        var list = data.data.result;
        if (list) {
          this.dataList = list.items;
        }
      });
      // 新闻列表(无图)
      GetNewsList(Object.assign(this.paging2)).then(data => {
        var list = data.data.result;
        if (list) {
          this.newsList = list.items;
        }
      });
      // 通知公告
      GetNotificList(Object.assign(this.paging)).then(data => {
        var list = data.data.result;
        if (list) {
          this.noticeList = list.items;
        }

      })
    },
    creSwiper() {
      this.$nextTick(() => {
        this.swiper = new Swiper(".wheel_content", {
          pagination: ".swiper-pagination",
          loop: true,
          autoplay: 3000,
          paginationClickable: true
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.newsInformation {
  .imgs {
    width: 100%;
    height: 240px;
  }
  .el-col {
    height: 240px;
    overflow: hidden;
  }
  .icon {
    width: 20px;
  }
  .newsTitleImgSrc {
    display: inline-block;
    width: 25px;
    height: 20px;
    position: relative;
    top: 3px;
  }
  .newsList_title {
    color: #b93229;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    text-align: right;
    left: -10px;
  }
  .line {
    border: 1px solid #b93229;
  }
  .radius {
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ea0000;
    position: relative;
    top: 13px;
    margin-right: 5px;
  }
  .newsList_des {
    display: inline-block;
    width: 100%;
    padding: 5px 5px;
    color: #000000;
  }
}
</style>