// pages/map/detailop/detailop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tableHead:[
      {name: "市场价格"},
      {name: "租赁价格"},
      {name: "评估单价"}
    ],
    tableMat:[
      {
        describe:"平层住宅",
        pdata:[
          {
            pnumber:45000,
            unit:"(元/㎡)"
          },
          {
            pnumber: 30,
            unit: "(元/㎡.月)"
          },
          {
            pnumber: 37000,
            unit: "(元/㎡)"
          }
        ]
      },
      {
        describe: "挑高住宅",
        pdata: [
          {
            pnumber: 45000,
            unit: "(元/㎡)"
          },
          {
            pnumber: 30,
            unit: "(元/㎡.月)"
          },
          {
            pnumber: 37000,
            unit: "(元/㎡)"
          }
        ]
      },
      {
        describe: "独栋别墅",
        pdata: [
          {
            pnumber: 45000,
            unit: "(元/㎡)"
          },
          {
            pnumber: 30,
            unit: "(元/㎡.月)"
          },
          {
            pnumber: 37000,
            unit: "(元/㎡)"
          }
        ]
      },
      {
        describe: "联排别墅",
        pdata: [
          {
            pnumber: 45000,
            unit: "(元/㎡)"
          },
          {
            pnumber: 30,
            unit: "(元/㎡.月)"
          },
          {
            pnumber: 37000,
            unit: "(元/㎡)"
          }
        ]
      },
      {
        describe: "平层办公",
        pdata: [
          {
            pnumber: 45000,
            unit: "(元/㎡)"
          },
          {
            pnumber: 30,
            unit: "(元/㎡.月)"
          },
          {
            pnumber: 37000,
            unit: "(元/㎡)"
          }
        ]
      },
    ]
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