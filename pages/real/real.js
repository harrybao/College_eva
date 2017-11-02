// pages/real/real.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    imageWidth: wx.getSystemInfoSync().windowWidth,
    imgUrls: [
      '../../images/house/house01.jpg',
      '../../images/house/house02.jpg'
    ],
    interval: 3000,
    duration: 1000,
    listData:[{
      listImg:'../../images/house/house03.jpg',
      listPoint:'../../images/icons/point.png',
      listValue:"汇丰国际广场",
      listDate:"2017年10月31日",
      listDetil: "首开-万科白鹭郡首期推出200套精工..."
    },
      {
        listImg: '../../images/house/house06.jpg',
        listPoint: '../../images/icons/point.png',
        listValue: "汇丰国际广场",
        listDate: "2017年10月31日",
        listDetil: "首开-万科白鹭郡首期推出200套精工..."
      }
      ,{
      listImg:'../../images/house/house07.jpg',
      listPoint:'../../images/icons/point.png',
      listValue:"汇丰国际广场",
      listDate:"2017年10月31日",
      listDetil: "首开-万科白鹭郡首期推出200套精工..."
      },
       {
      listImg:'../../images/house/house03.jpg',
      listPoint:'../../images/icons/point.png',
      listValue:"汇丰国际广场",
      listDate:"2017年10月31日",
      listDetil:"首开-万科白鹭郡首期推出200套精工..."
      }
    ],
    tabList:[
      { listname: "行业动态" },
      { listname: "政策法规" },
      { listname: "研究成果" }
    ]
  },

  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
// 选择选项卡处理函数================
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  // =================================
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
