<template>
  <div class="changePassword">
    <personalHead title="修改密码" :hide="true" />
    <div class="form">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="125px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="原密码" prop="oldPassword">
              <el-input
                type="password"
                v-model="ruleForm.oldPassword"
                placeholder="请输入原密码"
                style="width:100%"
                show-password
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="密码" prop="newPassword">
              <el-input
                type="password"
                v-model="ruleForm.newPassword"
                placeholder="请输入新密码"
                style="width:100%"
                show-password
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="确认密码" prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                placeholder="请确认新密码"
                style="width:100%"
                show-password
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item class="submit">
              <el-button type="danger" @click="save('ruleForm')" style="width:100px;height:40px">保 存</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import personalHead from "@/views/admin/components/personalHead.vue";
import { mapGetters } from "vuex";
import { ModifyPassword } from "@/api/admin/login.js";
export default {
  components: {
    personalHead
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  data() {
    var checkPassWord = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {},
      rules: {
        oldPassword: [
          { required: true, message: "原密码不能为空", trigger: "blur" }
        ],
        newPassword: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        checkPass: [
          { required: true, validator: checkPassWord, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    save(ruleForm) {
      const form = {
        oldPassword: this.ruleForm.oldPassword,
        newPassword: this.ruleForm.newPassword,
      };

      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          ModifyPassword(form).then(data => {
            const list = data.data;
            if (list.success) {
              if (list.result.isSuccess) {
                this.$store.dispatch("loginOut");
                this.$router.push({ path: "/index" });
                this.$message({
                  message: "修改成功，请重新登录",
                  duration: 3000,
                  type: "success"
                });
              } else {
                window.console.log(list.result.errorMsg);
                this.$message({
                  message: list.result.errorMsg,
                  duration: 3000,
                  type: "error"
                });
              }
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less">
.changePassword {
  .form {
    width: 60%;
    .submit {
      .el-form-item__content {
        margin-left: 0px !important;
        text-align: center;
        margin: 30px 0px;
      }
    }
  }
}
</style>