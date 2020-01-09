<template>
  <div class="signin">
    <div class="header">
      <div class="common_content">
        <div class="header_left">{{title}}</div>
      </div>
    </div>
    <div class="common_content">
      <img src="/image/index/logo.png" alt style="padding:30px 0px 30px 0px" />
    </div>
    <div class="backgrond common_backgroundImg">
      <el-card class="box-card">
        <div class="signin_title">
          <h2>登录账号</h2>
        </div>
        <div class="signin_form">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <el-form-item>
              <div class="signin_radio" prop="role">
                <el-radio-group
                  v-model="ruleForm.role"
                  v-for="(item,index) in roleList"
                  :key="index"
                >
                  <el-radio :label="item.label" @change="roleChange('ruleForm')">{{item.value}}</el-radio>
                </el-radio-group>
              </div>
            </el-form-item>
            <el-form-item prop="user" :error="errorUser">
              <div style="text-align: center;">
                <el-input
                  placeholder="请输入您的账号"
                  v-model="ruleForm.user"
                  clearable
                  prefix-icon="el-icon-user-solid"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="password" :error="errorPass">
              <div style="text-align: center;">
                <el-input
                  placeholder="请输入您的密码"
                  v-model="ruleForm.password"
                  clearable
                  prefix-icon="el-icon-lock"
                  show-password
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item>
              <div style="text-align: center;margin:15px 0px 0px 0px">
                <el-button
                  type="danger"
                  style="width:150px;height:40px"
                  @click="signin('ruleForm')"
                >立即登录</el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    <div class="foot">
      <foot :content="this.$route.meta.bottomFlag" />
    </div>
  </div>
</template>

<script>
import foot from "@/views/admin/components/foot.vue";

export default {
  components: {
    foot
  },
  data() {
    return {
      title: "欢迎来到羽毛球运动水平等级评定!",
      roleList: [
        {
          label: 0,
          value: "运动员"
        },
        {
          label: 1,
          value: "考评员"
        },
        {
          label: 2,
          value: "测评机构"
        }
      ],
      ruleForm: {
        role: 0,
        user: "",
        password: ""
      },
      rules: {
        user: [{ required: true, message: "账号不能为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      },
      errorPass: "",
      errorUser: ""
    };
  },

  methods: {
    signin(ruleForm) {
      this.errorPass = "";
      this.errorUser = "";
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          if (this.ruleForm.user == "123" && this.ruleForm.password == "123") {
            this.$notify.success({
              title: "提示",
              message: "登录成功",
              duration: 1500
            });
            this.$router.push({ path: "/" });
          } else {
            this.$nextTick(() => {
              if (this.ruleForm.user !== "123") {
                this.errorUser = "账号错误";
              }
              if (this.ruleForm.password !== "123") {
                this.errorPass = "密码错误";
              }
            });
          }
        } else {
          return false;
        }
      });
    },
    roleChange(ruleForm) {
      this.clearForm();
      this.$refs[ruleForm].resetFields();
    },
    clearForm() {
      this.ruleForm.user = "";
      this.ruleForm.password = "";
    }
  }
};
</script>

<style lang="less" scoped>
.signin {
  .header {
    /* Rectangle 137 */
    width: 100%;
    height: 42px;
    line-height: 42px;
    left: 0px;
    top: 0px;
    background: rgba(244, 244, 244, 0.85);
    .header_left {
      font-family: Source Han Sans CN;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      color: #000000;
    }
  }
  .backgrond {
    /* 背景1 4 */
    width: 100%;
    height: 450px;
    background-image: url(/image/index/yumaoqiu3344.jpg);
    position: relative;
    .box-card {
      width: 30%;
      position: absolute;
      top: 7%;
      right: 15%;
      .signin_title {
        text-align: center;
        h2 {
          display: inline-block;
          border-bottom: 2px solid #ea0000;
          border-radius: 2px;
          padding: 10px;
        }
      }
      .signin_form {
        padding: 10px 30px;
        .signin_radio {
          display: flex;
          justify-content: space-around;
          margin: 30px 0px 0px 0px;
        }
      }
    }
    @media screen and (max-width: 768px) {
      .box-card {
        width: 90%;
        right: 0px;
        left: 0px;
        margin: 0 auto;
      }
    }
  }
}
</style>