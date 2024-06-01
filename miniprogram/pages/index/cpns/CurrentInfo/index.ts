import { weatherDataType } from "../../../../service/type"

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
    city: '',
    county: '',
    temp: '',
    weather: '',
    windy: '',
    humidity: '',
    air: {
      number: 0,
      quality: '',
    }
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
          console.log(value.air.aqi)
          console.log(value.air.aqi_name)
          console.log(value.observe.degree)
          console.log(value.observe.weather)
          console.log(value.observe.wind_direction_name)
          console.log(value.observe.wind_power)
          console.log(value.observe.humidity)
          this.setData({
            temp: value.observe.degree,
            weather: value.observe.weather,
            windy: value.observe.wind_direction_name + " " + value.observe.wind_power,
            humidity: value.observe.humidity,
            air: {
              number: value.air.aqi,
              quality: value.air.aqi_name,
            }
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

          console.log(value.province)
          console.log(value.city)
          console.log(value.county)
          this.setData({
            city: value.city,
            county: value.county,
          })

        }
      } catch (e) {
        console.error(e)
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
      this.getAddress()
    }
  }

})