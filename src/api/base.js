// baseUrl,config in config/index.js
const nodeApi = process.NODE_API || 'dev'
const api = {
  apiJsseUrl: {
    dev: 'http://localhost:11021/jsse/',
    test: 'http://a8-domain.pagoda.com.cn:11021/jsse/',
    uat: 'http://a8-domain.pagoda.com.cn:14021/jsse/',
    production: 'http://119.29.140.47:14501/jsse/'
  },
  // 后台重构的新接口
  apiV1Url: {
    dev: 'http://localhost:11021/api/v1/',
    test: 'https://a8-domain.pagoda.com.cn:11048/api/v1/',
    uat: 'https://a8-domain.pagoda.com.cn:14062/api/v1/',
    production: 'http://139.199.185.97/api/v1/'
  },
  // 图片接口
  apiImgeUrl: {
    dev: 'http://localhost:11021/miResourceMgr/',
    test: 'http://a8-domain.pagoda.com.cn:11021/miResourceMgr/',
    uat: 'http://a8-domain.pagoda.com.cn:14021/miResourceMgr/',
    production: 'http://119.29.140.47:14501/miResourceMgr/'
  }
}
export default class Base {
  constructor () {
    this.jsseUrl = api.apiJsseUrl[nodeApi]
    this.apiUrl = api.apiV1Url[nodeApi]
    this.imageUrl = api.apiImgeUrl[nodeApi]
  }
}
