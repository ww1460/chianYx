<template>
  <div class="register common_backgroundImg">
    <div class="common_content">
      <div class="register_title">
        <h1>注册账号</h1>
      </div>
      <div class="register_content">
        <el-card class="box-card">
          <div class="register_radio">
            <el-radio-group v-model="role" v-for="(item,index) in roleList" :key="index">
              <el-radio :label="item.label" @change="roleChange()">{{item.value}}</el-radio>
            </el-radio-group>
          </div>
          <div class="register_step">
            <el-steps
              :active="register_step"
              finish-status="success"
              process-status="finish"
              align-center
            >
              <el-step :title="item" v-for="(item,index) in step" :key="index"></el-step>
            </el-steps>
          </div>
          <div>
            <verifyPhone :next="next" v-if="register_step == 0" />
            <account :next="next" v-if="register_step == 1" :name="role == 2" />
            <success v-if="register_step == 2" />
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
2;
import { mapGetters } from "vuex";
import { getStore } from "@/util/store";
import verifyPhone from "@/views/admin/register/content/verifyPhone";
import account from "@/views/admin/register/content/account";
import success from "@/views/admin/register/content/success";
export default {
  components: {
    verifyPhone,
    account,
    success
  },
  computed: {
    ...mapGetters(["register_step", "register_role"])
  },
  data() {
    return {
      role: 1,
      roleList: [
        {
          label: 1,
          value: "运动员"
        },
        {
          label: 2,
          value: "考评员"
        },
        {
          label: 3,
          value: "测评机构"
        }
      ],
      step: ["验证手机号", "填写用户信息", "注册成功"]
    };
  },
  beforeDestroy() {
    this.$store.commit("SET_REGISTER_STEP", -1);
    this.$store.commit("SET_REGISTER_ROLE", 1);
  },
  created() {
    let registerStep = getStore({ name: "register_step" });
    let registerRole = getStore({ name: "register_role" });
    if (registerStep) {
      this.$store.commit("SET_REGISTER_STEP", registerStep - 1);
    }
    if (registerRole) {
      this.role = registerRole;
    }
  },
  methods: {
    next() {
      this.$store.commit("SET_REGISTER_STEP", this.register_step);
    },
    roleChange() {
      this.$store.commit("SET_REGISTER_STEP", -1);
      this.$store.commit("SET_REGISTER_ROLE", this.role);
    }
  }
};
</script>

<style lang="less">
.register {
  background-image: url(/image/index/background.png);
  padding: 0px 0px 100px 0px;
  .register_title {
    text-align: center;
    padding: 30px 0px;
    h1 {
      display: inline-block;
      border-bottom: 2px solid #ea0000;
      border-radius: 2px;
      padding: 10px;
    }
  }
  .register_content {
    .box-card {
      width: 55%;
      margin: 0 auto;
      .register_radio {
        display: flex;
        justify-content: space-around;
        margin: 30px 0px;
        .el-radio__label {
          font-size: 18px;
          padding-left: 10px;
        }
      }
      .register_step {
        margin: 30px 0px;
      }
    }
    @media screen and (max-width: 768px) {
      .box-card {
        width: 100%;
      }
    }
  }
}
</style>