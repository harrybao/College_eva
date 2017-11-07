// pages/evalua/evalua.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    community:"万科金源湾",
    mouth:"本月均价:",
    price:"19000",
    unit:"(元/㎡)",
    listItem: [
      {
        secenry:"内部设施：",
        list:[
          [{ name: 'SEA', value: '海景'},
            { name: 'LAKE', value: '湖景'},
            { name: 'ROAD', value: '临路'}],
          [{ name: 'MOUN', value: '临山'},
            { name: 'CEME', value: '临墓地'}, 
            { name: 'HIGH', value: '临高压设施'}]
        ]
      },
      {
        secenry: "景观：",
        list: [
          [{ name: 'GARD', value: '带花园' },
          { name: 'TREE', value: '带露台'}],
          [{ name: 'ATT', value: '带阁楼' },
          { name: 'BASE', value: '带地下室' }]
        ]
      }
    ],
    // 物业类型模拟数据
    array: ['请选择》', '住宅', '别墅', '办公','车位'],
    objectArray: [
      {id: 0,name: '请选择'},
      {id: 1,name: '住宅'},
      {id: 2,name: '别墅'},
      {id: 3,name: '办公'},
      {id: 4,name: '车位'}
    ],
    index: 0,
    // 建筑结构模拟数据
    struarray: ['请选择》', '钢混', '混合', '砖木', ],
    objectstruArray: [
      {id: 0,name: '请选择》'},
      {id: 1,name: '钢混'},
      {id: 2,name: '混合'},
      {id: 3,name: '砖木'}
    ],
    // 建筑面积模拟数据
    struindex: 0,
    aveaarray: ['请选择》', 'M<=60', '60<M<=90', '90<M<=144', 'M>144'],
    objectaveaArray: [
      {id: 0,name: '请选择》'},
      {id: 1,name: 'M<=60'},
      {id: 2,name: '60<M<=90'},
      {id: 3,name: '90<M<=144'},
      {id: 4,name: 'M>144'}
    ],
    // 装修模拟数据
    aveaindex: 0,
    renoarray: ['请选择》', '毛坯', '普通装修', '中档装修', '高档装修'],
    objectrenoArray: [
      {id: 0,name: '请选择》'},
      {id: 1,name: '毛坯'},
      {id: 2,name: '普通装修'},
      {id: 3,name: '中档装修'},
      {id: 4,name: '高档装修'
      }
    ],
    renoindex: 0,
    // 朝向模拟数据
    direarray: ['请选择》', '南北', '南', '东南', '西南', '东西', '东', '西', '东北', '西北', '北'],
    objectdireArray: [
      {id: 0,name: '请选择》'},
      {id: 1,name: '南北'},
      {id: 2,name: '南'},
      {id: 3,name: '东南'},
      {id: 4,name: '西南'},
      {id: 5,name: '东西'},
      {id: 6,name: '东'},
      {id: 7,name: '西'},
      {id: 8,name: '东北'},
      {id: 9,name: '西北'},
      {id: 10,name: '北'}
    ],
    direindex: 0,
    // 是否有电梯
    elecarray: ['请选择》', '有', '无'],
    objectelecArray: [
      {id: 0,name: '请选择》'},
      {id: 1,name: '有'},
      {id: 2,name: '无'} 
    ],
    elecindex: 0,
  },
  
  assessResult:function(){
    wx.navigateTo({
      url: '../result/result',
    })
  },
// 下拉选择函数
  bindPickChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  bindPickStruChange: function (e) {
    this.setData({
      struindex: e.detail.value
    })
  },

  bindPickAveaChange: function (e) {
    this.setData({
      aveaindex: e.detail.value
    })
  },

  bindPickRenoChange: function (e) {
    this.setData({
      renoindex: e.detail.value
    })
  },

  bindPickDireChange: function (e) {
    this.setData({
      direindex: e.detail.value
    })
  },

  bindPickElecChange: function (e) {
    this.setData({
      elecindex: e.detail.value
    })
  },



})