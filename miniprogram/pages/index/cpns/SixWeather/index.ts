// pages/index/cpns/SixWeather/index.ts
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
    week: ['昨天', '今天', '明天', '后天', '大后天', '大大后天']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getWeek() {
      var today = new Date();
      var currentDate = today.getDay();//获取存储当前日期
      var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      console.log("今天是：" + weekday[currentDate]);
    }
  }
})