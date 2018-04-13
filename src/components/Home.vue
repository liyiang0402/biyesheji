<template lang="html">
  <div class="wrapper">
    <admin-header class="admin-header"></admin-header>
    <div class="container">
      <side-menu class="side-menu"></side-menu>
      <div class="content">
        <el-breadcrumb class="el-breadcrumb" separator="/">
          <el-breadcrumb-item v-for="item in itemlist" :to="item.path">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
          <transition name="move" mode="out-in"><router-view></router-view></transition>
      </div>
    </div>
  </div>
</template>

<script>
import adminHeader from './admin-header'
import sideMenu from './sideMenu'

export default {
  components: {
    adminHeader,
    sideMenu
  },
  computed: {
    itemlist () {
      return this.$route.meta
    }
  }
}
</script>

<style lang="css" scoped>
.container{
  width: 100%;
  display: flex;
}
.side-menu{
  display: block;
}
.content{
  background: none repeat scroll 0 0 #fff;
  position: absolute;
  left: 250px;
  right: 0;
  top: 100px;
  bottom: 0;
  width: auto;
  padding: 40px;
  box-sizing: border-box;
  overflow-y: scroll;
}
.el-breadcrumb{
  margin-bottom: 30px;
}
</style>
