<template>
  <div class="testScheduling">
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
      :limit='1'
      :before-upload="beforeUpload"
      :on-exceed="handleExceed"
      >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传xls/xlsx文件，且不超过1MB</div>
    </el-upload>
    <el-button type="primary" @click="submitUpload()" style="margin-top:15px">确定</el-button>
    <el-button @click="visible = false">取消</el-button>
  <br/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        files:'',
        fileName:''
      }
    },
    methods:{
      handleExceed() {
        this.$message.warning('当前限制选择 1 个文件,如需更换文件请先删除已上传的');
      },
      beforeUpload(file){   
          //window.console.log(file,'文件');
          this.files = file;
          const extension = file.name.split('.')[1] === 'xls';
          const extension2 = file.name.split('.')[1] === 'xlsx';
          const isLt2M = file.size / 1024 / 1024 < 1;
          if (!extension && !extension2) {
            this.$message.error('上传模板只能是 xls、xlsx格式!');
            return  false // 返回false不会自动上传
          }
          if (!isLt2M) {
            this.$message.error('上传模板大小不能超过 1MB!');
            return false 
          }
          this.fileName = file.name;
          window.console.log(this.files);
          return 
      },
      submitUpload() {
        // window.console.log('上传'+this.files.name)
        // if(this.fileName == ""){
        //   this.$message.warning('请选择要上传的文件！')
        //   return false
        // }
        // let fileFormData = new FormData();
        // fileFormData.append('file', this.files, this.fileName);//filename是键，file是值，就是要传的文件，test.zip是要传的文件名
        // let requestConfig = {
        //   headers: {
        //   'Content-Type': 'multipart/form-data'
        //   },
        // }
        // this.$http.post(`/basedata/oesmembers/upload?companyId=`+this.company, fileFormData, requestConfig).then((res) => {
        //   if (data && data.code === 0) {
        //   this.$message({
        //   message: '操作成功',
        //   type: 'success',
        //   duration: 1500,
        //   onClose: () => {
        //   this.visible = false
        //   this.$emit('refreshDataList')
        //   }
        //   })
        //   } else {
        //   this.$message.error(data.msg)
        //   }
        // }) 
      }
    }
  }
</script>

<style lang="less">
.testScheduling{
  text-align:center;
  .el-upload{
    width:60%;
    margin: auto;
    .el-upload-dragger{
      width:100%
    }
  }
}
</style>