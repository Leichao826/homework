// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFixed: false,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    imgUrls: ['/images/swiper_1.jpg', '/images/swiper_2.jpg', '/images/swiper_3.jpg'],
    quickNav: [{ image: '/images/quickNav.png', title: '京东超市', url: '#' }, { image: '/images/quickNav.png', title: '京东超市', url: '#' }, { image: '/images/quickNav.png', title: '京东超市', url: '#' }, { image: '/images/quickNav.png', title: '京东超市', url: '#' }, { image: '/images/quickNav.png', title: '京东超市', url: '#' }, { image: '/images/quickNav.png', title: '京东超市', url: '#' }, { image: '/images/quickNav.png', title: '京东超市', url: '#' }, { image: '/images/quickNav.png', title: '京东超市', url: '#' }, { image: '/images/quickNav.png', title: '京东超市', url: '#' }, { image: '/images/quickNav.png', title: '京东超市', url: '#' }],
   

    productList: [{ image: '/images/product-1.jpg', title: '满199减120三只松鼠 猪肉脯自然片150g休闲食品零食小吃靖江风味猪肉干', price: '29.9', url: '#' }, { image: '/images/product-1.jpg', title: '满199减120三只松鼠 猪肉脯自然片150g休闲食品零食小吃靖江风味猪肉干', price: '29.9', url: '#' }, { image: '/images/product-1.jpg', title: '满199减120三只松鼠 猪肉脯自然片150g休闲食品零食小吃靖江风味猪肉干', price: '29.9', url: '#' }, { image: '/images/product-1.jpg', title: '满199减120三只松鼠 猪肉脯自然片150g休闲食品零食小吃靖江风味猪肉干', price: '29.9', url: '#' }, { image: '/images/product-1.jpg', title: '满199减120三只松鼠 猪肉脯自然片150g休闲食品零食小吃靖江风味猪肉干', price: '29.9', url: '#' }, { image: '/images/product-1.jpg', title: '满199减120三只松鼠 猪肉脯自然片150g休闲食品零食小吃靖江风味猪肉干', price: '29.9', url: '#' },]
  },
  
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  },
  onPageScroll: function (e) {
    // 顶部搜索条是否固定操作
    if (e.scrollTop > 50) {
      this.setData({
        isFixed: true
      })
    } else {
      this.setData({
        isFixed: false
      })
    }
  }
})