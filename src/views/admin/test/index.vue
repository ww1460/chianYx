<template>
  <div class="test common_content">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24">
        <search :showHide="false" />
        <test-index />
        <p class="common_text_line common_content"></p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import search from "@/views/admin/components/search.vue";
import testIndex from "@/views/admin/test/content/testIndex.vue";
export default {
  components: {
    search,
    testIndex
  },
  props: {
    showHide: Boolean
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
</style>