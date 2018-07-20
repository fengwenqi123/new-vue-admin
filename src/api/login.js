import request from '@/utils/request'
import qs from 'qs'

export function login(loginName, password, loginType, loginSource) {
  const data = qs.stringify({
    loginName,
    password,
    loginType,
    loginSource
  })
  return request({
    url: '/login/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  const data = qs.stringify({
    accessToken: token
  })
  return request({
    url: '/login/user/online',
    method: 'POST',
    data
  })
}

export function logout() {
  return request({
    url: '/login/user/logout',
    method: 'post'
  })
}
