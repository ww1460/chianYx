<template>
  <div class="grade" style="width:60%">
    <h3>申请证书证章</h3>
    <p>申请须知:如果首次申请考评员证书证章，仅需支付快递费用。</p>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="收件人" prop="receiver">
        <el-input
          type="text"
          v-model="ruleForm.receiver"
        ></el-input>
      </el-form-item>
      <el-form-item label="申请类型" prop="appType">
          <el-cascader
            v-model="ruleForm.appType"
            autocomplete="off"
            :options="options"
            @change="handleChange"
            style="width:100%"
          ></el-cascader>
      </el-form-item>
      <el-form-item label="手机号码" prop="tel">
        <el-input
          type="text"
          v-model="ruleForm.tel"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="邮寄地址">
        <el-form-item
          prop="province"
          style="width:32%;float:left;margin-right:3%"
        >
          <el-select v-model="ruleForm.province" placeholder="请选择省">
            <el-option
              v-for="item in province"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="city" style="width:31%;float:left;margin-right:3%">
          <el-select v-model="ruleForm.city" placeholder="请选择市">
            <el-option
              v-for="item in city"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="area" style="width:31%;float:left">
          <el-select  v-model="ruleForm.area" placeholder="请选择区" >
            <el-option
              v-for="item in area"
              :key="item.value"
              :label="item.label"
              :value="item.value"        
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form-item>
      <el-form-item label="详细地址" prop="addressDetail">
        <el-input
          type="text"
          v-model="ruleForm.addressDetail"
        ></el-input>
      </el-form-item>
      <!-- <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item> -->
       <el-form-item class="submit">
          <el-button
                type="danger"
                @click="submitForm('ruleForm')"
                style="width:100px;height:40px"
                
           >提 交</el-button>
          <el-button type="danger" @click="back" style="width:100px;height:40px">返回</el-button>
       </el-form-item>
      <el-form-item>
          

        
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    //验证用户名
    var checkReceiver = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
    };
    //验证申请类型
    var checkappType = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("申请类型不能为空"));
      }
    };
    //验证手机号
    var checkTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
    };
    //验证省市区
    var checkProvince = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("省不能为空"));
      }
    };
    var checkCity = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("市不能为空"));
      }
    };
    var checkArea = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("区不能为空"));
      }
    };
    //详细地址
    var checkaddressDetail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("详细地址不能为空"));
      }
    };
    // var checkAge = (rule, value, callback) => {
    //   if (!value) {
    //     return callback(new Error('年龄不能为空'));
    //   }
    //   setTimeout(() => {
    //     if (!Number.isInteger(value)) {
    //       callback(new Error('请输入数字值'));
    //     }
    //   }, 1000);
    // };

    return {
      province: [
        {
          value: "0",
          label: "山东省"
        }
      ],
      city: [
        {
          value: "0",
          label: "青岛市"
        }
      ],
      area: [
        {
          value: "0",
          label: "李沧区"
        }
      ],
      activeIndex: "1",
      activeIndex2: "1",
      ruleForm: {
        receiver: "",
        tel: "",
        provice: "",
        city: "",
        area: "",
        addressDetail: "",
        appType:"",
      },
      rules: {
        // age: [
        //   { validator: checkAge, trigger: 'blur' }
        // ],
        receiver: [{ validator: checkReceiver, trigger: "blur" }],
        appType: [{ validator: checkappType, trigger: "blur" }],
        tel: [{ validator: checkTel, trigger: "blur" }],
        province: [{ validator: checkProvince, trigger: "blur" }],
        city: [{ validator: checkCity, trigger: "blur" }],
        area: [{ validator: checkArea, trigger: "blur" }],
        addressDetail: [{ validator: checkaddressDetail, trigger: "blur" }]
      },
      options: [
        {
          value: 'first',
          label: '一级',
          children: [{
            value: 'zhengshu',
            label: '证书',
          }, {
            value: 'jhuizhang',
            label: '徽章',
          }, {
            value: 'jhuizhang2',
            label: '证书+徽章',
          }]
        }, 
      ],
    };
   
        
      
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    },

    handleSelect(key, keyPath) {
      window.console.log(key, keyPath);
    },

    handleChange(value) {
       window.console.log(value);
    },
    back(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="less" scoped>
.grade {
  h3 {
    margin: 15px 0;
  }
  p {
    color: #ea0000;
    margin-bottom: 15px;
  }
}
</style>
