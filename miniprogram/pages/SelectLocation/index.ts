
import { getProvince } from "../../service/getProvince"
import getWeather from "../../service/getWeather"
type location = { province: string; city: string; county: string; }[] | null




async function getLocation(inputvalue: any): Promise<location> {
  const res: any = await getProvince(inputvalue)
  if (Object.values(res.data)[0]) {
    // 获取地址数据
    const location: location = Object.values<string>(res.data).map(item => {
      const data = item.split(',')
      return {
        province: data[0], city: data[1], county: data[2]
      }
    })
    return location
  }
  return null
}

// pages/SelectLocation/index.ts
Component({

  /**
   * 页面的初始数据
   */
  data: {

    barHeight: 0,
    barTop: 0,
    placeHolderHeight: 0,

    candidate: Array<{ province: string; city: string; county: string; }>(),
    candidatevis: false,

    current: [{ province: '河南', city: '平顶山', county: '新华区' }],

    histry: [{}],
    histryShow: 'none',

    hotCity: [
      { province: '北京', city: '北京', county: '' },
      { province: '上海', city: '上海', county: '' },
      { province: '广东', city: '广州', county: '' },
      { province: '广东', city: '深圳', county: '' },
      { province: '河南', city: '郑州', county: '' },
      { province: '陕西', city: '西安', county: '' },
      { province: '江苏', city: '南京', county: '' },
      { province: '浙江', city: '杭州', county: '' },
      { province: '湖北', city: '武汉', county: '' },
      { province: '四川', city: '成都', county: '' },
      { province: '辽宁', city: '沈阳', county: '' },
      { province: '天津', city: '天津', county: '' },],


    inputvalue: '',
    timeId: -100
  },
  observers: {
    // 双向绑定触发数据侦听器获取位置列表
    'inputvalue': function (inputvalue: string) {
      if (this.data.timeId >= 0) clearTimeout(this.data.timeId)//清除定时器
      // 500ms后执行
      this.data.timeId = setTimeout(async () => {
        // 隐藏和显示目标元素
        if (inputvalue.length > 0) {
          // 显示
          this.setData({
            candidatevis: true
          })
        } else {
          // 隐藏
          this.setData({
            candidate: [],
            candidatevis: false
          })
        }
        // 获取数据
        const location: location = await getLocation(inputvalue)
        if (location) {
          this.setData({
            candidate: location
          })
        }
      }, 100)
    }
  },

  methods: {

    getSystemInfo() {
      // 获取距上
      const barTop = wx.getSystemInfoSync().statusBarHeight
      // 获取胶囊按钮位置信息
      const menuButtonInfo = wx.getMenuButtonBoundingClientRect()
      // 获取导航栏高度
      const barHeight = menuButtonInfo.height + (menuButtonInfo.top - barTop) * 2
      this.setData({
        barHeight,
        barTop,
        placeHolderHeight: barHeight + barTop
      })
    },

    onTap(data: any) {
      const location = {
        province: data.currentTarget.dataset.province,
        city: data.currentTarget.dataset.city,
        county: data.currentTarget.dataset.county,
      }
      const lc = {
        target: {
          dataset: {
            item: location
          }
        }
      }
      this.setLocation(lc)
    },

    setLocation(e: any) {
      // 获取数据
      const location: { province: string; city: string; county: string; } = e.target.dataset.item
      // 设置数据
      getWeather(location.province, location.city, location.county).then((res: any) => {
        if (res.status === 200 && res.message === "OK") {
          // 设置Storage
          wx.setStorageSync('wt', res.data)
          wx.setStorageSync('address', { province: location.province, city: location.city, county: location.county })
          // 设置histry
          this.data.histry.unshift(location)
          if (this.data.histry.length > 3) {
            this.data.histry.pop()
          }
          wx.setStorageSync('histroy', this.data.histry)
          // 跳回首页
          wx.redirectTo({
            url: '/pages/index/index'
          })
        }
      })
    },
    back() {
      // 跳回首页
      wx.redirectTo({
        url: '/pages/index/index'
      })
    }


  },
  lifetimes: {
    attached() {
      this.getSystemInfo()
      this.setData({
        histry: wx.getStorageSync('histroy') || []
      })
      this.setData({
        histryShow: this.data.histry.length > 0 ? 'flex' : 'none'
      })
    }
  }


})
