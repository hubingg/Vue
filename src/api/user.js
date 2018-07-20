import $http from '@/utils/http'
import Base from './base'
export default class User extends Base {
  getCity (data) {
    return $http.post(`${this.jsseUrl}cityManager/listOpenCity`, data)
  }
  getBanner(data){
    return $http.post(`${this.apiUrl}banner/list`, data)
  }
}
