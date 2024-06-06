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
    advice: [{}]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getAdvice() {
      const advice = parseTips()
      if (advice) {

        const adviceData = advice.map(item => {
          return { ...item, img: getImgByAdvice(item.key) }
        })


        this.setData({
          advice: adviceData
        })
        console.log(this.data.advice)
      }
    }
  },

  lifetimes: {
    attached() {
      this.getAdvice()

    }
  }
})