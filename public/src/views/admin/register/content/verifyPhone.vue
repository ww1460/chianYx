<template>
  <div class="verifyPhone">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="85px"
      class="demo-ruleForm"
    >
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="24">
          <el-form-item label="手机号码" prop="phone">
            <el-input type="phone" v-model="ruleForm.phone">
              <template slot="prepend">{{ruleForm.countryCode}}</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24">
          <el-form-item label prop="code">
            <el-input type="code" v-model="ruleForm.code">
              <el-button slot="append" @click="getCode()" style="font-size:16px">获取验证码</el-button>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24">
          <el-form-item v-if="tipsHide">
            <span>我们已经发送一条验证短信至</span>
            <span style="color:#F56C6C">{{tips}}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24">
          <el-form-item class="button">
            <el-button
              type="danger"
              style="width:150px;height:40px"
              @click="registerrNow('ruleForm')"
            >立即注册</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { isMobile } from "@/util/validate.js";
var checkPhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error("请输入联系方式"));
  } else {
    if (isMobile(value)) {
      callback();
    } else {
      return callback(new Error("请输入正确的电话"));
    }
  }
};
var checkCode = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入验证码"));
  } else {
    if (String(value).length == 4) {
      callback();
    } else {
      return callback(new Error("请输入四位数验证码"));
    }
  }
};
export default {
  data() {
    return {
      ruleForm: {
        phone: "",
        code: "",
        countryCode: "+86"
      },
      rules: {
        phone: [{ validator: checkPhone, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }]
      },
      tipsHide: false
    };
  },
  computed: {
    tips: function() {
      return this.ruleForm.countryCode + "  " + this.ruleForm.phone;
    }
  },
  props: {
    next: Function
  },
  mounted() {},
  methods: {
    getCode() {
      if (isMobile(this.ruleForm.phone)) {
        this.tipsHide = true;
      }
    },
    registerrNow(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          this.next();
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less">
.verifyPhone {
  width: 80%;
  margin: 0 auto;
  .el-input-group__append:hover {
    opacity: 0.7;
  }
  .button {
    text-align: center;
    margin: 50px 0px;
    .el-form-item__content {
      margin-left: 0px !important;
    }
  }
}
</style>