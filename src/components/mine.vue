<template lang="html">
  <div class="mine">
    <el-form label-width="100px" ref="mineData" :inline="true" :model="mineData">
      <el-row>
        <el-col :span="8">
          <el-form-item label="商店名称">
            <el-input v-model="mineData.shopName" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="店主姓名">
            <el-input v-model="mineData.shopOwnerName" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :offset="0" :span="6">
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
      mineData: {
        shopName:'aa',
        shopOwnerName: '',
      },
    }
  },
  methods: {
    change() {
      Bus.$emit('mineData',this.mineData.shopOwnerName)
    }
  }
}
</script>

<style lang="css">
</style>
