<template>
  <div class="testInfo">
    <div class="form">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="170px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="账号">
              <span style="padding-left: 15px;">123456</span>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="机构名称" prop="business_license">
              <el-input
                v-model="ruleForm.business_license"
                placeholder="请输入机构名称"
                style="width:100%"
                :disabled="disabled"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="营业执照编号" prop="mechanism_fullName">
              <el-input
                v-model="ruleForm.mechanism_fullName"
                placeholder="请输入营业执照编号"
                style="width:100%"
                :disabled="disabled"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="机构地址" required>
              <el-row :gutter="10" style="width:100%;margin-left:0px;">
                <el-col :xs="8" :sm="8" :md="8" style="padding-left:0px;">
                  <el-form-item prop="province">
                    <el-select
                      v-model="ruleForm.province"
                      placeholder="请选择省"
                      style="width:100%"
                      :disabled="disabled"
                      @change="chooseProvince($event)"
                    >
                      <el-option
                        v-for="item in province"
                        :key="item.id"
                        :label="item.area_name"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="8" :sm="8" :md="8">
                  <el-form-item prop="city">
                    <el-select
                      v-model="ruleForm.city"
                      placeholder="请选择市"
                      style="width:100%"
                      :disabled="disabled"
                      @change="chooseCity($event)"
                    >
                      <el-option
                        v-for="item in city"
                        :key="item.id"
                        :label="item.area_name"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="8" :sm="8" :md="8" style="padding-right:0px;">
                  <el-form-item prop="district">
                    <el-select
                      v-model="ruleForm.district"
                      placeholder="请选择地区"
                      style="width:100%"
                      :disabled="disabled"
                      @change="chooseDistrict($event)"
                    >
                      <el-option
                        v-for="item in district"
                        :key="item.id"
                        :label="item.area_name"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="具体地址" prop="detailed_address">
              <el-input
                v-model="ruleForm.detailed_address"
                placeholder="请输入具体地址"
                style="width:100%"
                :disabled="disabled"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="负责人姓名" prop="principal">
              <el-input v-model="ruleForm.principal" placeholder="请输入负责人姓名" style="width:100%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="负责人联系电话" prop="principal_tel">
              <el-input v-model="ruleForm.principal_tel" placeholder="请输入负责人姓名" style="width:100%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="法人姓名" prop="legal_person">
              <el-input
                v-model="ruleForm.legal_person"
                placeholder="请输入法人姓名"
                style="width:100%"
                :disabled="disabled"
                :class="'border'"
                :readOnly="true"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="法人证件类型" prop="certificates_type">
              <el-select
                v-model="ruleForm.certificates_type"
                placeholder="请选择法人证件类型"
                :disabled="disabled"
                style="width:100%"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="法人证件号码" prop="legal_person_idNumber">
              <el-input
                v-model="ruleForm.legal_person_idNumber"
                placeholder="请输入法人姓名"
                style="width:100%"
                :disabled="disabled"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="法人联系电话" prop="management_tel">
              <el-input
                v-model="ruleForm.management_tel"
                placeholder="请输入法人姓名"
                style="width:100%"
                :disabled="disabled"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item class="submit">
              <el-button type="danger" @click="edit()" style="width:100px;height:40px">编 辑</el-button>
              <el-button
                type="danger"
                @click="submit('ruleForm')"
                style="width:100px;height:40px"
                :loading="loading"
              >提 交</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import { GetDistrictList } from "@/api/admin/common.js";
export default {
  data() {
    return {
      ruleForm: {
        legal_person: "我是不可编辑的"
      },
      rules: {
        business_license: [
          {
            required: true,
            message: "请填写机构名称",
            trigger: "blur"
          }
        ],
        mechanism_fullName: [
          {
            required: true,
            message: "请填写营业执照编号",
            trigger: "blur"
          }
        ],
        province: [
          {
            required: true,
            message: "请选择省",
            trigger: "change"
          }
        ],
        city: [
          {
            required: true,
            message: "请选择市",
            trigger: "change"
          }
        ],
        district: [
          {
            required: true,
            message: "请选择地区",
            trigger: "change"
          }
        ],
        detailed_address: [
          {
            required: true,
            message: "请填写具体地址",
            trigger: "blur"
          }
        ],
        principal: [
          {
            required: true,
            message: "请填写负责人姓名",
            trigger: "change"
          }
        ],
        principal_tel: [
          {
            required: true,
            message: "请填写负责人电话",
            trigger: "change"
          }
        ],
        legal_person: [
          {
            required: true,
            message: "请选择法人姓名",
            trigger: "change"
          }
        ],
        certificates_type: [
          {
            required: true,
            message: "请选择法人证件类型",
            trigger: "change"
          }
        ],
        legal_person_idNumber: [
          {
            required: true,
            message: "请选择法人证件号码",
            trigger: "change"
          }
        ],
        management_tel: [
          {
            required: true,
            message: "请选择法人联系电话",
            trigger: "change"
          }
        ]
      },
      province: [],
      city: [],
      district: [],
      imageUrl: "",
      disabled: false,
      loading: false
    };
  },
  created() {
    this.getList();
  },
  watch: {
    "ruleForm.province"(val) {
      GetDistrictList({ parent_id: val }).then(data => {
        this.city = data.data.result.items;
        this.ruleForm.city = this.city[0].id;
        this.chooseCity(this.ruleForm.city);
      });
    }
  },
  methods: {
    getList() {
      GetDistrictList({ parent_id: "-1" }).then(data => {
        if (data.data.result) {
          this.province = data.data.result.items;
        }
      });
    },
    edit() {
      this.disable = false;
    },
    submit(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          alert("submit!");
          // this.$refs[ruleForm].resetFields();
        } else {
          return false;
        }
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      window.console.log(this.imageUrl);
    },
    beforeAvatarUpload(file) {
      window.console.log(file);
      const isJPG = file.type === "image/jpeg";
      const isLt4M = file.size / 1024 / 1024 < 4;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt4M) {
        this.$message.error("上传头像图片大小不能超过 4MB!");
      }
      return isJPG && isLt4M;
    },
    handleRemove(file, fileList) {
      window.console.log(file, fileList);
    },
    chooseProvince(item) {
      GetDistrictList({ parent_id: item }).then(data => {
        this.city = data.data.result.items;
        this.ruleForm.city = this.city[0].id;
      });
    },
    chooseCity(item) {
      GetDistrictList({ parent_id: item }).then(data => {
        this.district = data.data.result.items;
        this.ruleForm.district = this.district[0].id;
      });
    },
    chooseDistrict() {
      this.$forceUpdate();
    }
  }
};
</script>
<style lang="less" >
.testInfo {
  .form {
    width: 80%;
    .tips {
      font-weight: 350;
      color: #4e4e4e;
      line-height: 30px;
    }
    .friendshipTips {
      display: flex;
      p:nth-child(1) {
        padding: 0px 40px 0px 0px;
      }
      p:nth-child(2) {
        line-height: 5;
      }
    }
    .color {
      color: #ea0000;
      .el-form-item__label {
        color: #ea0000;
      }
    }
    // 去掉边框
    .border {
      .el-input__inner {
        border-width: 0px !important;
      }
    }
    .submit {
      .el-form-item__content {
        margin-left: 0px !important;
        text-align: center;
        margin: 30px 0px;
      }
    }
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409eff;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
}
</style>