// pages/retrival/parking/parking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    community: "万科金源湾",
    mouth: "本月均价:",
    price: "19000",
    unit: "(元/㎡)",
    // 物业类型模拟数据
    array: ['请选择》', '住宅', '别墅', '办公', '车位'],
    objectArray: [
      { id: 0, name: '请选择' },
      { id: 1, name: '住宅' },
      { id: 2, name: '别墅' },
      { id: 3, name: '办公' },
      { id: 4, name: '车位' }
    ],
    index: 0,
   
  },

  assessResult: function () {
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


  onShareAppMessage: function () {

  }
})