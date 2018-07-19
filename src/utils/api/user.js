import $http from '../http'
export default class User {
  constructor () {
    this.jsseUrl = JSSEAPI
    console.log(this.jsseUrl)
    this.apiUrl = V1API
    this.imageUrl = IMAGEAPI
  }
  getCity (data) {
    return $http.post(`${this.jsseUrl}cityManager/listOpenCity`, data)
  }
}
