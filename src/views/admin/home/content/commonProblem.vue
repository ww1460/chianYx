<template>
  <div class="problem common_content">
    <div style="text-align:center">
      <div class="problem_content" v-for="(item,index) in data" :key="index">
        <p class="problem_content_p">
          <span
            class="problem_icon_title common_backgroundImg"
            :style="'background-image:url(' + item.problemIconTitle  + ')'"
          ></span>
        </p>
        <p>
          <span class="problem_title">{{item.problemTitle}}</span>
        </p>
        <p>
          <span class="problem_wenzi">{{item.problemcontent}}</span>
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
export default {
  data() {
    return {
      data: [
        {
          problemIconTitle: "/image/index/zuhe1.png",
          problemTitle: "机构账号如何进行资格申请？",
          problemcontent:
            "媒体查询包含一个可选的媒体类型和媒体特性表达式(0或多个)最终会被解析为true或false。如果媒体查询中指定的媒体类型匹配展示文档所使用的设备类型，并且所有的表达式的值都是true，那么该媒体查询的结果为true。"
        },
        {
          problemIconTitle: "/image/index/zuhe2.png",
          problemTitle: "机构账号如何进行资格申请？",
          problemcontent:
            "媒体查询包含一个可选的媒体类型和媒体特性表达式(0或多个)最终会被解析为true或false。如果媒体查询中指定的媒体类型匹配展示文档所使用的设备类型，并且所有的表达式的值都是true，那么该媒体查询的结果为true。"
        },
        {
          problemIconTitle: "/image/index/zuhe3.png",
          problemTitle: "机构账号如何进行资格申请？",
          problemcontent:
            "媒体查询包含一个可选的媒体类型和媒体特性表达式(0或多个)最终会被解析为true或false。如果媒体查询中指定的媒体类型匹配展示文档所使用的设备类型，并且所有的表达式的值都是true，那么该媒体查询的结果为true。"
        },
        {
          problemIconTitle: "/image/index/zuhe4.png",
          problemTitle: "机构账号如何进行资格申请？",
          problemcontent:
            "媒体查询包含一个可选的媒体类型和媒体特性表达式(0或多个)最终会被解析为true或false。如果媒体查询中指定的媒体类型匹配展示文档所使用的设备类型，并且所有的表达式的值都是true，那么该媒体查询的结果为true。"
        },
        {
          problemIconTitle: "/image/index/zuhe5.png",
          problemTitle: "机构账号如何进行资格申请？",
          problemcontent:
            "媒体查询包含一个可选的媒体类型和媒体特性表达式(0或多个)最终会被解析为true或false。如果媒体查询中指定的媒体类型匹配展示文档所使用的设备类型，并且所有的表达式的值都是true，那么该媒体查询的结果为true。"
        }
      ]
    };
  },
  methods: {}
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
      background-image: url(/image/index/zuhe1.png);
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