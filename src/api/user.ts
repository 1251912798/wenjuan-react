import http from '../utils/request'

// 用户登陆
type loginType = {
  username: string
  password: string
}
export const LoginApi = (data: loginType) => http.post('/api/user/login', data)

// 用户注册
type registerType = {
  username: string
  password: string
  nickname?: string
}
export const RegisterApi = (data: registerType) => http.post('/api/user/register', data)

// 用户信息
export const getUserInfoApi = () => http.get('/api/user/info')
