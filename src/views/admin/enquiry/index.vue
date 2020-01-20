<template>
  <div class="enquiryIndex common_backgroundImg">
    <div class="common_content">
      <div class="enquiry_title">
        <h1>运动员资格证书查询</h1>
      </div>
      <el-card class="box-card">
        <div class="box-card-form">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入运动员姓名"></el-input>
            </el-form-item>
            <el-form-item prop="certificates_number">
              <el-input v-model="ruleForm.certificates_number" placeholder="请输入运动员证件号码"></el-input>
            </el-form-item>
            <el-form-item prop="certificate_numbering">
              <el-input v-model="ruleForm.certificate_numbering" placeholder="请输入运动员证书编号"></el-input>
            </el-form-item>
            <el-form-item>
              <p class="result">查询结果：{{hasCert}}</p>
            </el-form-item>
            <el-form-item style="text-align:center;margin-top: 50px;">
              <el-button
                type="danger"
                style="width:150px;height:40px"
                @click="submitForm('ruleForm')"
              >立即查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { OpenQuery } from "@/api/admin/common.js";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        certificates_number: "",
        certificate_numbering: ""
      },
      rules: {
        name: [],
        certificates_number: [],
        certificate_numbering: []
      },
      hasCert: ""
    };
  },
  methods: {
    submitForm() {
      OpenQuery(this.ruleForm).then(data => {
        let list = data.data;
        if (list.success) {
          if (list.result.hasCert) {
            this.hasCert = "证书有效";
          } else {
            this.hasCert = "证书无效";
          }
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.enquiryIndex {
  background-image: url(/image/index/background.png);
  padding: 0px 0px 100px 0px;
  .enquiry_title {
    text-align: center;
    padding: 30px 0px;
    h1 {
      display: inline-block;
      border-bottom: 2px solid #ea0000;
      border-radius: 2px;
      padding: 10px;
    }
  }
  .box-card {
    width: 55%;
    margin: 0 auto;

    .box-card-form {
      margin-top: 40px;
      padding: 10px 40px;
      .result {
        padding-left: 15px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .box-card {
      width: 100%;
    }
  }
}
</style>