<template>
  <div class="application">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClickTab">
      <el-tab-pane label="可申请" name="automatic">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            prop="1"
            label="赛事"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="2"
            label="等级"
            align="center"
          ></el-table-column>
          <el-table-column prop="4" label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                @click="application(scope.row)"
                type="text"
                size="small"
                >申请</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane
        label="手动申请"
        name="manual"
        style="padding-left:30px;text-align:center"
      >
        <el-select
          v-model="valueMeta"
          placeholder="请选择赛事"
          style="margin-top:20px"
        >
          <div class="el-input" style="width:90%;margin-left:5%;">
            <input
              type="text"
              placeholder="请输入"
              class="el-input__inner"
              v-model="dropDownValue"
              @keyup="dropDownSearch"
            />
          </div>
          <el-option
            v-for="item in optionsMetaShow"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-button type="danger" style="margin-top:20px">申请</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "automatic",
      dropDownValue: "",
      optionsMetaShow: ["赛事1", "赛事2", "赛事3", "赛事4"],
      valueMeta: [],
      tableData: [
        {
          1: "2016-05-02",
          2: "王小虎",
          3: "上海市普陀区金沙江路 1518 弄"
        },
        {
          1: "2016-05-04",
          2: "王小虎",
          3: "上海市普陀区金沙江路 1517 弄"
        },
        {
          1: "2016-05-01",
          2: "王小虎",
          3: "上海市普陀区金沙江路 1519 弄"
        },
        {
          1: "2016-05-03",
          2: "王小虎",
          3: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      imageUrl: ""
    };
  },
  methods: {
    handleClickTab(tab, event) {
      window.console.log(tab, event);
    },
    application(row) {
      window.console.log(row);
    },
    dropDownSearch() {},
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style lang="less" scoped>
// .avatar-uploader{
//     .el-upload {
//       border: 1px dashed #d9d9d9;
//       border-radius: 6px;
//       cursor: pointer;
//       position: relative;
//       overflow: hidden;
//     }
//     .el-upload:hover {
//       border-color: #409EFF;
//     }
// }
.avatar-uploader-icon {
  margin-top: 20px;
  border: 1px dashed #d9d9d9;
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
</style>
