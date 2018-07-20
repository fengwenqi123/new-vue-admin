<template>
  <div class="RedAlarm">
    <div class="title">
      <p class="font1">
        <svg-icon icon-class="alarm"/>
        <span>告警！</span>
        <span class="samll">定位终端核查未通过，AIS前端设备未识别！</span></p>
    </div>
    <div class="mid">
      <el-row :gutter="15">
        <el-col v-if="type===0 ||type===1 || type===2" :span="5">
          <div class="step">
            <el-steps direction="vertical" :space="100" :active="active">
              <el-step title="告警信息" :description="des.name1"></el-step>
              <el-step title="告警处置" :description="des.name2"></el-step>
              <el-step title="告警处理" :description="des.name3"></el-step>
              <el-step title="监督复核" :description="des.name4"></el-step>
            </el-steps>
          </div>
        </el-col>
        <el-col v-if="type===0" :span="9">
          <div class="Management man">
            <p>人工核查</p>
            <svg-icon class="fdj" icon-class="fdj"/>
            <div class="select">
              <el-select clearable v-model="value" filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <el-button class="check" type="primary" @click="check">人工核查</el-button>
            <div class="ti">
              <p> 1. 可识别船名的情况下，请在船名核查中直接输入船名；</p>
              <p>2. 船名无法核实情况下，请下拉选择无法核实的具体原因；</p>
            </div>
          </div>
        </el-col>
        <el-col v-if="type===1" :span="9">
          <div class="Management">
            <p>告警处置</p>
            <div class="span">
              <span>处理方式：</span>
              <el-select v-model="value1" filterable clearable placeholder="请选择">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-button class="newcz" type="primary" v-if="value1==='1'" @click="dialogFormVisible = true">新增违章
              </el-button>
              <el-button class="newcz" type="primary" v-if="value1==='2'" @click="information=true">修改船舶
              </el-button>
            </div>
            <el-input
              type="textarea"
              :rows="8"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
            <div class="sub">
              <!--<el-button>修改录入</el-button>-->
              <el-button @click="Handle" type="primary">确认处理</el-button>
            </div>
          </div>
        </el-col>
        <el-col v-if="type===2" :span="9">
          <div class="Management">
            <p>监督复核</p>
            <div class="span">
              <span>复核方式：</span>
              <el-select v-model="value" filterable clearable placeholder="请选择">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <el-input
              type="textarea"
              :rows="8"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
            <div class="sub">
              <!--<el-button>修改录入</el-button>-->
              <el-button @click="review" type="primary">确认复核</el-button>
            </div>
          </div>
        </el-col>
        <el-col v-if="type===3" :span="14">
          <el-row :gutter="25">
            <el-col :span="6">
              <el-card class="box-card">
                <div class="text item">
                  <p>告警信息</p>
                </div>
              </el-card>
              <div class="font">1</div>
            </el-col>
            <el-col :span="6">
              <el-card class="box-card">
                <div class="text item">
                  <p>告警信息</p>
                </div>
              </el-card>
              <div class="font">2</div>
            </el-col>
            <el-col :span="6">
              <el-card class="box-card">
                <div class="text item">
                  <p>告警信息</p>
                </div>
              </el-card>
              <div class="font">3</div>
            </el-col>
            <el-col :span="6">
              <el-card class="box-card">
                <div class="text item">
                  <p>告警信息</p>
                </div>
              </el-card>
              <div class="font">4</div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="10">
          <div class="magnifier">
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
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bottom">
      <el-row :gutter="15">
        <el-col :span="12">
          <p>船舶信息</p>
          <el-tabs type="border-card">
            <el-tab-pane label="船舶信息">
              <div>
                <el-table
                  :data="tableData2"
                  style="width: 100%"
                  :row-class-name="tableRowClassName">
                  <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="地址">
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="船舶证书">船舶证书</el-tab-pane>
            <el-tab-pane label="船舶诚信">船舶诚信</el-tab-pane>
            <el-tab-pane label="最低配员">最低配员</el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="12">
          <p>记录信息</p>
          <el-tabs type="border-card">
            <el-tab-pane label="违章信息">
              <div>
                <el-table
                  :data="tableData2"
                  style="width: 100%"
                  :align="center"
                  :header-align="center"
                  class-name="nn1"
                  :row-class-name="tableRowClassName">
                  <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="地址">
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="重点跟踪">重点跟踪</el-tab-pane>
            <el-tab-pane label="报港记录">报港记录</el-tab-pane>
            <el-tab-pane label="报港未确认">报港未确认</el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-dialog title="新建违章记录" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="船舶名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off" placeholder="请输入船舶名称"></el-input>
          </el-form-item>
          <el-form-item label="违章描述" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              :rows="6"
              placeholder="请输入具体违章内容内容"
              v-model="form.textarea">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog title="船舶信息修改录入" :visible.sync="information">
        <el-tabs type="border-card" @tab-click="handleClick">
          <el-tab-pane label="船舶信息">
            <el-row :gutter="2">
              <el-col :span="6">
                <div class="grid-content">船舶名称</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==0">
                  {{ship.name}}</p>
                  <el-input v-if="show===0" class="input1" size="mini" v-model="ship.name"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">船籍港</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==0">{{ship.port}}</p>
                  <el-input v-if="show===0" class="input1" size="mini" v-model="ship.port"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">船舶识别号</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==0">{{ship.number}}</p>
                  <el-input v-if="show===0" class="input1" size="mini" v-model="ship.number"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">船舶种类</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==0">{{ship.type}}</p>
                  <el-input v-if="show===0" class="input1" size="mini" v-model="ship.type"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">建造日期</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==0">{{ship.date}}</p>
                  <el-input v-if="show===0" class="input1" size="mini" v-model="ship.date"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">核定航区</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">
                  <p v-if="show!==0">{{ship.Navigation}}</p>
                  <el-input v-if="show===0" class="input1" size="mini" v-model="ship.Navigation"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">船舶长度</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==0">{{ship.length}}</p>
                  <el-input v-if="show===0" class="input1" size="mini" v-model="ship.length"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">船舶型宽</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==0">{{ship.wide}}</p>
                  <el-input v-if="show===0" class="input1" size="mini" v-model="ship.wide"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">船舶型深</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==0">{{ship.deep}}
                </p>
                  <el-input v-if="show===0" class="input1" size="mini" v-model="ship.deep"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">总吨位</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==0">{{ship.tonnage}}</p>
                  <el-input v-if="show===0" class="input1" size="mini" v-model="ship.tonnage"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">净吨位</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">
                  <p v-if="show!==0">{{ship.Nettonnage}}</p>
                  <el-input v-if="show===0" class="input1" size="mini" v-model="ship.Nettonnage"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">参考载重吨</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">
                  <p v-if="show!==0">{{ship.Reference}}</p>
                  <el-input v-if="show===0" class="input1" size="mini" v-model="ship.Reference"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="船舶证书">
            <el-table
              :data="tableData2"
              :row-class-name="tableRowClassName"
              style="width: 100%">
              <el-table-column
                label="船舶证书"
              >
                <template slot-scope="scope">
                  <span v-if="show!==1">{{ scope.row.name }}</span>
                  <span v-if="show===1" class="cell-edit-input"><el-input v-model="scope.row.name"
                                                                          placeholder="请输入内容"></el-input></span>
                </template>
              </el-table-column>
              <el-table-column
                label="签发时间"
              >
                <template slot-scope="scope">
                  <span v-if="show!==1">{{ scope.row.date }}</span>
                  <span v-if="show===1" class="cell-edit-input"><el-input v-model="scope.row.date"
                                                                          placeholder="请输入内容"></el-input></span>
                </template>
              </el-table-column>
              <el-table-column
                label="有效日期"
              >
                <template slot-scope="scope">
                  <span v-if="show!==1">{{ scope.row.address }}</span>
                  <span v-if="show===1" class="cell-edit-input"><el-input v-model="scope.row.address"
                                                                          placeholder="请输入内容"></el-input></span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="最低配员">
            <el-row :gutter="2">
              <el-col :span="6">
                <div class="grid-content">船舶名称</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==2">
                  {{ship.name}}</p>
                  <el-input v-if="show===2" class="input1" size="mini" v-model="ship.name"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">船长数目</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==2">{{ship.port}}</p>
                  <el-input v-if="show===2" class="input1" size="mini" v-model="ship.port"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">大副数目</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==2">{{ship.number}}</p>
                  <el-input v-if="show===2" class="input1" size="mini" v-model="ship.number"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">二副数目</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==2">{{ship.type}}</p>
                  <el-input v-if="show===2" class="input1" size="mini" v-model="ship.type"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">三副数目</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==2">{{ship.date}}</p>
                  <el-input v-if="show===2" class="input1" size="mini" v-model="ship.date"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">水手数目</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">
                  <p v-if="show!==2">{{ship.Navigation}}</p>
                  <el-input v-if="show===2" class="input1" size="mini" v-model="ship.Navigation"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">驾驶员数目</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==2">{{ship.length}}</p>
                  <el-input v-if="show===2" class="input1" size="mini" v-model="ship.length"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">机工数目</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==2">{{ship.wide}}</p>
                  <el-input v-if="show===2" class="input1" size="mini" v-model="ship.wide"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">大管轮数目</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==2">{{ship.deep}}
                </p>
                  <el-input v-if="show===2" class="input1" size="mini" v-model="ship.deep"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">二管轮数目</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix"><p v-if="show!==2">{{ship.tonnage}}</p>
                  <el-input v-if="show===2" class="input1" size="mini" v-model="ship.tonnage"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">三管轮数目</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">
                  <p v-if="show!==2">{{ship.Nettonnage}}</p>
                  <el-input v-if="show===2" class="input1" size="mini" v-model="ship.Nettonnage"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">轮机长数目</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content clearfix">
                  <p v-if="show!==2">{{ship.Reference}}</p>
                  <el-input v-if="show===2" class="input1" size="mini" v-model="ship.Reference"
                            placeholder="请输入内容"></el-input>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="重点跟踪船舶">
            <el-table
              :data="tableData"
              :row-class-name="tableRowClassName"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="重点跟踪原因">
              </el-table-column>
              <el-table-column
                prop="name"
                label="列入重点跟踪日期">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="船舶违章">
            <el-table
              :data="tableData"
              :row-class-name="tableRowClassName"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="违章日期">
              </el-table-column>
              <el-table-column
                prop="name"
                label="处罚站所">
              </el-table-column>
              <el-table-column
                prop="name"
                label="内容">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="船舶诚信">
            <el-row :gutter="2">
              <el-col :span="12">
                <div class="grid-content">诚信级别</div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content clearfix"><p v-if="show!==5">
                  {{ship.name}}</p>
                  <el-input v-if="show===5" class="input1" size="mini" v-model="ship.name" placeholder="请输入内容"></el-input>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="报港未确认">
            <el-table
              :data="tableData"
              :row-class-name="tableRowClassName"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="船舶名称">
              </el-table-column>
              <el-table-column
                prop="name"
                label="报岗日期">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="报港记录">
            <el-table
              :data="tableData"
              :row-class-name="tableRowClassName"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="船舶名称">
              </el-table-column>
              <el-table-column
                prop="name"
                label="类别">
              </el-table-column>
              <el-table-column
                prop="date"
                label="报港日期">
              </el-table-column>
              <el-table-column
                prop="name"
                label="货种">
              </el-table-column>
              <el-table-column
                prop="date"
                label="数量">
              </el-table-column>
              <el-table-column
                prop="name"
                label="始发港">
              </el-table-column>
              <el-table-column
                prop="date"
                label="目的港">
              </el-table-column>
              <el-table-column
                prop="name"
                label="所属单位">
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
        <el-row class="button">
          <el-button type="primary" @click="res">修改</el-button>
          <el-button type="primary" @click="information=false">提交处理</el-button>
          <el-button @click="information=false">取消</el-button>
        </el-row>
      </el-dialog>
    </div>

  </div>
