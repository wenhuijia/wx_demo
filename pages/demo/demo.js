Page({
  data: {
    
  },
  test(e){
    wx.request({
      url: 'https://www.showapi.com', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})