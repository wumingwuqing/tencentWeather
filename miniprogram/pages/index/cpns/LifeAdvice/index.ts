import { getImgByAdvice } from "../../../../utils/match_pic_color"
import { parseTips } from "../../../../utils/parse_weather"

// pages/index/cpns/LifeAdvice/index.ts
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
    advice: [[{}], [{}]],

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getAdvice() {
      const advice = parseTips()
      if (advice) {
        // 添加图片
        const adviceData = advice.map(item => {
          return { ...item, img: getImgByAdvice(item.key) }
        })
        // 平均分组
        // 不用flitery因为slice速度更快
        const group1 = adviceData.slice(0, adviceData.length / 2)
        const group2 = adviceData.slice(adviceData.length / 2, adviceData.length)
        // 放入data
        this.setData({
          advice: [group1, group2]
        })

      }
    },
    // swiper





  },

  lifetimes: {
    attached() {
      this.getAdvice()

    }
  }
})