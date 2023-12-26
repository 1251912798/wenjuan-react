import { message } from 'antd'
import axios from 'axios'

const instance = axios.create({
  timeout: 5000,
})

// 响应拦截
instance.interceptors.response.use(res => {
  const resData = (res.data || {}) as ResType
  const { code, data, msg } = resData
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
