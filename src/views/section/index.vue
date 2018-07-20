<template>
  <div class="content">
    <div class="top">
      <span>截面选择：</span>
      <el-select v-model="value" placeholder="请选择" :size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span>设备信息：</span>
      <div class="alert">
        <el-alert
          title="成功提示的文案"
          type="success">
        </el-alert>
      </div>
      <div class="alert">
        <el-alert
          title="成功提示的文案"
          type="success">
        </el-alert>
      </div>
      <div class="alert">
        <el-alert
          title="成功提示的文案"
          type="success">
        </el-alert>
      </div>
      <div class="alert">
        <el-alert
          title="成功提示的文案"
          type="success">
        </el-alert>
      </div>
      <span class="font">当日截面流量：</span>
      <div class="liuliang">
        <span class="s1"> <svg-icon icon-class="top"/></span>
        <span class="num">167</span>
      </div>
      <div class="liuliang">
        <span class="s1 s2"> <svg-icon icon-class="top"/></span>
        <span class="num">167</span>
      </div>
    </div>
    <div class="mid">
      <el-row :gutter="15">
        <el-col class="el7" :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
          <p class="name"><span>船名：</span><span></span></p>
          <el-row class="pic">
            <el-col :span="12">
              <Magnifier :src="srcall" :i="0"></Magnifier>
            </el-col>
            <el-col :span="12">
              <Magnifier :src="srcall" :i="1"></Magnifier>
            </el-col>
            <el-col :span="12">
              <Magnifier :src="srcall" :i="2"></Magnifier>
            </el-col>
            <el-col :span="12">
              <Magnifier :src="srcall" :i="3"></Magnifier>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="videos">
            <video width="100%" height="352px" controls autoplay>
              <source :src="test" type="video/mp4">
              <object :data="test" width="100%" height="100%">
                <embed width="100%" height="100%" :src="test">
              </object>
            </video>
          </div>
        </el-col>
        <el-col :xs="9" :sm="9" :md="9" :lg="9" :xl="9">
          <div class="gis">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=993086723,262462407&fm=27&gp=0.jpg"
                 alt="">
          </div>
        </el-col>
      </el-row>
    </div>
      <el-card class="box-card">
        <div class="text item">
          <el-table
            :data="tableData"
            :row-class-name="tableRowClassName"
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
              label="MMSI">
            </el-table-column>
            <el-table-column
              prop="address"
              label="航向">
            </el-table-column>
            <el-table-column
              prop="address"
              label="进入时间">
            </el-table-column>
            <el-table-column
              prop="address"
              label="驶离时间">
            </el-table-column>
            <el-table-column
              prop="address"
              label="定位终端核查">
            </el-table-column>
            <el-table-column
              prop="address"
              label="重点跟踪">
            </el-table-column>
            <el-table-column
              prop="address"
              label="证书核查">
            </el-table-column>
            <el-table-column
              prop="address"
              label="诚信核查">
            </el-table-column>
            <el-table-column
              prop="address"
              label="报岗确认">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地图定位">
            </el-table-column>
            <el-table-column
              prop="address"
              label="告警处理">
            </el-table-column>
          </el-table>
        </div>
      </el-card>

    <!--<div class="fade" v-if="flag" @click="fade1">-->
    <!--</div>-->
  </div>

</template>

<script>
  /* eslint-disable object-curly-spacing */

  import test from '@/assets/img/test.mp4'
  import Magnifier from '@/components/Magnifier/Magnifier'

  export default {
    components: {
      Magnifier
    },
    data() {
      return {
        srcall: ['http://img3.cache.netease.com/photo/0031/2012-12-25/8JISDTA13S010031.jpg',
          'http://img.zcool.cn/community/0181215542adfb0000019ae941aee8.jpg',
          'http://i2.hdslb.com/bfs/archive/ddeeb31c36e64e1a7082db4c976c3cb5859659b1.jpg',
          'http://img.zcool.cn/community/0157b055410eac000001e71b1a9477.jpg@2o.jpg'],
        isScale: false,
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
        test,
        mini: 'mini',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }],
        value: ''
      }
    },
    mounted() {
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row'
        } else if (rowIndex === 3) {
          return 'success-row'
        }
        return ''
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .content {
    padding: 15px;
    .top {
      height: 70px;
      background: #fff;
      padding: 12px;
      .font {
        margin-left: 10px;
      }
      .alert {
        width: 146px;
        height: 28px;
        display: inline-block;
      }
      .liuliang {
        display: inline-block;
        width: 98px;
        height: 28px;
        font-size: 0;
        padding-top: 8px;
        .s1 {
          display: inline-block;
          width: 32px;
          float: left;
          height: 28px;
          line-height: 28px;
          text-align: center;
          font-size: 14px;
          background: #E9E9E9;
          .svg-icon {
            width: 2.8em;
          }
        }
        .num {
          float: left;
          font-size: 14px;
          display: inline-block;
          width: 63px;
          height: 28px;
          line-height: 28px;
          text-align: center;
          border: 1px solid #e9e9e9;
        }
        .s2 {
          transform: rotate(180deg);
          -ms-transform: rotate(180deg); /* IE 9 */
          -webkit-transform: rotate(180deg); /* Safari and Chrome */
        }
      }
    }
    .mid {
      margin-top: 15px;
      .name {
        border-left: 7px solid #01579B;
        margin: 0;
        height: 30px;
        line-height: 30px;
        background: #f5f5f5;
        padding-left: 16px;
        span {
          font-size: 16px;
          color: #666;
        }
      }
      .el7 {
      }
      .pic {
        padding: 10px;
        background: #fff;
        .el-col {
          padding: 2px 5px;
          height: 150px;
        }

      }
      .gis {
        img {
          width: 100%;
          height: 352px;
        }
      }
    }
    .bounce-enter-active {
      animation: bounce-in .3s;
    }
    .bounce-leave-active {
      animation: bounce-in .3s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
    .fade {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      z-index: 9999;
    }
  }
</style>
