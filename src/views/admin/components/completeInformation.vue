<template>
  <div class="completeInformation">
    <personal-head title="基本信息" :hide="true" />
    <user-info v-if="userRole === '1' || userRole === '2'" />
    <test-info v-if="userRole === '3'" />
  </div>
</template>

<script>
import personalHead from "@/views/admin/components/personalHead.vue";
import testInfo from "@/views/admin/information/testInfo.vue";
import userInfo from "@/views/admin/information/userInfo.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    personalHead,
    userInfo,
    testInfo
  },
  computed: {
    ...mapGetters(["userRole"])
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
