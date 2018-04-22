<template lang="html">
  <div class="myapply">
    <el-input
      class="search"
      placeholder="筛选关键词"
      suffix-icon="el-icon-search"
      v-model="filterTable">
    </el-input>
    <el-table
      :data="table_data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 140%">
      <el-table-column
        label="服装id"
        width="140"
        prop="cid">
      </el-table-column>
      <el-table-column
        label="服装名称"
        width="140"
        prop="clothName">
      </el-table-column>
      <el-table-column
        label="服装类型"
        width="140"
        prop="clothType">
      </el-table-column>
      <el-table-column
        label="服装价格"
        width="140"
        prop="clothPrice">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.clothPrice }}</span>
          <i class="el-icon-renminbi"></i>
        </template>
      </el-table-column>
      <el-table-column
        label="服装描述"
        width="140"
        prop="clothDes">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row.cid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="7"
       @current-change="current_change">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      pagesize: 7,
      currentPage: 1,
      filterTable: ''
    }
  },
  created () {
    let that = this
    this.$axios.get('/api/getCloth')
      .then(function (res) {
        that.data = res.data.data
      })
  },
  computed: {
    total () {
      if (this.table_data.length) {
        return this.table_data.length
      } else {
        return 1
      }
    },
    table_data () {
      const _this = this
      if (_this.filterTable) {
        return _this.data.filter(function (d) {
          if (d.clothName.indexOf(_this.filterTable) > -1 || d.clothDes.indexOf(_this.filterTable) > -1
          ) {
            return d
          }
        })
      } else {
        return _this.data
      }
    }
  },
  methods: {
    current_change: function (currentPage) {
      this.currentPage = currentPage
    },
    handleEdit: function (index, row) {
      this.$router.push({
        name: 'editCloth',
        params: {
          cid: row.cid
        }
      })
    },
    handleDelete: function (index, cid) {
      this.data.splice(index, 1)
      this.$axios.get('/api/deleteCloth/' + cid)
        .then((res) => {
          this.$axios.get('/api/getCloth').then((res) => {
            this.data = res.data.data
            this.$router.go(0)
          })
        })
    }
  }
}
</script>

<style lang="css" scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.search{
  position: relative;
  top: -55px;
  left: 200px;
  width: 300px;
}
</style>
