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
        ddd:"ddd",
        list:[
          [{ name: 'USA', value: '美国'},
            { name: 'CHN', value: '中国', checked: 'true'},
            { name: 'BRA', value: '巴西'}],
          [{ name: 'JPN', value: '日本'},
            { name: 'ENG', value: '英国'}, 
            { name: 'TUR', value: '法国'}]
        ]
      },
      {
        ddd: "ddd",
        list: [
          [{ name: 'USA', value: '美国' },
          { name: 'CHN', value: '中国', checked: 'true' },
          { name: 'BRA', value: '巴西' }],
          [{ name: 'JPN', value: '日本' },
          { name: 'ENG', value: '英国' },
          { name: 'TUR', value: '法国' }]
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