// pages/index/cpns/LifeAdvice/c-cpns/AdviceItem/index.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    itemData: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemTap(data: any) {
      this.triggerEvent('showAdviceInfo', data.currentTarget.dataset.item)
    }
  },
  lifetimes: {

  }


})