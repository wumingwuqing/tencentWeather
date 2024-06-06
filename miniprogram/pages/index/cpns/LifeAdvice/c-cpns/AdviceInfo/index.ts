import { getColorByAdvice } from "../../../../../../utils/match_pic_color"

// pages/index/cpns/LifeAdvice/c-cpns/AdviceInfo/index.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    currentAdviceInfo: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    display: 'none',
    adviceInfo: {},
    color: ''
  },

  // 数据侦听器
  observers: {
    'currentAdviceInfo': function (currentAdviceInfo) {
      if (currentAdviceInfo.item && currentAdviceInfo.display) {
        this.setData({
          adviceInfo: currentAdviceInfo.item.value,
          display: currentAdviceInfo.display,
          color: getColorByAdvice(currentAdviceInfo.item.key)
        })
        // 发送事件让温度折线图隐藏
        this.triggerEvent("hideShowLine", 'none')
      }
    }
  },
  /**
  * 组件的方法列表
  */
  methods: {
    onConfirmTap() {
      this.setData({
        display: 'none'
      })
      // 发送事件让温度折线图显示
      this.triggerEvent("hideShowLine", 'block')
    }
  },

})