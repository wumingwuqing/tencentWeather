import { BGCImage } from "../../../../asset/img/current-info"
import { weatherDataType } from "../../../../service/type"
import { getBGCByAqiLevel } from "../../../../utils/myutils"

// pages/index/cpns/CurrentInfo/index.ts
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
    bg: "",
    city: '',
    county: '',
    temp: '',
    weather: '',
    windy: '',
    humidity: '',
    air: {
      aqi: 0,
      aqi_name: '',
      aqi_color: ''
    },

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取天气情况
    getWeather() {
      try {
        const value: weatherDataType = wx.getStorageSync('wt')
        if (value) {
          this.setData({
            bg: this.getBGIByWeather(value.observe.weather),
            temp: value.observe.degree,
            weather: value.observe.weather,
            windy: value.observe.wind_direction_name + " " + value.observe.wind_power,
            humidity: value.observe.humidity,
            air: {
              aqi: value.air.aqi,
              aqi_name: value.air.aqi_name,
              aqi_color: getBGCByAqiLevel(value.air.aqi_level),
            },
          })
        }
      } catch (e) {
        console.error(e)
      }

    },
    //获取地理位置
    getAddress() {
      try {
        const value: { province: string, city: string, county: string } = wx.getStorageSync('address')
        if (value) {
          this.setData({
            city: value.city,
            county: value.county,
          })

        }
      } catch (e) {
        console.error(e)
      }
    },

    //根据天气获取背景图片
    getBGIByWeather(weather: string): string {
      switch (weather) {
        case '阴':
          return BGCImage.overcast.img;
        case '多云':
          return BGCImage.cloudy.img;
        default:
          return BGCImage.overcast.img;
      }
    },
    //显示空气情况
    showAirInfo() {
      this.triggerEvent('showAirInfo', true)
    }
  },
  /**
  * 组件的生命周期
  */
  lifetimes: {
    // 在组件实例刚刚被创建时执行
    attached: function () {
      this.getWeather()
      this.getAddress()
    }
  }

})