import { adviceImage } from "../asset/img/advice-icon";
import { weatherImage } from "../asset/img/weather-image";

// 根据空气质量等级获取颜色
export function getBGCByAqiLevel(level: number): string {
  console.log(level)
  switch (level) {
    case 1:
      return '#b4df86'
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
    case '扬沙':
      img = weatherImage.up_sand.image
      break
    case '雷阵雨':
      img = weatherImage.linging_rain.image
      break
    default:
      img = ''
      break;
  }
  return img

}
// 根据建议种类获取图片
export function getImgByAdvice(advice: string) {
  let img: string = ''
  switch (advice) {
    case "allergy":
      img = adviceImage.allergy.image
      break
    case "carwash":
      img = adviceImage.carwash.image
      break;
    case "clothes":
      img = adviceImage.clothes.image
      break;
    case "cold":
      img = adviceImage.cold.image
      break;
    case "comfort":
      img = adviceImage.comfort.image
      break;
    case "diffusion":
      img = adviceImage.diffusion.image
      break;
    case "drying":
      img = adviceImage.drying.image
      break;
    case "fish":
      img = adviceImage.fish.image
      break;
    case "heatstroke":
      img = adviceImage.heatstroke.image
      break;
    case "makeup":
      img = adviceImage.makeup.image
      break;
    case "morning":
      img = adviceImage.morning.image
      break;
    case "sports":
      img = adviceImage.sports.image
      break;
    case "sunscreen":
      img = adviceImage.sunscreen.image
      break;
    case "tourism":
      img = adviceImage.tourism.image
      break;
    case "traffic":
      img = adviceImage.traffic.image
      break;
    case "umbrella":
      img = adviceImage.umbrella.image
      break;
    default:
      img = ''
      break;
  }
  return img
}
// 根据建议种类获取颜色
export function getColorByAdvice(advice: string) {
  let color: string = ''
  switch (advice) {
    case "allergy":
      color = "#97a3d7"
      break
    case "carwash":
      color = "#b8e3ab"
      break;
    case "clothes":
      color = '#dfa5be'
      break;
    case "cold":
      color = "#dbcf9d"
      break;
    case "comfort":
      color = "#a6c78e"
      break;
    case "diffusion":
      color = "#af8c93"
      break;
    case "drying":
      color = "#acb3c5"
      break;
    case "fish":
      color = "#a6e0d1"
      break;
    case "heatstroke":
      color = "#fb8b66"
      break;
    case "makeup":
      color = "#db9798"
      break;
    case "morning":
      color = "#94c3d5"
      break;
    case "sports":
      color = "#e3db9d"
      break;
    case "sunscreen":
      color = "#d0b0a3"
      break;
    case "tourism":
      color = "#ebad96"
      break;
    case "traffic":
      color = "#8ea6aa"
      break;
    case "umbrella":
      color = "#c2a9e0"
      break;
    default:
      color = '#000'
      break;
  }
  return color
}