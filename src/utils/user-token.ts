/**
 * @description 用户token管理
 * @author Yinp
 * */

export const TOKEN_KEY = 'token'

// 读取token
export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}
// 获取token
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY) || ''
}

// 删除token
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}
