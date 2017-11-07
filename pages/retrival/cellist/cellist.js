// pages/cellist/cellist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchtitle:"小区搜索",
    listData: [{
      headImg: '../../../images/house/house01.jpg',
      deupper: "汇丰国际广场",
      demiddle: "集美-杏东",
      address: "祥和西路55-45号",
      price: "20000",
      updown: "../../../images/icons/rise.png",
      percent: "0.07%",
    },
    {
      headImg: '../../../images/house/house02.jpg',
      deupper: "汇丰国际广场",
      demiddle: "集美-杏东",
      address: "祥和西路55-45号",
      price: "20000",
      updown:"../../../images/icons/rise.png",
      percent: "0.07%",
    }
      , {
        headImg: '../../../images/house/house03.jpg',
        deupper: "汇丰国际广场",
        demiddle: "集美-杏东",
        address: "祥和西路55-45号",
        price: "20000",
        updown: "../../../images/icons/rise.png",
        percent: "0.07%",
    },
    {
      headImg: '../../../images/house/house04.jpg',
      deupper: "汇丰国际广场",
      demiddle: "集美-杏东",
      address: "祥和西路55-45号",
      price: "20000",
      updown: "../../../images/icons/rise.png",
      percent: "0.07%",
    },
    {
      headImg: '../../../images/house/house06.jpg',
      deupper: "汇丰国际广场",
      demiddle: "集美-杏东",
      address: "祥和西路55-45号",
      price: "20000",
      updown: "../../../images/icons/rise.png",
      percent: "0.07%"
    },
    {
      headImg: '../../../images/house/house07.jpg',
      deupper: "汇丰国际广场",
      demiddle: "集美-杏东",
      address: "祥和西路55-45号",
      price: "20000",
      updown: "../../../images/icons/decline.png",
      percent: "0.07%",
    },
    {
      headImg: '../../../images/house/house08.jpg',
      deupper: "汇丰国际广场",
      demiddle: "集美-杏东",
      address: "祥和西路55-45号",
      price: "20000",
      updown: "../../../images/icons/rise.png",
      percent: "0.07%",
    }
      , {
      headImg: '../../../images/house/house09.jpg',
      deupper: "汇丰国际广场",
      demiddle: "集美-杏东",
      address: "祥和西路55-45号",
      price: "20000",
      updown: "../../../images/icons/decline.png",
      percent: "0.07%",
    },
    {
      headImg: '../../../images/house/house10.jpg',
      deupper: "汇丰国际广场",
      demiddle: "集美-杏东",
      address: "祥和西路55-45号",
      price: "20000",
      updown: "../../../images/icons/rise.png",
      percent: "0.07%",
    },
    {
      headImg: '../../../images/house/house11.jpg',
      deupper: "汇丰国际广场",
      demiddle: "集美-杏东",
      address: "祥和西路55-45号",
      price: "20000",
      updown: "../../../images/icons/decline.png",
      percent: "0.07%"
    }  
    ]
  },
  evaluaDetail:function(){
    wx.navigateTo({
      url: '../evalua/evalua',
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