<template>
  <div class="account common_register_content">
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
          <el-form-item :label="name?'公司名称':'您的姓名'" prop="name">
            <el-input type="name" v-model="ruleForm.name" placeholder="请输入您的真实姓名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24">
          <el-form-item label="登录密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" placeholder="请输入您的登录密码"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24">
          <el-form-item label prop="code">
            <el-input type="code" v-model="ruleForm.code" placeholder="请输入您收到的短信验证码">
              <el-button slot="append" @click="getCode()" style="font-size:16px">获取验证码</el-button>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24">
          <el-form-item label>
            <div class="input_span">
              <span class="input_span1">密码安全程度</span>
              <span id="one" class="input_span1">弱</span>
              <span id="two" class="input_span1">中</span>
              <span id="three" class="input_span1">强</span>
              <a>密码设置建议</a>
            </div>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24">
          <el-form-item class="button">
            <el-button type="danger" style="width:150px;height:40px" @click="finish('ruleForm')">完成</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { checkStrong } from "@/util/validate.js";

var validatName = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入您的真是姓名哦~"));
  } else {
    callback();
  }
};
var validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    if (String(value).length < 6) {
      callback(new Error("密码不足6位"));
    } else if (String(value).length < 18) {
      callback();
    } else {
      callback(new Error("密码过长"));
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
        name: "",
        password: "",
        code: "",
        phone: ""
      },
      rules: {
        name: [{ validator: validatName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }]
      },
      msgText: ""
    };
  },
  props: {
    next: Function,
    name: Boolean
  },
  mounted() {},
  watch: {
    ruleForm: {
      handler(newVal) {
        this.msgText = checkStrong(newVal.password);
        if (this.msgText > 1 || this.msgText == 1) {
          document.getElementById("one").style.background = "red";
        } else {
          document.getElementById("one").style.background = "#eee";
        }
        if (this.msgText > 2 || this.msgText == 2) {
          document.getElementById("two").style.background = "orange";
        } else {
          document.getElementById("two").style.background = "#eee";
        }
        if (this.msgText == 4) {
          document.getElementById("three").style.background = "#00D1B2";
        } else {
          document.getElementById("three").style.background = "#eee";
        }
      },
      deep: true
    }
  },
  methods: {
    getCode() {},
    finish(ruleForm) {
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
.account {
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
  .input_span {
    position: relative;
    .input_span1 {
      margin-right: 20px;
    }
    span + span {
      display: inline-block;
      width: 40px;
      height: 20px;
      background: #eee;
      color: #ffffff;
      line-height: 20px;
      text-align: center;
    }
    a {
      position: absolute;
      right: 0px;
      color: #ea0000;
    }
  }
  .input_span;
}
</style>