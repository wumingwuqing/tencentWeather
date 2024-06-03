import { getImgByWeather } from "../../../../utils/match_pic_color"
import { parseTodyWreaher } from "../../../../utils/parse_weather"
import { weatherType } from "./type"

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
      maxDeg: '',
      minDeg: '',
      weatherDay: '',
      weatherChange: '',
      wti: ''
    },
    tomorrow: {
      maxDeg: '',
      minDeg: '',
      weatherDay: '',
      weatherChange: '',
      wti: ''
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取天气
    getWeather() {
      const todydata = parseTodyWreaher('1')
      const tomorrow = parseTodyWreaher('2')
      if (todydata) {
        this.handleTodydata(todydata)

      }
      if (tomorrow) {
        this.handleTomorrow(tomorrow)
      }
    },
    //处理今日天气
    handleTodydata(todydata: weatherType) {
      const maxDeg = todydata.max_degree
      const minDeg = todydata.min_degree
      const weatherDay = todydata.day_weather
      const weatherNight = todydata.night_weather
      const wti = getImgByWeather(weatherDay)
      this.setData({
        tody: {
          maxDeg,
          minDeg,
          weatherDay,
          weatherChange: weatherDay === weatherNight ? weatherDay : weatherDay + '转' + weatherNight,
          wti
        }
      })

    },
    // 处理明日天气
    handleTomorrow(tomorrow: weatherType) {
      const maxDeg = tomorrow.max_degree
      const minDeg = tomorrow.min_degree
      const weatherDay = tomorrow.day_weather
      const weatherNight = tomorrow.night_weather
      const wti = getImgByWeather(weatherDay)
      this.setData({
        tomorrow: {
          maxDeg,
          minDeg,
          weatherDay,
          weatherChange: weatherDay === weatherNight ? weatherDay : weatherDay + '转' + weatherNight,
          wti
        }
      })
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