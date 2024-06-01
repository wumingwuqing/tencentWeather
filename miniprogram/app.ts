import getWeather from "./service/getWeather"

// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    getWeather().then(res => {
      if (res.status === 200 && res.message === "OK") {
        console.log(res)
        wx.setStorageSync('wt', res.data)
        wx.setStorageSync('address', { province: '河南', city: '平顶山', county: '新华区' })
      }
    })
  },
})