<template lang="html">
  <div class="mine">
    <el-form label-width="100px" ref="userData" :inline="true" :model="mineData">
      <el-row>
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input v-model="userData.userName" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="userData.phoneNumber" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :offset="1" :span="6">
          <el-form-item>
            <el-button type="primary" @click="change">提交</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import Bus from '../eventBus.js'

export default {
  data() {
    return {
      userData: {
      },
    }
  },
  created() {
      this.uid = localStorage.getItem('uid')
      this.$axios.get('/api/getUser/'+this.uid)
        .then((res) => {
          this.userData = res.data.data[0];
        })
  },
  methods: {
    change() {
      Bus.$emit('userData',this.userData.userName)
      this.$axios.post('/api/editUser/'+this.uid,this.userData).then((res) => {
        return true
      })
    }
  }
}
</script>

<style lang="css">
</style>
