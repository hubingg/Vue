import axios from 'axios'
// import { Message } from 'element-ui'
import helper from './helper'

const config = {
  BasicUrl: ''
}

let axiosIns = axios.create({
  baseURL: config.BasicUrl,
  timeout: 30000,
  headers: {'Content-Type': 'application/json;charset=UTF-8'}
})

// if (process.env.NODE_ENV == 'development') {
//   axiosIns.defaults.baseURL = '***';
// } else if (process.env.NODE_ENV == 'debug') {
//   axiosIns.defaults.baseURL = '***';
// } else if (process.env.NODE_ENV == 'production') {
//   axiosIns.defaults.baseURL = '***';
// }

// 请求拦截
axiosIns.interceptors.request.use(function (config) {
  // 配置config
  config.headers.Accept = 'application/json'
  config.headers.ticket = helper.getQueryString('ticket')
  config.headers.domain = helper.getQueryString('domain')
  return config
})
// 响应拦截
// axiosIns.interceptors.response.use(function (response) {
//   let data = response.data
//   let status = response.status
//   if (status === 200) {
//     return Promise.resolve(response)
//   } else {
//     return Promise.reject(response)
//   }
// })

function http (url = '', params = {}, method = 'get') {
  return new Promise((resolve, reject) => {
    axiosIns({
      method: method,
      url: url,
      data: params
    }).then(function (response) {
      if (response.data.errorCode === -1000) {
        window.location.href = '/admin/portal/login.jsp'
        return
      }
      resolve(response.data)
    }).catch(function (err) {
      reject(err)
    })
  })
}
export default http

// Vue.prototype.$axios = api;

/* 1 根据process.env.NODE_ENV 获取对应的apiDomain
 * 2 处理ajax库axios，为了以后不重复引用，挂在原型对象上
 * 3 axios是封装在main.js里面的，是为了获取vue实例操作store、router
 * 4 组件里面使用this.$axios.get or  this.$axios.post 调用  使用debugger，查看接口返回数据的走向
 */
