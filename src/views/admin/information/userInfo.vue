<template>
  <div class="appraiserInfo">
    <div class="form">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="170px"
        class="demo-ruleForm"
        enctype="multipart/form-data"
      >
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="真实姓名" prop="name">
              <el-input
                type="name"
                v-model="ruleForm.name"
                placeholder="请输入您的真实姓名"
                style="width:100%"
                :disabled="personalInfo"
              ></el-input>
              <p class="tips">提示：证件登记名称，提交后不可修改</p>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="英文姓名" prop="personal_en_name">
              <el-input
                type="personal_en_name"
                v-model="ruleForm.personal_en_name"
                placeholder="请输入您的英文名"
                style="width:100%"
                :disabled="personalInfo"
              ></el-input>
              <p class="tips">提示：（注意大小写，首字母大写）证件登记名称，提交后不可修改</p>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="上传头像" :error="error" :required="true">
              <el-upload
                class="avatar-uploader"
                action="#"
                :auto-upload="false"
                :multiple="false"
                :show-file-list="false"
                :on-change="loadJsonFromFile"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" @mouseover="imgMouseover" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <div class="el-upload-show" :style="active" @mouseleave="imgMouseleave">
                  <span class="el-upload-span1">
                    <span
                      class="el-upload-list__item-preview"
                      @click.stop="handlePictureCardPreview()"
                    >
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span @click.stop="handleRemove()">
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt />
              </el-dialog>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="ruleForm.sex" :disabled="personalInfo">
                <el-radio :label="0">男</el-radio>
                <el-radio :label="1">女</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="证件类型" prop="certificates_type">
              <el-select
                v-model="ruleForm.certificates_type"
                placeholder="请选择证件类型"
                style="width:100%"
                :disabled="personalInfo"
              >
                <el-option
                  :label="item.label"
                  :value="item.value"
                  v-for="(item,index) in certificatesList"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="证件号码" prop="certificates_number">
              <el-input
                v-model="ruleForm.certificates_number"
                placeholder="请输入您的证件号码"
                style="width:100%"
                :disabled="personalInfo"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="生日" prop="birthday">
              <el-date-picker
                v-model="ruleForm.birthday"
                type="date"
                placeholder="选择您的出生日期"
                style="width:100%"
                :disabled="personalInfo"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
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
                      :disabled="personalInfo"
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
                      :disabled="personalInfo"
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
                      :disabled="personalInfo"
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
            <el-form-item label="具体地址" prop="native_place">
              <el-input
                v-model="ruleForm.native_place"
                placeholder="请输入您的具体地址"
                style="width:100%"
                :disabled="personalInfo"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="邮寄地址" prop="mailing_address">
              <el-input
                v-model="ruleForm.mailing_address"
                placeholder="请输入您的邮寄地址"
                style="width:100%"
                :disabled="personalInfo"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item prop="email" label="邮箱">
              <el-input v-model="ruleForm.email" placeholder="请输入您的邮箱"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" v-if="userRole == '1'">
            <el-form-item label="当前运动员等级" prop="athlete_rank">
              <el-input v-model="ruleForm.athlete_rank" placeholder="请填写当前等级" style="width:100%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" v-if="userRole == '1'">
            <el-form-item label="获取当前运动员等级时间" prop="athlete_obtain_time">
              <el-date-picker
                v-model="ruleForm.athlete_obtain_time"
                type="date"
                placeholder="当前等级获取时间"
                style="width:100%"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" v-if="userRole == '2'">
            <el-form-item label="教育程度" prop="educational_information">
              <el-select
                v-model="ruleForm.educational_information"
                placeholder="请选择您的教育程度"
                style="width:100%"
                :disabled="personalInfo"
              >
                <el-option
                  :label="item.label"
                  :value="item.value"
                  v-for="(item,index) in educationList"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" v-if="userRole == '2'">
            <el-form-item label="当前考评员等级" prop="evaluator_rank">
              <el-input v-model="ruleForm.evaluator_rank" placeholder="请填写当前等级" style="width:100%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" v-if="userRole == '2'">
            <el-form-item label="获取当前考评员等级时间" prop="evaluator_obtain_time">
              <el-date-picker
                v-model="ruleForm.evaluator_obtain_time"
                type="date"
                placeholder="当前等级获取时间"
                style="width:100%"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="友情提示!" class="color">
              <div class="friendshipTips">
                <p>
                  <span>您的中文姓名、英文姓名、性别、出生年月日 将会出现在各类证书 上，一旦提交无法自行修改，是否确认。</span>
                </p>
                <p>
                  <el-button type="warning" @click="sure('ruleForm')">确认</el-button>
                </p>
              </div>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item class="submit">
              <el-button type="danger" @click="edit()" style="width:100px;height:40px">编 辑</el-button>
              <el-button
                type="danger"
                @click="submit('ruleForm')"
                style="width:100px;height:40px"
                :disabled="!disabled"
              >提 交</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import { GetDistrictList, GetDicData } from "@/api/admin/common.js";
import { UpdateorInsertAthleteInfo } from "@/api/admin/login.js";
import { getBirthdayFromIdCard } from "@/util/data.js";
import {
  validatename,
  validateEname,
  validateCapnanme
} from "@/util/validate.js";
import { mapGetters } from "vuex";
// 英名验证
const enName = (rule, value, callback) => {
  if (!value) {
    callback(new Error("请输入英文名"));
  } else {
    if (validateCapnanme(value)) {
      return callback(new Error("首字母未大写"));
    } else if (value.length < 100 && validateEname(value)) {
      callback();
    } else {
      return callback(new Error("请输入正确的英文名"));
    }
  }
};
// 中名验证
const chnName = (rule, value, callback) => {
  if (!value) {
    callback(new Error("请输入中文名"));
  } else {
    if (value.length < 100 && validatename(value)) {
      callback();
    } else {
      return callback(new Error("请输入正确的中文名"));
    }
  }
};

