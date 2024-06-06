import { getImgByWeather } from "../../../../utils/match_pic_color";
import { parse7DaysWeather } from "../../../../utils/parse_weather";

import * as echarts from '../../../../ec-canvas/echarts'

// pages/index/cpns/SixWeather/index.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    lineisplaychange: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    week: ['昨天', '今天', '明天', '后天'],
    week_weather: [{}],
    ec: {
      // onInit: initChart,
      lazyLoad: true // 延迟加载,手动初始化图表
    },
    day_deg: [''],
    night_deg: [''],
    display: 'block'
  },

  // 数据侦听器
  observers: {
    // 控制折线图的显示和隐藏，因为手机上在显示建议详情时折线图会显示错误
    'lineisplaychange': function (lineisplaychange) {
      if (lineisplaychange === 'block' || lineisplaychange === 'none') {
        this.setData({
          display: lineisplaychange
        })
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getWeek() {
      // 初始化定义数据
      const date = new Date();
      const weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      // 获取今天是周几
      const today = date.getDay();//获取存储当前日期
      // 获取昨天是周几(因为是从昨天天气开始显示的)
      const yesterday = today == 0 ? weekday.length - 1 : today - 1
      // 计算从昨天开始的未来6天
      const next_six_day = [yesterday]
      for (let i = 0; i < 6; i++) {
        if (next_six_day[i] + 1 >= weekday.length)
          next_six_day.push(0)
        else
          next_six_day.push(next_six_day[i] + 1)
      }
      // 但是结果只要后天之后的两天
      for (let i = 4; i < 6; i++) {
        this.data.week.push(weekday[next_six_day[i]])
      }
      this.setData({
        week: this.data.week
      })

    },
    getWeather() {
      const weatherData = parse7DaysWeather()
      if (weatherData) {
        // 处理日期
        const weather = weatherData.filter((_item, index) => index < 6)
          .map(item => {
            item.value.time = item.value.time.split('-')[1] + '/' + item.value.time.split('-')[2]
            return item.value
          })
          // 映射图片
          .map(item => {
            item.day_weather_url = getImgByWeather(item.day_weather, true)
            item.night_weather_url = getImgByWeather(item.night_weather, false)
            return item
          })



        // 设置数据
        this.setData({
          week_weather: weather
        })
      }
    },

    //初始化图表
    initChart(max_deg: Array<string>, min_deg: Array<string>) {
      const line = this.selectComponent('#mychart-dom-bar')
      line.init((canvas: any, width: any, height: any, dpr: any) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        })
        canvas.setChart(chart);

        const option = {

          grid: {
            left: "8%",
            right: "8%",
            top: '37%',
            bottom: "37%",
          },
          xAxis: {
            show: false,
            type: 'category',
            boundaryGap: false,
            data: ['', '', '', '', '', '']
          },
          yAxis: {
            show: false,
            type: 'value',
            min: 'dataMin',
            max: 'dataMax'

          },
          series: [
            {
              type: 'line',
              data: max_deg,
              symbol: 'circle',
              symbolSize: 9,
              label: {
                distance: 5,
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 14
                },
                formatter: '{c}°'
              },
              lineStyle: {
                normal: {
                  color: '#feb546',
                  width: 2,
                  type: 'solid'
                }
              },
              itemStyle: {
                color: '#feb546',

                borderColor: '#fff',
                borderWidth: '2',
              }

            },
            {
              type: 'line',
              data: min_deg,
              symbol: 'circle',
              symbolSize: 9,
              label: {
                show: true,
                distance: 10,
                position: 'bottom',
                textStyle: {
                  fontSize: 14
                },
                formatter: '{c}°',
              },
              lineStyle: {
                normal: {
                  color: '#4cc1f7',
                  width: 2,
                  type: 'solid'
                }
              },
              itemStyle: {
                color: '#4cc1f7',
                borderColor: '#fff',
                borderWidth: '2',
              }

            }
          ]
        };
        chart.setOption(option);
        return chart;
      })
    },
    setChart() {
      const weatherData = parse7DaysWeather()
      if (weatherData) {
        // 处理日期
        const weather = weatherData.filter((_item, index) => index < 6)
          .map(item => {
            item.value.time = item.value.time.split('-')[1] + '/' + item.value.time.split('-')[2]
            return item.value
          })
        const max_deg = weather.map(item => item.max_degree)
        const min_deg = weather.map(item => item.min_degree)

        this.initChart(max_deg, min_deg)
      }



    }

  },


  lifetimes: {
    attached() {
      this.getWeek()
      this.getWeather()
      this.setChart()
    },

  }


})