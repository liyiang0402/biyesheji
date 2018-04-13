<template lang="html">
<div class="orders">
  <el-table
      :data="tableData"
      style="width: 140%">
      <el-table-column
        label="订单id"
        width="140">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.orderId }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="日期"
        width="140">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.orderDate }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        width="140">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="租赁时间"
        width="140">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}天</span>
        </template>
      </el-table-column>
      <el-table-column
        label="订单状态"
        width="140">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.orderType }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
  data() {
      return {
        tableData: [{
          orderId: '1234561',
          orderDate: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          orderType:'未发货',
          date : 19
        }, {
          orderId: '1234562',
          orderDate: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          orderType:'已发货',
          date : 13
        }, {
          orderId: '1234563',
          orderDate: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          orderType:'已发货',
          date : 100
        }, {
          orderId: '1234564',
          orderDate: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          orderType:'未发货',
          date : 10
        }]
      }
    },
    methods: {
      current_change: function (currentPage) {
        this.currentPage = currentPage
      },
      handleEdit: function (index, row) {
        this.$router.push({
          name: 'editOrder',
          params: {
            id: row.orderId,
          },
          query: {
            editOrderId : row.orderId,
            editOrderDate : row.orderDate,
            editDate : row.date,
            editName : row.name,
            editAddress : row.address,
            editOrderType : row.orderType
          }
        });
      },
      handleDelete: function (index, row) {
        this.tableData.splice(index, 1)
      }
     }
}
</script>

<style lang="css" scoped>
</style>
