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
    listData:[
      [{
        listLeft:"物业类型：",
        selectLeft:"请选择"
      },
      {
        listLeft: "价值时点：",
        selectLeft: "请选择"
      }],
      [{
        listLeft: "建筑面积：",
        selectLeft: "请输入"
      },
      {
        listLeft: "电梯配置：",
        selectLeft: "请选择"
      }]
    ],
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
    ]
  },
  assessResult:function(){
    wx.navigateTo({
      url: '../result/result',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})