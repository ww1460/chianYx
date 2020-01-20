<template>
  <div class="common_content">
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :xs="5" :sm="5" :md="4">
          <personalMenu :role="Number(userRole)" />
        </el-col>
        <el-col :xs="19" :sm="19" :md="20">
          <router-view></router-view>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import personalMenu from "@/views/admin/components/personalMenu.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    personalMenu
  },
  computed: {
    ...mapGetters(["userRole"])
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.personal {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  padding: 15px;
}
</style>