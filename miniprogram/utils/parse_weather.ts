import { weatherDataType } from "../service/type"
import { weatherData_time } from "./type"



// 获取天气情况
export function getWeather(): weatherDataType | null | undefined {
  try {
    const value: weatherDataType = wx.getStorageSync('wt')
    if (value) {
      console.log(value)
      return value
    }
  } catch (e) {
    console.error(e)
    return null
  }
  return
}

// 逐小时天气预报;
export function parsePerHourWeather() {
  const weatherData = getWeather()
  if (weatherData) {
    const weatherData_time = weatherData.forecast_1h;

    // const updateTimes = Object.keys(weatherData_time).map(Number).sort((a, b) => a - b);
    const data: weatherData_time = []
    Object.entries(weatherData_time).forEach(([, value]) => {
      data.push(value)
    });
    return data
  }
  return
}
// 七日天气预报
export function parse7DaysWeather() {
  const weatherData = getWeather()
  if (weatherData) {
    const weatherData_time = weatherData.forecast_24h;
    Object.entries(weatherData_time).forEach(([key, value]) => {
      console.log(key, value);
    });
  }
}
//某日天气
export function parseTodyWreaher(day: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7") {
  const weatherData = getWeather()
  if (weatherData) {
    const forecast_24h = weatherData.forecast_24h
    return forecast_24h[day];
  } else {
    return null
  }
}
//解析index
export function parseTips() {
  const weatherData = getWeather()
  if (weatherData) {
    const tips = weatherData.index
    Object.entries(tips).forEach(([key, value]) => {
      console.log(key, value);
    })
  }

}
// 日出日落
export function sunInfo() {
  const data = getWeather()
  if (data) {
    return data.rise[0]
  }
  return
}
