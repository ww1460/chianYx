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
      title: "发票"
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped></style>
