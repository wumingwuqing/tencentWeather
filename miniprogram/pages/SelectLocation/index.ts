// pages/SelectLocation/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //page-meta
    barHeight: 0,
    barTop: 0,
    placeHolderHeight: 0,

    current: [{ province: '河南省', city: '平顶山', county: '新华区' }],

    histry: [
      { province: '北京', city: '北京', county: '' },
      { province: '上海', city: '上海', county: '' },
      { province: '河南', city: '三门峡', county: '渑池' },],
    hotCity: [
      { province: '北京', city: '北京', county: '' },
      { province: '上海', city: '上海', county: '' },
      { province: '广东', city: '广州', county: '' },
      { province: '广东', city: '深圳', county: '' },
      { province: '河南', city: '郑州', county: '' },
      { province: '陕西', city: '西安', county: '' },
      { province: '江苏', city: '南京', county: '' },
      { province: '浙江', city: '杭州', county: '' },
      { province: '湖北', city: '武汉', county: '' },
      { province: '四川', city: '成都', county: '' },
      { province: '辽宁', city: '沈阳', county: '' },
      { province: '天津', city: '天津', county: '' },]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getSystemInfo()
  },

  getSystemInfo() {
    // 获取距上
    const barTop = wx.getSystemInfoSync().statusBarHeight
    // 获取胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect()
    // 获取导航栏高度
    const barHeight = menuButtonInfo.height + (menuButtonInfo.top - barTop) * 2
    this.setData({
      barHeight,
      barTop,
      placeHolderHeight: barHeight + barTop
    })
  },

  onTap(data: any) {
    const location = {
      province: data.currentTarget.dataset.province,
      city: data.currentTarget.dataset.city,
      county: data.currentTarget.dataset.county,
    }
    console.log(location)


  }
})
