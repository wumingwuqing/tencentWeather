import { getImgByWeather } from "../../../../utils/match_pic_color"
import { parsePerHourWeather, sunInfo } from "../../../../utils/parse_weather"

// pages/index/cpns/HoursWeather/index.ts
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
    weatherData: [{}],
    icon: ['']
  },

  /**s
   * 组件的方法列表
   */
  methods: {
    getWeather() {
      const weatherData = parsePerHourWeather()
      if (weatherData) {
        // 处理时间和温度
        weatherData.forEach(item => {
          item.update_time = item.update_time.substring(8, 10) + ":00"
          item.degree = item.degree + '°'
        })
        // 处理数量
        const result = weatherData.filter((_item, index) => index < 24)

        // 添加日出日落
        const sun = sunInfo()
        if (sun) {
          const sunRise = {
            degree: "日出",
            icon: "",
            update_time: sun.sunrise,
            weather: "日出",
            weather_code: "",
            weather_short: "",
            weather_url: "",
            wind_direction: "",
            wind_power: ""
          }
          const sunSet = {
            degree: "日落",
            icon: "",
            update_time: sun.sunset,
            weather: "日落",
            weather_code: "",
            weather_short: "",
            weather_url: "",
            wind_direction: "",
            wind_power: ""
          }
          for (let i = 0; i < result.length - 1; i++) {
            if (result[i].update_time.substring(0, 2) === sunRise.update_time.substring(0, 2)
              &&
              result[i + 1].update_time.substring(0, 2) > sunRise.update_time.substring(0, 2)
            ) {
              result.splice(i, 0, sunRise)
              i += 1
              continue
            }
            if (result[i].update_time.substring(0, 2) === sunSet.update_time.substring(0, 2)
              &&
              result[i + 1].update_time.substring(0, 2) > sunSet.update_time.substring(0, 2)
            ) {
              result.splice(i, 0, sunSet)
              break
            }
          }
        }

        // 添加图片
        const resulticon = []
        for (let i = 0; i < result.length; i++) {
          const icon = getImgByWeather(result[i].weather)
          const obj = { ...result[i], icon }
          resulticon.push(obj)
        }

        this.setData({
          weatherData: resulticon
        })


      }

    },


  },
  lifetimes: {
    attached() {
      this.getWeather()

    }
  }

})

// message：自动预览 Error: 非法的文件，错误信息：invalid file: utils/parse_weather.js, 77:22, SyntaxError: Unexpected token .  return getWeather()?.rise['0']; [20240604 00:15:58][wx8c47b7a366c05d17]
// appid: wx8c47b7a366c05d17
// openid: o6zAJs-gJ_yM5kTqony-zUUZ7H3Q
// ideVersion: 1.06.2401020
// osType: win32-x64
// time: 2024-06-04 00:16:05