export default {
  computed: {
    ...mapGetters(["userRole", "personalInfo", "userInfo"])
  },
  data() {
    return {
      ruleForm: {},
      rules: {
        name: [
          {
            required: true,
            trigger: "blur",
            validator: chnName
          }
        ],
        personal_en_name: [
          {
            required: true,
            trigger: "blur",
            validator: enName
          }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        certificates_type: [
          { required: true, message: "请选择证件类型", trigger: "change" }
        ],
        certificates_number: [
          { required: true, message: "请输入证件号码", trigger: "blur" }
        ],
        birthday: [
          { required: true, message: "请选择出生日期", trigger: "change" }
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
            message: "请选择市",
            trigger: "change"
          }
        ],
        native_place: [
          { required: true, message: "请输入具体地址", trigger: "blur" }
        ],
        mailing_address: [
          { required: true, message: "请输入邮寄地址", trigger: "blur" }
        ],
        email: [
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        educational_information: [
          { required: true, message: "请选择教育程度", trigger: "change" }
        ]
      },
      province: [],
      city: [],
      district: [],
      disabled: false,
      loading: false,
      dicData: {
        certificates_type: "certificates_type",
        education: "education"
      },
      educationList: [],
      certificatesList: [],
      uploadFiles: [],
      localFile: {},
      error: "",
      dialogVisible: false,
      dialogImageUrl: "",
      active: "",
      imageUrl: ""
    };
  },
  watch: {
    "ruleForm.province"(val) {
      GetDistrictList({ parent_id: val }).then(data => {
        this.city = data.data.result.items;
        this.ruleForm.city = this.city[0].id;
        this.chooseCity(this.ruleForm.city);
      });
    },
    "ruleForm.certificates_number"(val) {
      if (getBirthdayFromIdCard(val)) {
        this.ruleForm.birthday = getBirthdayFromIdCard(val);
      }
    }
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      // 数据回填
      this.$store.dispatch("GetPersonalInfo", this.userInfo).then(data => {
        window.console.log(data);
      });
      GetDistrictList({ parent_id: "-1" }).then(data => {
        if (data.data.result) {
          this.province = data.data.result.items;
        }
      });
      GetDicData({ classCode: this.dicData.certificates_type }).then(data => {
        if (data.data.result.length > 0) {
          this.certificatesList = data.data.result;
        }
      });
      GetDicData({ classCode: this.dicData.education }).then(data => {
        if (data.data.result.length > 0) {
          this.educationList = data.data.result;
        }
      });
    },
    sure(ruleForm) {
      window.console.log(this.ruleForm);
      if (!this.imageUrl) {
        this.error = "请上传头像";
      } else {
        this.error = "";
      }
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          if (this.imageUrl) {
            this.error = "";
            this.disabled = true;
          }
        } else {
          return false;
        }
      });
    },
    edit() {
      this.disable = false;
    },
    submit(ruleForm) {
      this.ruleForm.isFormSubmit = true;
      this.ruleForm.athletes_photo = this.localFile;
      window.console.log(this.ruleForm);
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          this.$confirm("提交后无法自行修改，是否提交?", "确认信息", {
            distinguishCancelAndClose: true,
            confirmButtonText: "提交"
          }).then(() => {
            UpdateorInsertAthleteInfo(this.ruleForm).then(() => {
              this.$store
                .dispatch("GetPersonalInfo", this.userInfo)
                .then(data => {
                  window.console.log(data);
                });
            });
          });
        } else {
          return false;
        }
      });
    },
    loadJsonFromFile(file) {
      this.localFile = file.raw;
      let reader = new FileReader();
      reader.readAsDataURL(this.localFile);
      reader.onload = () => {
        const isJPG =
          this.localFile.type === "image/jpeg" ||
          this.localFile.type === "image/png";
        const isLt4M = this.localFile.size / 1024 / 1024 < 4;
        if (!isJPG) {
          this.localFile = {};
          this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
        } else {
          this.imageUrl = reader.result;
        }
        if (!isLt4M) {
          this.$message.error("上传头像图片大小不能超过 4MB!");
        }
        return isJPG && isLt4M;
      };
    },
    imgMouseover() {
      this.active = "display:block;opacity: 1;";
    },
    imgMouseleave() {
      this.active = "display:none;opacity: 0;";
    },
    handlePictureCardPreview() {
      this.dialogVisible = true;
      this.dialogImageUrl = this.imageUrl;
    },
    handleRemove() {
      this.imageUrl = "";
      this.localFile = {};
      this.active = "display:none;opacity: 0;";
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
.appraiserInfo {
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
    .submit {
      .el-form-item__content {
        margin-left: 0px !important;
        text-align: center;
        margin: 30px 0px;
      }
    }
    .avatar-uploader {
      position: relative;
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
    .el-upload-show {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      text-align: center;
      color: #fff;
      opacity: 0;
      display: none;
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0.5);
      transition: opacity 0.3s;
      line-height: 9;
      .el-upload-span1 {
        span {
          padding: 0px 20px;
        }
      }
    }
  }
}
</style>