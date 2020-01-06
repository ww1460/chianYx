<template>
  <div class="test common_content">
    <search :showHide="false" />
    <test-index />
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
.test {
  height: 5000px;
}
</style>