<template>
  <div class="partnership">
    <ul class="clearfix">
      <!-- <li
        v-for="(item,index) in dataList"
        :key="index"
        :style="'background-image:url('+ 'http://192.168.8.48:8006' +item.file_path+')'"
        @click="openUrl(item.link_url)"
      ></li> -->
       <li
        v-for="(item,index) in dataList"
        :key="index"
        :style="'background-image:url('+item.file_path+')'"
        @click="openUrl(item.link_url)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { GetParterList } from "@/api/admin/common.js";
export default {
  data() {
    return {
      dataList: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      GetParterList({}).then(data => {
        var list = data.data.result;
        if (list) {
          this.dataList = list.items;
        }
      });
    },
    openUrl(e) {
      var url = "http://" + e;
      window.open(url, "_blank");
    }
  }
};
</script>

<style lang="less" scoped>
.partnership {
  width: 70%;
  margin: 0 auto;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      width: 140px;
      height: 60px;
      cursor: pointer;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      margin: 10px;
    }
  }
}
</style>