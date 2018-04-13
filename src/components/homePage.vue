<template lang="html">
  <div class="homepage-container">
    <div class="profit common">
      本周利润：10000 <i class="el-icon-renminbi"></i>
    </div>
    <div class="clothNum common">
      服装总量：10000 件
    </div>
    <div class="orderNum common">
      订单总量：10000 个
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.homepage-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.common{
  width: 30%;
  height: 150px;
  line-height: 150px;
  border: 1px solid #f4f4f4;
  border-radius: 50px;
  text-align: center;
}
.profit{
  background-color: #409EFF;
}
.clothNum{
  background-color: #67C23A;
}
.orderNum{
  background-color: #F56C6C;
}
</style>
