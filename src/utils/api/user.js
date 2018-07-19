import $http from '../http'

export default class User {
  constructor () {}
  login (data) {
    return $http.post('url', data)
  }
}
