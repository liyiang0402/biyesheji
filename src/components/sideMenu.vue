<template>
<div class="sideMenu">
  <el-menu class="el-menu-vertical-demo" :default-active="onRoutes" unique-opened router background-color="#2E363F" text-color="#FFFFFF">
    <template v-for="(item,index) in items">
          <el-submenu :key="item" :index="index+''" v-if="item.subs">
            <template slot="title">
              <i :class="item.icon"></i>{{item.title}}
            </template>
            <el-menu-item v-for="(subItem,index) in item.subs" :key="subItem.index" :index="subItem.index">{{subItem.title}}</el-menu-item>
          </el-submenu>
        <el-menu-item :key="item" :index="item.index" v-else><i :class="item.icon"></i>{{ item.title }}</el-menu-item>
    </template>
  </el-menu>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          icon: 'el-icon-zhuye',
          index: '/home/homepage',
          title: '首页'
        },
        {
          icon: 'el-icon-fuzhuangshichang',
          index: '2',
          title: '服装管理',
          subs: [
            {
              index: '/home/addclothing',
              title: '新增服装'
            },
            {
              index: '/home/mycloth',
              title: '我的服装'
            }
          ]
        },
        {
          icon: 'el-icon-shenqingshenpi',
          index: '3',
          title: '订单管理',
          subs: [
            {
              index: '/home/allorders',
              title: '全部订单'
            },
            {
              index: '/home/refound',
              title: '退款处理'
            }
          ]
        },
        {
          icon: 'el-icon-star-on',
          index: '/home/mine',
          title: '个人中心'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.sideMenu{
  display: block;
  width: 220px;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  background: #2E363F;
  height: 100%;
}

</style>
