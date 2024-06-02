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
  },
  methods: {
    setAirInfoDisplay(display: any) {
      console.log(display)
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
    }
  },
  lifetimes: {
    attached() {
      this.getSystemInfo()
    }
  }
})
