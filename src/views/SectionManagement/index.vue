<template>
  <div class="SectionManagement">
    <div class="title">
      <el-card class="box-card">
        <div class="text item">
          <breadcrumb></breadcrumb>
        </div>
      </el-card>
    </div>
    <el-card class="main">
      <div>
        <div class="demo-input-suffix">
          <span>关键字：</span>
          <el-input
            placeholder="请输入关键字"
            v-model="Keyword"
            clearable>
          </el-input>
          <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
          <el-button icon="el-icon-refresh" size="small">重置</el-button>
        </div>
        <div class="table">
          <el-table
            :data="tableData"
            :row-class-name="tableRowClassName"
            style="width: 100%">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              prop="Id"
              label="序号"
              type="index"
              width="80">
            </el-table-column>
            <el-table-column
              prop="code"
              label="编码">
            </el-table-column>
            <el-table-column
              prop="name"
              label="名称">
            </el-table-column>
            <el-table-column
              prop="addTimeString"
              label="	添加时间">
            </el-table-column>
            <el-table-column
              prop="modifyTimeString"
              label="	更新时间">
            </el-table-column>
          </el-table>
        </div>
        <div class="fenye">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="40">
          </el-pagination>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  /* eslint-disable object-curly-spacing */

  import Breadcrumb from '@/components/Breadcrumb'
  // import {lists} from '@/api/SectionManagement'
  import {getToken} from '@/utils/auth'

  export default {
    data() {
      return {
        Keyword: null,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '12'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '2'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '123'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '456'
        }],
        currentPage: 4,
        pageNum: 1,
        pageSize: 10,
        keyword: ''

      }
    },
    components: {
      Breadcrumb
    },
    mounted() {
      this.list()
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row'
        } else if (rowIndex === 3) {
          return 'success-row'
        }
        return ''
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      query() {
        alert(1111)
      },
      reset() {
        alert(111)
      },
      list() {
        $.ajax({
          url: 'http://192.168.1.207:8001/account/account/',
          type: 'GET',
          // data: {
          //   loginName: 'ytl',
          //   password: '123456',
          //   loginType: 2,
          //   loginSource: 1
          // },
          headers: {
            accessToken: getToken()
          },
          success: function (res) {
          },
          error: function () {
            console.log('请求失败')
          }
        })
        // lists(this.pageNum, this.pageSize, this.keyword).then(response => {
        //   this.tableData = response.data
        // })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .SectionManagement {
    padding: 15px;
    .title {
      /*margin: 10px;*/
    }
    .el-input {
      width: auto;
    }
    .main {
      margin-top: 20px;
      .table {
        margin-top: 15px;
      }
      .fenye {
        text-align: center;
        margin-top: 20px;
      }
    }
  }
</style>
