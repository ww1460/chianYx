<template>
  <div class="news">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" style="padding:5px">
        <div class="swiper-container wheel_content">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in dataList" :key="index">
              <img :src="item" class="imgs" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </el-col>
      <el-col
        :xs="24"
        :sm="12"
        :md="6"
        :lg="8"
        :xl="8"
        v-for="(item,index) in data"
        :key="index"
        style="padding: 20px 10px;"
      >
        <div class="newsList">
          <div class="newsList_title common_display">
            <p>
              <span
                class="newsTitleImgSrc common_backgroundImg"
                :style="'background-image:url(' + item.newsTitleImgSrc  + ')'"
              ></span>
              <span>{{item.newsTitle}}</span>
            </p>
            <p>
              <a :href="item.morePath" style="color:#B93229">查看更多&gt;</a>
            </p>
          </div>
          <p class="line"></p>
          <div class="newsList_content">
            <ul>
              <li class="common_display" v-for="(items,index) in item.newsList" :key="index">
                <i class="radius"></i>
                <a :href="items.newsPath" class="newsList_des common_text">{{items.newListTitle}}</a>
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

export default {
  name:'',
  data() {
    return {
      dataList: [
        "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
        "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
        "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
        "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"
      ],
      data: [
        {
          newsTitle: "新闻动态",
          newsTitleImgSrc: "/image/index/newsInfo.png",
          morePath:'/',
          newsList: [
            {
              newListTitle:
                "2019年全国羽毛球后备人才基地决赛在安徽淮南举行颁奖仪式",
              newsPath: "/"
            },
            {
              newListTitle:
                "2019年全国羽毛球后备人才基地决赛在安徽淮南举行颁奖仪式",
              newsPath: "/"
            },
            {
              newListTitle:
                "2019年全国羽毛球后备人才基地决赛在安徽淮南举行颁奖仪式",
              newsPath: "/"
            },
            {
              newListTitle:
                "2019年全国羽毛球后备人才基地决赛在安徽淮南举行颁奖仪式",
              newsPath: "/"
            },
            {
              newListTitle:
                "2019年全国羽毛球后备人才基地决赛在安徽淮南举行颁奖仪式",
              newsPath: "/"
            },
            {
              newListTitle:
                "2019年全国羽毛球后备人才基地决赛在安徽淮南举行颁奖仪式",
              newsPath: "/"
            },
            {
              newListTitle:
                "2019年全国羽毛球后备人才基地决赛在安徽淮南举行颁奖仪式",
              newsPath: "/"
            }
          ]
        },
        {
          newsTitle: "通知公告",
          newsTitleImgSrc: "/image/index/icon_Horn.png",
          morePath:'/',
          newsList: [
            {
              newListTitle:
                "2019年全国羽毛球后备人才基地决赛在安徽淮南举行颁奖仪式",
              newsPath: "/"
            },
            {
              newListTitle:
                "2019年全国羽毛球后备人才基地决赛在安徽淮南举行颁奖仪式",
              newsPath: "/"
            },
            {
              newListTitle:
                "2019年全国羽毛球后备人才基地决赛在安徽淮南举行颁奖仪式",
              newsPath: "/"
            },
            {
              newListTitle:
                "2019年全国羽毛球后备人才基地决赛在安徽淮南举行颁奖仪式",
              newsPath: "/"
            },
            {
              newListTitle:
                "2019年全国羽毛球后备人才基地决赛在安徽淮南举行颁奖仪式",
              newsPath: "/"
            },
            {
              newListTitle:
                "2019年全国羽毛球后备人才基地决赛在安徽淮南举行颁奖仪式",
              newsPath: "/"
            },
            {
              newListTitle:
                "2019年全国羽毛球后备人才基地决赛在安徽淮南举行颁奖仪式",
              newsPath: "/"
            },
            {
              newListTitle:
                "2019年全国羽毛球后备人才基地决赛在安徽淮南举行颁奖仪式",
              newsPath: "/"
            },
            {
              newListTitle:
                "2019年全国羽毛球后备人才基地决赛在安徽淮南举行颁奖仪式",
              newsPath: "/"
            }
          ]
        }
      ]
    };
  },

  mounted() {
    this.creSwiper();
  },
  methods: {
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
.news {
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