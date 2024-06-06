export function getProvince(city: string) {
  //返回一个promise保证代码同步执行
  return new Promise((resolve, reject) => {
    wx.request({
      method: 'GET',
      url: 'https://wis.qq.com/city/like',
      data: {
        source: 'xw',
        city
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res: any) {
        if (res.statusCode === 200)
          resolve(res.data)
        else
          reject(null)
      }
    })
  })

}