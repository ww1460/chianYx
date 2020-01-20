<template>
  <div class="problem common_content">
    <div style="text-align:center">
      <div class="problem_content" v-for="(item,index) in data" :key="index">
        <p class="problem_content_p">
          <span
            class="problem_icon_title common_backgroundImg"
            :style="'background-image:url(' +static_img_url + index +'.png' +')'"
          ></span>
        </p>
        <p>
          <span class="problem_title">{{item.news_subject}}</span>
        </p>
        <p>
          <span class="problem_wenzi">{{item.news_content}}</span>
        </p>
      </div>
    </div>
    <div class="problem_bottom">
      <el-button type="danger" round>查看更多</el-button>
    </div>
    <div class="question common_backgroundImg"></div>
  </div>
</template>

<script>
import { GetQuestionsList } from "@/api/admin/common.js";
export default {
  data() {
    return {
      static_img_url:'/image/index/zuhe',
      data: [],
      paging: {
        limit: 3,
        page: 1
      },
    };
  },
  created(){
    this.getList()
  },
  methods: {
    getList() {
      // 常见问题列表
      GetQuestionsList(Object.assign(this.paging)).then(data => {
        var list = data.data.result;
        if (list) {
          this.data = list.items;
        }
      });
    },
  }
};
</script>

<style lang="less" scoped>
.problem {
  position: relative;
  .problem_content {
    display: inline-block;
    width: 165px;
    padding: 10px;
    margin: 20px;
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0.74) 61.84%,
      rgba(255, 255, 255, 0) 100%
    );
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    .problem_content_p {
      text-align: center;
    }
    .problem_icon_title {
      display: inline-block;
      width: 35px;
      height: 30px;
    }
    .problem_title {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      color: #000000;
    }
    .problem_wenzi {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #000000;
      display: -webkit-box;
      -webkit-line-clamp: 7; 
      overflow: hidden; 
      text-overflow: ellipsis; 
      -webkit-box-orient: vertical;
    }
  }
  .problem_bottom {
    text-align: center;
    padding: 20px;
  }
  .question {
    width: 200px;
    height: 200px;
    position: absolute;
    right: -100px;
    top: 50%;
    margin-top: -100px;
    background-image: url(/image/index/questionMark.png);
  }
}
</style>