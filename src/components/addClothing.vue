<template lang="html">
    <el-form :model="addform" status-icon ref="addform" :rules="rules" label-width="100px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="服装名称" required prop="clothName">
            <el-input v-model="addform.clothName" minlength="2" maxlength="8" placeholder="请输入服装名称"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item label="服装类型" required  prop="clothType">
            <el-select v-model="addform.clothType" placeholder="请选择服装类型">
              <el-option label="类型一" value="1"></el-option>
              <el-option label="类型二" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item label="服装数量" required  prop="clothNum">
            <el-input-number v-model="addform.clothNum" @change="handleChange" :min="1"  label="服装数量"></el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5">
          <el-form-item label="服装价格" required  prop="clothPrice">
            <el-input v-model="addform.clothPrice" auto-complete="off"  suffix-icon="el-icon-renminbi" placeholder="请输入单价/天"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="服装描述"  prop="clothDes">
            <el-input
              type="textarea"
              :rows="3"
              placeholder="请输入对服装的描述"
              v-model="addform.clothDes">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- <el-row>
        <el-col :span="21">
          <el-form-item label="服装照片"   prop="clothImg">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <li v-for="img in clothImg">
                <img width="100%" :src="dialogImageUrl" alt="">
              </li>
            </el-dialog>
          </el-form-item>
        </el-col>
      </el-row> -->
      <el-row>
        <el-col :span="7">
          <el-form-item>
            <el-button type="primary" @click="submitForm('addform')">提交</el-button>
            <el-button @click="resetForm('addform')">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
</template>

<script>
export default {
  data () {
    var checkPrice = (rule, value, callback) => {
          let reg=/^[0-9]+$$/;
           if (!value) {
             return callback(new Error('单价不能为空'));
           }
           if (!reg.test(value)) {
             console.log(value);
             return callback(new Error('请输入数字'));;
          }else {
            callback();
          }
        }
    return {
      addform: {
        clothName: '',
        clothType: '',
        clothNum: 1,
        clothPrice: 0,
        clothDes: '',
      },
      rules: {
            clothName: [
              { required: true, message: '请输入服装名称', trigger: 'blur' },
              { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
            ],
            clothType: [
              { required: true, message: '请选择服装类型', trigger: 'change' }
            ],
            clothPrice: [
              // { required: true, message: '请输入正确的单价', trigger: 'blur' },
              { validator: checkPrice, trigger: 'keyup' }
            ]
          }
    }
  },
  methods: {
    // getDate () {
    //   var date = new Date(),
    //       year = date.getFullYear(),
    //       month = date.getFull
    //
    // },
    handleChange (value) {
      // console.log(value)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;  //后期需要修改
      this.dialogVisible = true;
    },
    handleRemove(file, fileList) {
       console.log(file, fileList);
     },
     resetForm(formName) {
       this.$confirm('您将重置表单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$refs[formName].resetFields();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消重置'
          });
        });
     },
     submitForm(formName) {
       this.$refs[formName].validate((valid) => {
                 if (valid) {
                   let that = this;
                   this.$axios.post('/api/addCloth',that.addform)
                     .then(function(res){
                       that.$message({
                         message: '提交成功',
                         center: true
                       });
                       that.$refs[formName].resetFields();
                     })
                 }
               });
      },
  }
}
</script>

<style lang="css" scoped>

</style>
