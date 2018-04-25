<template lang="html">
<div class="editcloth">
  <el-form :model="editData" status-icon ref="editData" :rules="editrules" label-width="100px">
    <el-row>
      <el-col :span="8">
        <el-form-item label="服装名称" required >
          <el-input v-model="editData.clothName" placeholder="请输入服装名称"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14">
        <el-form-item label="服装类型" required >
          <el-select v-model="editData.clothType" placeholder="请选择服装类型">
            <el-option label="类型一" value="1"></el-option>
            <el-option label="类型二" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14">
        <el-form-item label="服装数量" required>
          <el-input-number v-model="editData.clothNum" :min="1" label="服装数量"></el-input-number>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5">
        <el-form-item label="服装价格" required  >
          <el-input v-model.number="editData.clothPrice" auto-complete="off"  suffix-icon="el-icon-renminbi" placeholder="请输入单价/天"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <el-form-item label="服装描述" >
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入对服装的描述"
            v-model="editData.clothDes">
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item>
          <el-button type="primary" @click="submitForm('editData')">提交</el-button>
          <el-button @click="resetForm('editData')">重置</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
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
      cid:'',
      editData: {},
      editrules: {
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
  created:function () {
    this.cid = this.$route.params.cid;
    this.$axios.get('/api/getaCloth/'+this.cid)
      .then((res)=> {
        this.editData.clothDes = res.data.data[0].clothDes;
        this.editData.clothName = res.data.data[0].clothName;
        this.editData.clothNum = res.data.data[0].clothNum;
        this.editData.clothType = res.data.data[0].clothType;
        this.editData.clothPrice = res.data.data[0].clothPrice;
      });
  },
  methods: {
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
                  let url = '/api/editCloth/'+this.cid;
                  // delete this.editData[cid];
                  console.log(11,this.editData);
                  console.log('/api/editCloth/'+this.cid);
                  this.$axios.post('/api/editCloth/'+this.cid,that.editData)
                    .then(function(res){
                      that.$message({
                        message: '提交成功',
                        center: true
                      });
                    })
                    this.$router.push({path:'/home/mycloth'})
                } else {
                  return false;
                }
              });
     },
  }
}
</script>

<style lang="css" scoped>
</style>
