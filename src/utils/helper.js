const helper = {
  // 根据name获取地址栏的参数值
  getQueryString (name) {
    let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
    let r = window.location.hash.split('?')[1].match(reg)
    if (r != null) return r[2]; return ''
  }
}
export default helper
