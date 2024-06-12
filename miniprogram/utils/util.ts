import { uniqueObjectArrayType } from "./type"

export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

export const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}




export function uniqueObjectArray(arr: uniqueObjectArrayType): uniqueObjectArrayType {
  const seen = new Map<string, { province: string, city: string, county: string }>();
  arr.forEach(item => {
    // 创建一个基于province, city, county的唯一标识字符串
    const identifier = `${item.province}-${item.city}-${item.county}`;
    if (!seen.has(identifier)) {
      seen.set(identifier, item);
    }
  });
  // 返回去重后的数组
  return Array.from(seen.values());
}