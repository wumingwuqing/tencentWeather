import { getWeather } from "../../../../utils/myutils"

// pages/index/cpns/TodayTomorrow/index.ts
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
    tody: {
      degree: {
        heiDeg: 0,
        lowDeg: 0
      },
      weather: ['', '']
    },
    tomorrow: {
      degree: {
        heiDeg: 0,
        lowDeg: 0
      },
      weather: ['', '']
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getWeather() {
      const weather = getWeather()
      console.log(weather)
      if (weather) {
        this.setData({
          tody: {
            degree: {
              heiDeg: 0,
              lowDeg: 0
            },
            weather: ['', '']
          },
          tomorrow: {
            degree: {
              heiDeg: 0,
              lowDeg: 0
            },
            weather: ['', '']
          }
        })
      }
    }
  },
  /**
 * 组件的生命周期
 */
  lifetimes: {
    // 在组件实例刚刚被创建时执行
    attached: function () {
      this.getWeather()

    }
  }
})