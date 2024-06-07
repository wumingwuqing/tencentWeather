

/**
 * 函数防抖
 * @param fn 防抖方法
 * @param time 间隔时间
 * @param config 配置 {first：首次点击是否执行 end：时间结束后是否执行}
 * @returns 
 */
export function debounce<T>(fn: T, time = 500, config: { first?: boolean, end?: boolean } = { first: true, end: false }): T {
  let timeout: number | null = null;
  if (typeof fn !== 'function') {
    throw new TypeError('类型错误，传入函数不是一个方法')
  }
  return function (this: unknown) {
    const args = arguments
    // first==true && !false
    if (config.first && !timeout)
      fn.apply(this, args as any)

    // 
    timeout && clearTimeout(timeout);


    timeout = setTimeout(() => {
      config.end && fn.apply(this, args as any)
      timeout = null
    }, time);
  } as any;
}
