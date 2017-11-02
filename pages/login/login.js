// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logo:"../../images/icons/logo.png",
    phoneImg:"../../images/icons/phone.png",
    passwd:"../../images/icons/passwd.png",
    viewpwd:"../../images/icons/viewpwd.png"
  },

  formSubmit:function(e){
    if (e.detail.value.phonenum== 1234&&e.detail.value.passwd==1234){
      wx.switchTab({
        url: '../home/home',
      })
    } 
  },
  ForgetPWD:function(){
    wx.showToast({
      title: '正在跳转',
      icon: 'clear',
      duration: 2000
    }
    )
  },

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