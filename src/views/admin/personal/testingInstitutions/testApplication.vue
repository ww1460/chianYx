<template>
  <div class="testApplication">
    <personalHead title="测试申请" :hide="true" />
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
            <el-form-item label="报 名 时 间" prop="registrration_time">
              <el-date-picker
                v-model="ruleForm.registrration_time"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width:100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="测 试 时 间" prop="test_time">
              <el-date-picker
                v-model="ruleForm.test_time"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width:100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="测 试 地 址" prop="testtAddress">
              <el-select v-model="ruleForm.testtAddress" placeholder="请选择" style="width:100%;">
                <el-option
                  v-for="item in testtAddressList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="测 试 等 级" prop="testtLevel">
              <el-select
                v-model="ruleForm.testtLevel"
                multiple
                placeholder="请选择测试等级"
                style="width:100%;"
              >
                <el-option
                  v-for="item in testtLevelList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="一级考评员" prop="firstAssessor">
              <el-select
                v-model="ruleForm.firstAssessor"
                multiple
                placeholder="请选择一级考评员"
                style="width:100%"
                :disabled="true"
                filterable
                remote
              >
                <el-option
                  v-for="item in firstAssessorList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <div class="add">
                <span @click="addAssessor(1)">添加</span>
              </div>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="二级考评员" prop="secondAssessor">
              <el-select
                v-model="ruleForm.secondAssessor"
                multiple
                placeholder="请选择二级考评员"
                style="width:100%"
                :disabled="true"
                filterable
                remote
              >
                <el-option
                  v-for="item in secondAssessorList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <div class="add">
                <span @click="addAssessor(2)">添加</span>
              </div>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="三级考评员" prop="thirdAssessor">
              <el-select
                v-model="ruleForm.thirdAssessor"
                multiple
                placeholder="请选择三级考评员"
                style="width:100%"
                :disabled="true"
                filterable
                remote
              >
                <el-option
                  v-for="item in thirdAssessorList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <div class="add">
                <span @click="addAssessor(3)">添加</span>
              </div>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="考评组长" prop="leader">
              <el-select
                v-model="ruleForm.leader"
                multiple
                placeholder="请选择考评组长"
                style="width:100%"
                :disabled="true"
                filterable
                remote
              >
                <el-option
                  v-for="item in leaderList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <div class="add">
                <span @click="addAssessor(4)">添加</span>
              </div>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="联系人" prop="contacts">
              <el-input v-model="ruleForm.contacts"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item label="联系电话" prop="phone">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24">
            <el-form-item class="submit">
              <el-button type="danger" @click="sub('ruleForm')" style="width:100px;height:40px">提 交</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <el-dialog :title="title" :visible.sync="dialogVisible" width="70%" class="visible">
      <el-row :gutter="10" style="border-bottom:1px solid #eee;">
        <el-col :xs="24" :sm="24" :md="18" style="border-right:1px solid #eee;">
          <el-row :gutter="11" style="margin-bottom:10px;">
            <el-col :xs="8" :sm="6" :md="8">
              <el-select
                v-model="searForm.province"
                placeholder="请选择省"
                size="medium"
                style="width:100%"
              >
                <el-option
                  v-for="item in province"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :xs="8" :sm="6" :md="8">
              <el-select
                v-model="searForm.city"
                placeholder="请选择城市"
                size="medium"
                style="width:100%"
              >
                <el-option
                  v-for="item in city"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :xs="8" :sm="6" :md="8">
              <el-select
                v-model="searForm.area"
                placeholder="请选择地区"
                size="medium"
                style="width:100%"
              >
                <el-option
                  v-for="item in area"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row :gutter="12" style="margin-bottom:10px;">
            <el-col :xs="8" :sm="8" :md="8">
              <el-input v-model="searForm.name" placeholder="姓名查询" size="medium" style="width:100%"></el-input>
            </el-col>
            <el-col :xs="16" :sm="16" :md="16">
              <el-button type="primary" icon="el-icon-search" size="medium">搜索</el-button>
              <el-button icon="el-icon-delete" size="medium">清空</el-button>
            </el-col>
          </el-row>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="1" label="姓名" align="center"></el-table-column>
            <el-table-column prop="2" label="性别" align="center"></el-table-column>
            <el-table-column prop="3" label="等级" align="center"></el-table-column>
            <el-table-column prop="4" label="地区" align="center"></el-table-column>
            <el-table-column prop="5" label="手机号" align="center"></el-table-column>
          </el-table>
          <div class="pagination">
            <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6">
          <div style="padding-left:10px;">
            <h3>已选{{title}}</h3>
          </div>
          <ul class="visible_ul">
            <li
              v-for="(item,index) in choseAppraiser"
              :key="index"
              class="choseLi"
              @mouseover="showIcon = item"
              @mouseleave="showIcon = ''"
            >
              <span class="name">{{item}}</span>
              <i
                :class="item == showIcon?'delet-icon el-icon-close':''"
                @click="remover(item,index)"
              ></i>
            </li>
          </ul>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">完 成</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import personalHead from "@/views/admin/components/personalHead.vue";
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
export default {
  components: {
    personalHead
  },
  data() {
    return {
      ruleForm: {
        firstAssessor: ["1", "2", "3"],
        secondAssessor: ["1", "2"],
        thirdAssessor: ["1", "2", "3", "6"],
        leader: ["1", "88", "3", "6"],
        testtLevel: []
      },
      firstAssessorList: [],
      secondAssessorList: [],
      thirdAssessorList: [],
      leaderList: [],
      rules: {
        registrration_time: [
          {
            required: true,
            message: "请选择报名时间",
            trigger: "change"
          }
        ],
        test_time: [
          {
            required: true,
            message: "请选择测试时间",
            trigger: "change"
          }
        ],
        testtAddress: [
          {
            required: true,
            message: "请选择测试地址",
            trigger: "change"
          }
        ],
        testtLevel: [
          {
            required: true,
            message: "请选择测试等级",
            trigger: "change"
          }
        ],
        leader: [
          {
            required: true,
            message: "请选择考评组长",
            trigger: "change"
          }
        ],
        contacts: [
          {
            required: true,
            message: "请填写联系人",
            trigger: "blur"
          }
        ],
        phone: [{ required: true, validator: checkPhone, trigger: "blur" }]
      },
      testtAddressList: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      testtLevelList: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      dialogVisible: false,
      title: "",
      tableData: [
        { 1: "瞎猫" },
        { 1: "瞎猫" },
        { 1: "瞎猫" },
        { 1: "瞎猫" },
        { 1: "瞎猫" }
      ],
      province: [],
      city: [],
      area: [],
      searForm: {},
      choseAppraiser: ["马宏伟", "马宏伟2", "马宏伟3"],
      showIcon: "",
      paging: {
        limit: 1,
        page: 1
      }
    };
  },
  methods: {
    sub(ruleForm) {
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
    addAssessor(i) {
      this.dialogVisible = true;

      switch (i) {
        case 1:
          window.console.log(i);
          this.title = "一级考评员";
          break;
        case 2:
          this.title = "二级考评员";
          break;
        case 3:
          this.title = "三级考评员";
          break;
        case 4:
          this.title = "考评组长";
          break;
        default:
          this.title = "";
      }
    },
    remover(item, index) {
      this.choseAppraiser.splice(index, 1);
      window.console.log(this.choseAppraiser);
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
    .add {
      color: #f56c6c;
      margin-left: 20px;
      cursor: pointer;
    }
    .submit{
        text-align: center;
        .el-form-item__content{
            margin-left: 0px!important

        }
    }
  }
  .visible {
    .visible_ul {
      height: 400px;
      overflow-x: hidden;
      overflow-y: scroll;

      .choseLi {
        position: relative;
        margin: 10px 0px;
        padding: 0px 10px;
        font-size: 16px;
        display: flex;
        .name {
          display: inline-block;
          padding: 7px;
        }
        .delet-icon {
          border-radius: 50%;
          background: #aaa;
          color: #fff;
          position: absolute;
          right: 10px;
          top: 50%;
          margin-top: -7px;
        }
      }
      .choseLi:hover {
        background: #eee;
        border-radius: 10px;
      }
    }
    .visible_ul::-webkit-scrollbar {
      display: none;
    }
    .pagination {
      text-align: center;
      margin: 30px 0px 10px 0px;
    }
  }
}
</style>


