<template>
  <div class="qualificationApplication">
    <personalHead title="资质申请" :hide="true" />
    <div class="form">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="200px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="机构名称" prop="mechanism_fullName">
              <el-input
                type="name"
                v-model="ruleForm.mechanism_fullName"
                placeholder="请输入您的真实姓名"
                style="width:100%"
                :disabled="disabled"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="营业执照" prop="business_license_key">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :on-remove="handleRemove"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <!-- <el-dialog :visible.sync="dialogVisible">
                <img v-if="imageUrl" :src="imageUrl" />
              </el-dialog>-->
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="场地" prop="address">
              <el-cascader
                :options="options"
                clearable
                v-model="ruleForm.address"
                placeholder="选择您所在场地"
                style="width:100%"
                :disabled="disabled"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="具体地址" prop="detailed_address">
              <el-input
                v-model="ruleForm.detailed_address"
                placeholder="请填写您的具体地址"
                style="width:100%"
                :disabled="disabled"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="申办级别" prop="bidlevel">
              <el-checkbox-group v-model="ruleForm.bidlevel">
                <el-checkbox
                  v-for="(item,index) in levelList"
                  :label="item.value"
                  :key="index"
                >{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="机构资质" prop="insQua">
              <el-checkbox-group v-model="ruleForm.insQua">
                <el-checkbox
                  v-for="(item,index) in insQuaList"
                  :label="item.value"
                  :key="index"
                >{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="信用" prop="credit">
              <el-checkbox-group v-model="ruleForm.credit">
                <el-checkbox
                  v-for="(item,index) in creditList"
                  :label="item.value"
                  :key="index"
                >{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="场馆场地设施器材" prop="equipment">
              <el-checkbox-group v-model="ruleForm.equipment">
                <el-checkbox
                  v-for="(item,index) in equipmentList"
                  :label="item.value"
                  :key="index"
                >{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="人员管理" prop="PerManage">
              <el-checkbox-group v-model="ruleForm.PerManage">
                <el-checkbox
                  v-for="(item,index) in PerManageList"
                  :label="item.value"
                  :key="index"
                >{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="宣传推广" prop="pubPromotion">
              <el-checkbox-group v-model="ruleForm.pubPromotion">
                <el-checkbox
                  v-for="(item,index) in pubPromotionList"
                  :label="item.value"
                  :key="index"
                >{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="机构及场馆设施简介" prop="institutionsVenues">
              <el-input type="textarea" v-model="ruleForm.institutionsVenues"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="宣传推广和教育资源" prop="pubEduResources">
              <el-input type="textarea" v-model="ruleForm.pubEduResources"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="近两年承办培训班或其他重大活动的主要情况" prop="mainSituation">
              <el-input type="textarea" v-model="ruleForm.mainSituation"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item class="agree" prop="agree">
              <el-checkbox-group v-model="ruleForm.agree">
                <el-checkbox>
                  本机构自愿申请成为中国羽毛球协会运动水平等级评定测试机构，承诺并保
                  <br />证以上所提交的材料真实有效，并愿意承担相应的法律责任。
                </el-checkbox>
              </el-checkbox-group>
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

export default {
  components: {
    personalHead
  },
  data() {
    return {
      ruleForm: {
        bidlevel: [],
        insQua: [],
        credit: [],
        equipment: [],
        PerManage: [],
        pubPromotion: [],
        agree:[]
      },
      rules: {
        mechanism_fullName: [
          { required: true, message: "请填写机构名称", trigger: "blur" }
        ],
        business_license_key: [
          { required: true, message: "请上传营业执照", trigger: "blur" }
        ],
        address: [{ required: true, message: "请选择场地", trigger: "change" }],
        detailed_address: [
          { required: true, message: "请填写具体地址", trigger: "blur" }
        ],
        bidlevel: [
          {
            required: true,
            message: "请选择申办级别",
            trigger: "change",
            type: "array"
          }
        ],
        insQua: [
          {
            required: true,
            message: "请选择机构资质",
            trigger: "change",
            type: "array"
          }
        ],
        credit: [
          {
            required: true,
            message: "请选择信用",
            trigger: "change",
            type: "array"
          }
        ],
        equipment: [
          {
            required: true,
            message: "请选择场馆场地设施器材",
            trigger: "change",
            type: "array"
          }
        ],
        PerManage: [
          {
            required: true,
            message: "请选择人员管理",
            trigger: "change",
            type: "array"
          }
        ],
        pubPromotion: [
          {
            required: true,
            message: "请选择宣传推广",
            trigger: "change",
            type: "array"
          }
        ],
        institutionsVenues: [
          {
            required: true,
            message: "请填写机构及场馆设施简介",
            trigger: "blur"
          }
        ],
        pubEduResources: [
          {
            required: true,
            message: "请填写宣传推广和教育资源",
            trigger: "blur"
          }
        ],
        mainSituation: [
          {
            required: true,
            message: "请填写近两年承办培训班或其他重大活动的主要情况",
            trigger: "blur"
          }
        ],
        agree: [
          {
            required: true,
            message: "请确认资料真实性",
            trigger: "change"
          }
        ]
      },
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ],
      // 申办级别
      levelList: [
        {
          label: "六级",
          value: "0"
        },
        {
          label: "七级",
          value: "1"
        },
        {
          label: "八级",
          value: "2"
        },
        {
          label: "少儿一级",
          value: "3"
        },
        {
          label: "少儿二级",
          value: "4"
        },
        {
          label: "少儿三级",
          value: "5"
        },
        {
          label: "少儿四级",
          value: "6"
        },
        {
          label: "少儿五级",
          value: "7"
        },
        {
          label: "少儿六级",
          value: "8"
        },
        {
          label: "少儿七级",
          value: "9"
        }
      ],
      // 机构资质
      insQuaList: [
        {
          label: "在国家各级工商或民政部门有效注册",
          value: "0"
        },
        {
          label: "具备独立法人资格",
          value: "1"
        },
        {
          label: "有羽毛球或体育相关培训资质和经营许可",
          value: "2"
        }
      ],
      // 信用
      creditList: [
        {
          label: "无重大投诉纠纷",
          value: "0"
        },
        {
          label: "无培训教学事故或考试意外事故",
          value: "1"
        },
        {
          label: "无虚假宣传、欺诈、违约等不良记录",
          value: "2"
        },
        {
          label: "三年内无违反《中国羽毛球协会章程》或其他规定的行为",
          value: "3"
        }
      ],
      // 场馆场地设施器材
      equipmentList: [
        {
          label: "有符合国家安全标准的室内场馆",
          value: "0"
        },
        {
          label: "至少有4片标准羽毛球塑胶场地",
          value: "1"
        },
        {
          label: "提供充足的评定所需用球和其他设施器材",
          value: "2"
        }
      ],
      // 人员管理
      PerManageList: [
        {
          label: "有专职负责等级评定的工作人员",
          value: "0"
        },
        {
          label: "能根据相关规定选用考评员",
          value: "1"
        },
        {
          label: "有保证测试正常进行的安全和医护人员",
          value: "2"
        }
      ],
      // 宣传推广
      pubPromotionList: [
        {
          label:
            "协助中国羽毛球协会在自媒体平台对羽毛球运动水平等级评定工作进行宣传和推广",
          value: "0"
        },
        {
          label: "积极向教育部门推进，促进羽毛球运动水平等级评定工作进校园",
          value: "1"
        }
      ],
      imageUrl: "",
      dialogVisible: false,
      disabled: false,
      loading: false
    };
  },
  methods: {
    save(ruleForm) {
      window.console.log(this.ruleForm);
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
    }
  }
};
</script>
<style lang="less">
.qualificationApplication {
  .form {
    width: 70%;
    .el-form-item__label {
      padding-right: 42px;
      font-size: 14px;
      font-weight: 400;
    }
    .el-textarea__inner {
      min-height: 150px !important;
    }
    .agree .el-checkbox__input {
      position: relative;
      top: -20px;
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


