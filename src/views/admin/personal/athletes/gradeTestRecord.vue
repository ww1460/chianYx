<template>
  <div>
    <record :title="title" />
  </div>
</template>

<script>
import record from "@/views/admin/components/record.vue";
export default {
  components: {
    record
  },
  data() {
    return {
      title: "等级测试记录"
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped></style>
