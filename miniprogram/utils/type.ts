export type weatherData_time = Array<{
  degree: string;
  update_time: string;
  weather: string;
  weather_code: string;
  weather_short: string;
  weather_url: string;
  wind_direction: string;
  wind_power: string;
}>
export type sevenWeather = Array<{
  key: string
  value: {
    aqi_level: number
    aqi_name: string
    aqi_url: string
    day_weather: string
    day_weather_code: string
    day_weather_short: string
    day_weather_url: string
    day_wind_direction: string
    day_wind_direction_code: string
    day_wind_power: string
    day_wind_power_code: string
    max_degree: string
    min_degree: string
    night_weather: string
    night_weather_code: string
    night_weather_short: string
    night_weather_url: string
    night_wind_direction: string
    night_wind_direction_code: string
    night_wind_power: string
    night_wind_power_code: string
    time: string
  }
}>

export type tips = Array<{
  key: string
  value: string | {
    detail: string;
    info: string;
    name: string;
  }

}> 