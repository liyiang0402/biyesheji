<template lang="html">
<div class="edit-order">
  <el-form :model="editOrderData" status-icon ref="editOrderData" :rules="editrules" label-width="100px">
    <el-row>
      <el-col :span="8">
        <el-form-item label="订单id" prop="editOrderId">
          <el-input v-model="editOrderData.editOrderId" :disabled="true"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="订单时间"  prop="editDate">
          <el-input v-model="editOrderData.editOrderDate" :disabled="true"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item label="买家姓名" prop="editName">
          <el-input v-model.number="editOrderData.editName" :disabled="true"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="租赁时间">
          <el-input v-model="editOrderData.editDate" :disabled="true"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-form-item label="订单状态">
          <el-select v-model="editOrderData.editOrderType" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="10">
        <el-form-item label="买家地址" prop="editAddress">
          <el-input v-model="editOrderData.editAddress" :disabled="true"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <el-form-item label="操作描述"  prop="editClothDes">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入对操作的描述"
            v-model="editOrderData.editClothDes">
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="0" :span="6">
        <el-form-item>
          <el-button type="primary" @click="submitForm('editOrderData')">提交</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      editOrderData:{},
      options: [
        {
          value: '未发货',
          label: '未发货'
        },
        {
          value: '已发货',
          label: '已发货'
        },
        {
          value: '已签收',
          label: '已签收'
        }
      ]
    }
  },
  created:function () {
    this.editOrderData.editOrderId = this.$route.query.editOrderId;
    this.editOrderData.editOrderDate = this.$route.query.editOrderDate;
    this.editOrderData.editName = this.$route.query.editName;
    this.editOrderData.editAddress = this.$route.query.editAddress;
    this.editOrderData.editDate = this.$route.query.editDate + ' 天';
    // this.editOrderData.editOrderType = this.$route.query.editOrderType;
  },
  methods: {
    submitForm(formName) {
      let that = this;
      this.$axios.post('http://rapapi.org/mockjsdata/33115/api/addclothdata',that.formName)
      .then(function(res){
        that.$message({
          message: '提交成功',
          center: true
        });
      })
    }
  }
}
</script>

<style lang="css">
</style>
