// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Component({
  data: {
    airInfoDisplay: 'none',

    system: {
      statusBarHeight: 0
    },
    barHeight: 0,
    barTop: 0,
    placeHolderHeight: 0,

    lineisplaychange: 'block'
  },
  methods: {
    setAirInfoDisplay(display: any) {
      this.setData({
        airInfoDisplay: display.detail ? 'block' : 'none'
      })
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
    // 修改数据让温度折线图隐藏或显示
    hideShowLine(display: any) {
      this.setData({
        lineisplaychange: display.detail
      })
    }
  },
  lifetimes: {
    attached() {
      this.getSystemInfo()
    }
  }
})
