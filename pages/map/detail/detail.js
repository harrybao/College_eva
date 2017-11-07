// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidebtn:"true",
    priceData: [
      {
        pname: "评估总价 （万元）",
        price: "368.20"
      },
      {
        pname: "评估单价 （元/平方米）",
        price: "2700"
      }
    ],
    detaiList: [
      {
        id: 1,
        name: "巴厘香泉",
        area: 87.49,
        total: 210,
        price: 24003
      },
      {
        id: 2,
        name: "城北新村",
        area: 87.49,
        total: 210,
        price: 24003
      },
      {
        id: 3,
        name: "加州花园",
        area: 87.49,
        total: 210,
        price: 24003
      },
      {
        id: 4,
        name: "华昌小区",
        area: 87.49,
        total: 210,
        price: 24003
      },
      {
        id: 5,
        name: "未来橙堡",
        area: 87.49,
        total: 210,
        price: 24003
      }
    ],
    InformationList:[
      {
        inforname:"地址:",
        inforvalue:"洪文-里1-135号"
      },
      {
        inforname: "区域:",
        inforvalue: "思明区"
      },
      {
        inforname: "片区:",
        inforvalue: "莲前"
      },
      {
        inforname: "建成年份:",
        inforvalue: "1998年"
      }
    ],
    tableHead: [
      { name: "市场价格" },
      { name: "租赁价格" },
      { name: "评估单价" }
    ],
    tableMat: [
      {
        describe: "平层住宅",
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
        describe: "复式住宅",
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
        describe: "双拼别墅",
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
        describe: "SOHO",
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
  priceDetail:function(){
    this.setData({
      hidebtn:!this.data.hidebtn
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