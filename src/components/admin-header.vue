<template lang="html">
<div class="header">
  <div class="logo">
    <span>后台管理系统</span>
  </div>
  <div class="user-info">
    <el-dropdown trigger="click">
      <span class="user-info-name el-dropdown-link">
        <img class="user-info-img" src="../assets/cat.jpg">
        {{userName}}
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><span @click="logout">退出登录</span></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</div>
</template>

<script>
import Bus from '../eventBus.js'

export default {
  props: {
    userName: {
      type: String,
      default: '用户名'
    }
  },

  computed: {
    userName1:function () {
      return this.userName;
    }
  },
  created: function(){
    Bus.$on('userData', (arg)=>{
      if (arg) {
        this.userName = arg
      } else {
        this.userName = userName1
      }
    })
  },
  methods: {
    logout() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="css" scoped>
.header{
  width: 100%;
  height: 70px;
  position: relative;
  overflow: hidden;
  font-family: "PingFang SC";
  color: #fff;
  background-color: #242f42;
  box-sizing: border-box;
}
.logo{
  float: left;
  width: 200px;
  line-height: 70px;
  text-align: center;
}
.user-info{
  float: right;
  line-height: 70px;
  font-size: 13px;
  padding-right: 50px;
}
.user-info-img{
  position: absolute;
  left:0;
  top:15px;
  width:40px;
  height:40px;
  border-radius: 50%;
}
.el-dropdown-link{
    position: relative;
    display: inline-block;
    padding-left: 50px;
    color: #fff;
    cursor: pointer;
    vertical-align: middle;
}
.el-dropdown-menu__item{
    text-align: center;
}
</style>
