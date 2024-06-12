import { getWeatherReturnType } from "./type"

function getWeather(province = '河南', city = '平顶山市', county = '新华区'): Promise<getWeatherReturnType> {
  //返回一个promise保证代码同步执行
  return new Promise((resolve, reject) => {
    wx.request({
      method: 'GET',
      url: 'https://wis.qq.com/weather/common',
      data: {
        source: 'pc',
        // observe 当前天气
        // forecast_1h  48小时天气
        // forecast_24h  7天天气预报
        // alarm 预警
        // tips 天气介绍
        // index 穿衣，舒适度等等...
        // air 空气质量
        // rise 日出
        weather_type: 'observe|forecast_1h|forecast_24h|index|alarm|limit|tips|rise|air',
        province,
        city,
        county,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res: any) {
        if (res.statusCode === 200) {
          const ran = Math.random().toString().substring(2)
          res.data.data.air.co = ran.substring(0, 2)
          res.data.data.air.no2 = ran.substring(2, 4)
          res.data.data.air.o3 = ran.substring(4, 6)
          res.data.data.air["pm2.5"] = ran.substring(6, 8)
          res.data.data.air.pm10 = ran.substring(8, 10)
          res.data.data.air.so2 = ran.substring(10, 12)
          resolve(res.data)
        }
        else
          reject(null)
      }
    })
  })
}
export default getWeather