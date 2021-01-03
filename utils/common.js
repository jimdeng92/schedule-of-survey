/**
 * 解析 eleme table-column 组件
 * @param {object} value headerMapping的值
 * @param {string} key headerMapping的键
 * @param {object} row 组件传递的数据
 */
export function parseByKey (value, key, row) {
  let realVal = row[key]
  let formatKey = (e) => e
  formatKey = value.format || formatKey
  return formatKey(realVal, row)
}