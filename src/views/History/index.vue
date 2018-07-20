<template>
  <div class="history">
    <div class="top clearfix">
      <div class="less" v-if="flag">
        <el-card class="box-card" shadow="hover">
          <div class="text">
            <div class="span">
              <span>截面选择：</span>
              <el-select v-model="value" placeholder="请选择" :size="mini">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="span">
              <span>告警级别：</span>
              <el-select v-model="value" placeholder="请选择" :size="mini">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="span">
              <span>进入时间：</span>
              <el-date-picker
                v-model="time"
                type="datetimerange"
                align="right"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :size="mini"
                :default-time="['00:00:00', '23:59:59']">
              </el-date-picker>
            </div>
            <div class="span">
              <span class="font">告警状态：</span>
              <el-select v-model="value" placeholder="请选择" :size="mini">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="span">
              <el-button type="primary" :size="mini" icon="el-icon-search">搜索</el-button>
              <el-button type="info" :size="mini" icon="el-icon-refresh">重置</el-button>
            </div>
          </div>
        </el-card>
      </div>
      <div class="more" v-if="!flag">
        <el-card class="box-card" shadow="hover">
          <el-row :gutter="1">
            <el-col :span="4">
              <div class="span">
                <span>所属：</span>
                <el-select v-model="value" placeholder="请选择" :size="mini">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="span">
                <span>进入时间：</span>
                <el-date-picker
                  v-model="time"
                  type="datetimerange"
                  align="right"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :size="mini"
                  :default-time="['00:00:00', '23:59:59']">
                </el-date-picker>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="span">
                <span>告警级别：</span>
                <el-select v-model="value" placeholder="请选择" :size="mini">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="span">
                <span>告警状态：</span>
                <el-select v-model="value" placeholder="请选择" :size="mini">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="span">
                <span>告警时间：</span>
                <el-date-picker
                  v-model="time"
                  type="datetimerange"
                  align="right"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :size="mini"
                  :default-time="['00:00:00', '23:59:59']">
                </el-date-picker>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="1">
            <el-col :span="4">
              <div class="span">
                <span>航向：</span>
                <el-select v-model="value" placeholder="请选择" :size="mini">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="span">
                <span>驶离时间：</span>
                <el-date-picker
                  v-model="time"
                  type="datetimerange"
                  align="right"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :size="mini"
                  :default-time="['00:00:00', '23:59:59']">
                </el-date-picker>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="span">
                <span>核查结果：</span>
                <el-select v-model="value" placeholder="请选择" :size="mini">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="span">
                <span>复合结果：</span>
                <el-select v-model="value" placeholder="请选择" :size="mini">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="span">
                <span>处理时间：</span>
                <el-date-picker
                  v-model="time"
                  type="datetimerange"
                  align="right"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :size="mini"
                  :default-time="['00:00:00', '23:59:59']">
                </el-date-picker>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="1">
            <el-col :span="4">
              <div class="span">
                <span>核查不通过：</span>
                <el-select v-model="value" placeholder="请选择" :size="mini">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="span search">
                <span>精确搜索：</span>
                <el-input
                  size="mini"
                  placeholder="请选择日期"
                  suffix-icon="el-icon-date"
                  v-model="search">
                </el-input>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="span">
                <el-button type="primary" :size="mini" icon="el-icon-search">搜索</el-button>
                <el-button type="info" :size="mini" icon="el-icon-refresh">重置</el-button>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>
      <div class="xia" @click="down"><i class="el-icon-d-arrow-right"></i></div>
    </div>
    <div class="table">
      <el-card class="box-card">
        <div class="text item">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="Id"
              label="序号"
              type="index"
              width="80">
            </el-table-column>
            <el-table-column
              prop="date"
              label="船名">
            </el-table-column>
            <el-table-column
              prop="name"
              label="号码">
            </el-table-column>
            <el-table-column
              prop="address"
              label="所属截面">
            </el-table-column>
            <el-table-column
              prop="address"
              label="航向">
            </el-table-column>
            <el-table-column
              prop="address"
              label="通过时间">
            </el-table-column>
            <el-table-column
              prop="address"
              label="告警时间">
            </el-table-column>
            <el-table-column
              prop="address"
              label="告警处理时间">
            </el-table-column>
            <el-table-column
              prop="address"
              label="告警状态">
            </el-table-column>
            <el-table-column
              prop="address"
              label="核查结果">
            </el-table-column>
            <el-table-column
              prop="address"
              label="核查不通过项">
            </el-table-column>
            <el-table-column
              prop="address"
              label="复核结果">
            </el-table-column>
            <el-table-column
              prop="address"
              label="操作">
            </el-table-column>
          </el-table>
        </div>
      </el-card>

    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        mini: 'mini',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }],
        value: '',
        time: '',
        search: '',
        flag: true,
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
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '456'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '456'
        }],
        currentPage4: 4
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      },
      down() {
        this.flag = !this.flag
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .history {
    padding: 15px;
    .top {
      .box-card {
        .text {
          .span {
            display: inline-block;
            .font {
              margin-left: 10px;
            }
          }
        }
      }
      .xia {
        float: right;
        display: inline-block;
        width: 80px;
        height: 24px;
        background: #01579b;
        color: #fff;
        text-align: center;
        line-height: 24px;
        .el-icon-d-arrow-right {
          transform: rotate(90deg);
          -ms-transform: rotate(90deg); /* IE 9 */
          -webkit-transform: rotate(90deg); /* Safari and Chrome */
        }
      }
      .more {
        .el-col {
          margin: 10px 0;
        }
      }
    }
    .table {
      margin-top: 15px;
    }
    .block{
      text-align: center;
      margin-top: 20px;
    }
  }

</style>
