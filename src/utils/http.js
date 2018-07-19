import axios from 'axios'
import { MessageBox } from 'element-ui'
import helper from './helper'

let axiosIns = axios.create({
  timeout: 30000,
  headers: {'Content-Type': 'application/json;charset=UTF-8'}
})

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

function requestHandle (params) {
  return new Promise((resolve, reject) => {
    axiosIns(params).then(res=> {
      if (res.data.errorCode === -1000) {
        MessageBox.alert('会话超时，请重新登录', '提示', {callback:function(){
          eschandler()
        }})
        return
      }
      resolve(res.data)
    }).catch(function (err) {
      reject(err)
    })
  })
}
function eschandler(){
  let logout = function(){
    window.location.href="/admin/portal/login.jsp";
  };
  axiosIns({
    url:'/admin/logout.ajax',
  }).then((res)=>{
    if(res.success) {
      logout();
    }else {
      logout();
    }
  })
}
export default {
  post (url, params, op) {
    return requestHandle({
      method: 'post',
      url: url,
      data: params
    })
  },
  get (url, params, op) {
    return requestHandle({
      method: 'get',
      url: helper.queryString(url, params)
    })
  }
}

