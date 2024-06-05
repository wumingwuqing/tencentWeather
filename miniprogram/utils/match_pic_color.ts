import { weatherImage } from "../asset/img/weather-image";

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
// 根据天气获取天气图片
export function getImgByWeather(weather: string, isday = true) {
  let img = ''
  switch (weather) {
    case '晴':
      img = isday ? weatherImage.sunny_day.image : weatherImage.sunny_night.image
      break;
    case '多云':
      img = isday ? weatherImage.cloudy_day.image : weatherImage.cloudy_night.image
      break;
    case '阴':
      img = weatherImage.overcast.image
      break;
    case '小雨':
      img = weatherImage.light_rain.image
      break;
    case '中雨':
      img = weatherImage.moderate_rain.image
      break;
    case '日出':
      img = weatherImage.sun_rise.image
      break
    case '日落':
      img = weatherImage.sun_drop.image
      break
    default:
      img = ''
      break;
  }
  return img

}