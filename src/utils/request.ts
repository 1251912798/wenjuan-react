import { message } from 'antd'
import axios from 'axios'

import { getToken } from '@/utils/user-token'
import type { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  timeout: 5000,
})

// 请求拦截
instance.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

// 响应拦截
instance.interceptors.response.use(res => {
  const resData = (res.data || {}) as ResType

  const { code, data, msg } = resData
  console.log(resData)

  if (code !== 0) {
    if (msg) {
      message.error(msg)
    }
    throw new Error(msg)
  }

  return data as any
})

const http = {
  get: (url: string, params?: resDataType): Promise<resDataType> => instance.get(url, { params }),
  post: (url: string, data?: resDataType): Promise<resDataType> => instance.post(url, data),
  patch: (url: string, data?: resDataType): Promise<resDataType> => instance.patch(url, data),
  delete: (url: string, data?: resDataType): Promise<resDataType> => instance.delete(url, data),
}

export default http

export type ResType = {
  code: number
  data?: resDataType
  msg?: string
}

export type resDataType = {
  [key: string]: any
}
