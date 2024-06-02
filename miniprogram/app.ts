import getWeather from "./service/getWeather"

// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {

    getWeather().then(res => {
      if (res.status === 200 && res.message === "OK") {
        wx.setStorageSync('wt', res.data)
        wx.setStorageSync('address', { province: '河南', city: '平顶山', county: '新华区' })
      }
    })
  },
})