import { weatherDataType } from "../../../../service/type"
import { getBGCByAqiLevel } from "../../../../utils/myutils"

// pages/index/cpns/CurrentInfo/c-cpns/AirInfo/index.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    air: {
      aqi: 0,
      aqi_level: 0,
      aqi_name: "",
      co: "",
      no2: "",
      o3: "",
      'pm2.5': "",
      pm10: "",
      so2: "",
    },
    aqi_color: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {

    getAir() {
      try {
        const value: weatherDataType = wx.getStorageSync('wt')
        if (value) {
          this.setData({
            air: value.air,
            aqi_color: getBGCByAqiLevel(value.air.aqi_level),
          })
        }
      } catch (e) {
        console.error(e)
      }
    },
    //显示空气情况
    closeAirInfo() {
      this.triggerEvent('closeAirInfo', false)
    }
  },
  /**
  * 组件的生命周期
  */
  lifetimes: {
    // 在组件实例刚刚被创建时执行
    attached: function () {
      this.getAir()
    }
  }
})