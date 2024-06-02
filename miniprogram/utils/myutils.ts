import { weatherDataType } from "../service/type"

// 根据空气质量等级获取颜色
export function getBGCByAqiLevel(level: number): string {
  switch (level) {
    case 1:
      return 'a3d765'
    case 2:
      return '#efce35'
    case 3:
      return "#f1ab63"
    default:
      return "#000"
  }
}
// 获取天气情况
export function getWeather(): weatherDataType | null {
  try {
    const value: weatherDataType = wx.getStorageSync('wt')
    if (value) {
      return value
    }
  } catch (e) {
    console.error(e)
    return null
  }
}