</template>

<script>
  /* eslint-disable object-curly-spacing,no-undef */
  import Magnifier from '@/components/Magnifier/Magnifier'

  export default {
    data() {
      return {
        ship: {
          name: '浙平湖货02318',
          port: '湖州',
          number: 'CN20101022803',
          type: '干货船',
          date: '2011-01-11',
          Navigation: '沿海航区营运限制',
          length: '42m',
          wide: '8m',
          deep: '3m',
          tonnage: '293t',
          Nettonnage: '164t',
          Reference: '351t'
        },
        type: 0,
        active: 0,
        des: {
          name1: '来源：物理截面    告警点：余杭-十字港桥告警时间：2018.06.10 13:00:00',
          name2: '来源：物理截面    告警点：余杭-十字港桥告警时间：2018.06.10 13:00:00',
          name3: '来源：物理截面    告警点：余杭-十字港桥告警时间：2018.06.10 13:00:00',
          name4: '来源：物理截面    告警点：余杭-十字港桥告警时间：2018.06.10 13:00:00'
        },

        information: false,
        dialogFormVisible: false,
        form: {
          name: '',
          textarea: ''
        },
        formLabelWidth: '120px',
        center: 'center',
        srcall: ['http://img3.cache.netease.com/photo/0031/2012-12-25/8JISDTA13S010031.jpg',
          'http://img.zcool.cn/community/0181215542adfb0000019ae941aee8.jpg',
          'http://i2.hdslb.com/bfs/archive/ddeeb31c36e64e1a7082db4c976c3cb5859659b1.jpg',
          'http://img.zcool.cn/community/0157b055410eac000001e71b1a9477.jpg@2o.jpg'],
        options: [{
          value: '1',
          label: '电话联系'
        }, {
          value: '2',
          label: '人工核查'
        }, {
          value: '3',
          label: 'VHF联系'
        }, {
          value: '4',
          label: '其他'
        }],
        options1: [{
          value: '1',
          label: '违章录入'
        }, {
          value: '2',
          label: '船舶信息修改'
        }],
        options2: [{
          value: '1',
          label: '处理完成'
        }, {
          value: '2',
          label: '处理未完成'
        }],
        value: '',
        value1: '',
        textarea: '',
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        tableData: [],
        index: 0,
        show: null
      }
    },
    components: {
      Magnifier
    },
    mounted() {
    },
    methods: {
      handleClick(tab, event) {
        this.index = tab.index
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row'
        } else if (rowIndex === 3) {
          return 'success-row'
        }
        return ''
      },
      check() {
        this.type = 1
        this.active = 1
      },
      Handle() {
        this.type = 2
        this.active = 2
      },
      review() {
        this.type = 3
        this.active = 3
      },
      res() {
        this.show = parseInt(this.index)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .RedAlarm {
    padding: 15px 20px;
    .title {
      height: 60px;
      line-height: 60px;
      background: #F8D7DA;
      border-left: 13px solid #DC3545;
      .font1 {
        .svg-icon {
          font-size: 24px;
          margin-left: 26px;
          margin-right: 8px;
          color: rgba(114, 28, 36, 1);
        }
        span {
          font-size: 26px;
          color: #721C24;
          font-weight: bold;
        }
        .samll {
          font-size: 18px;
          margin-left: 10px;
          font-weight: normal;
        }
      }
    }
    .mid {
      margin-top: 15px;
      .step {
        height: 360px;
      }
      .man {
        text-align: center;
      }
      .Management {
        height: 360px;
        background: #fff;
        .fdj {
          width: 40px;
          height: 40px;
          margin-top: 50px;
        }
        .check {
          margin-top: 20px;
        }
        .ti {
          margin-top: 40px;
          p {
            text-align: center;
            background: #fff;
            font-size: 12px;
            height: 20px;
            line-height: 20px;
            color: #666;

          }
        }
        p {
          height: 30px;
          line-height: 30px;
          background: #F5F5F5;
          padding-left: 10px;
          text-align: left;
        }
        .span {
          margin: 16px 30px;
        }
        .el-textarea {
          padding: 0 30px;
        }
        .sub {
          margin-top: 12px;
          text-align: right;
          padding-right: 30px;
          padding-bottom: 15px;
        }
      }
      .magnifier {
        .name {
          padding-left: 16px;
          margin: 0;
          height: 30px;
          line-height: 30px;
          background: #f5f5f5;
        }
        .mag {
          padding: 15px 0;
          background: #fff;
        }
        .pic {
          padding: 10px;
          background: #fff;
          .el-col {
            padding: 2px 5px;
            height: 150px;
          }
        }
      }
      .box-card {
        height: 360px;
        position: relative;
        p {
          font-size: 12px;
          width: 100px;
          text-indent: 14px;
          height: 18px;
          line-height: 18px;
          background-size: 100% 100%;
          background: url("../../assets/img/grey.png") no-repeat;
        }
      }
      .font {
        position: absolute;
        width: 20px;
        height: 20px;
        font-size: 12px;
        line-height: 20px;
        background: rgb(216, 216, 216);
        border-radius: 50%;
        text-align: center;
        margin-left: -18px;
        z-index: 9999;
        top: 0px;
        /*border: 3px solid #fff;*/
        color: #fff;
      }
    }
    .bottom {
      margin-top: 15px;
      p {
        height: 30px;
        line-height: 30px;
        background: #f5f5f5;
        text-indent: 20px;
        font-family: 'PingFang SC';
      }
    }
    .el-table .warning-row {
      background: oldlace;
    }

    .el-table .success-row {
      background: #f0f9eb;
    }
    .newcz {
      margin-left: 10px;
    }
    .grid-content {
      padding: 10px;
      p {
        display: inline-block;
      }
      /*span {*/
      /*float: right;*/
      /*color: #428BCA;*/
      /*cursor: pointer;*/
      /*font-size: 13px;*/
      /*display: none;*/
      /*}*/
      /*.input1 {*/
      /*display: none;*/
      /*}*/
    }
    .show {
      span {
        display: inline-block;
      }
    }
    .modify1 {
      padding: 8px;
      p {
        display: none;
      }
      .input1 {
        display: inline-block;
      }
    }
    .button {
      text-align: right;
      margin-top: 28px;
    }

  }

</style>
<style>
  .el-step__title {
    width: 100px;
    background: url("../../assets/img/grey.png") no-repeat;
    padding: 0px !important;
    margin-bottom: 10px;
    background-size: 100% 100%;
  }

  .el-step__title.is-process {
    background: url("../../assets/img/blue.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;
  }

  /*.el-step__description{*/
  /*background: none;*/
  /*color: #000;*/
  /*}*/
</style>
