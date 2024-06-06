import { getWeatherReturnType } from "./type"

function getWeather(province = '河南', city = '平顶山市', county = '新华区'): Promise<getWeatherReturnType> {
  //返回一个promise保证代码同步执行
  return new Promise((resolve, reject) => {
    wx.request({
      method: 'GET',
      url: 'https://wis.qq.com/weather/common',
      data: {
        source: 'xw',
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
        if (res.statusCode === 200)
          resolve(res.data)
        else
          reject(null)
      }
    })
  })
}
export default getWeather