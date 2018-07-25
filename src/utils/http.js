import axios from 'axios'
import { Loading, MessageBox } from 'element-ui'
import helper from './helper'

// create an axios instance
const service = axios.create({
  timeout: 5000 // request timeout
})
// token
const ticket = helper.getQueryString('ticket')
const domain = helper.getQueryString('domain')
// request interceptor
service.interceptors.request.use((config) => {
  // config
  config.headers.Accept = 'application/json'
  config.headers.ticket = ticket
  config.headers.domain = domain
  if (config.url.indexOf('jsse') > 0) {
    config.data || (config.data = {})
    Object.assign(config.data, {ticket, domain})
  }
  return config
})
// respone interceptor
// service.interceptors.response.use((response) => {
//   let data = response.data
//   let status = response.status
//   loadinginstace.close()
//   if (status === 200) {
//     return Promise.resolve(response)
//   } else {
//     return Promise.reject(response)
//   }
// })

function requestHandle (params, isLoading = true) {
  let loadinginstace
  if (isLoading) {
    loadinginstace = Loading.service({ fullscreen: true })
  }
  return new Promise((resolve, reject) => {
    service(params).then(res => {
      if (isLoading) {
        loadinginstace.close()
      }
      if (res.data.errorCode === -1000) {
        MessageBox.alert('会话超时，请重新登录', '提示', {callback: eschandler})
        return
      }
      resolve(res.data)
    }).catch(function (err) {
      if (isLoading) loadinginstace.close()
      reject(err)
    })
  })
}
function eschandler () {
  let logout = () => {
    window.location.href = '/admin/portal/login.jsp'
  }
  service({
    url: '/admin/logout.ajax'
  }).then((res) => {
    if (res.success) {
      logout()
    } else {
      logout()
    }
  })
}
export default {
  post (url, params, isLoading) {
    return requestHandle({
      method: 'post',
      url: url,
      data: params
    }, isLoading)
  },
  get (url, params, isLoading) {
    return requestHandle({
      method: 'get',
      url: helper.queryString(url, params)
    }, isLoading)
  }
}
