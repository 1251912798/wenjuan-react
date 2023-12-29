import { useEffect, useState } from 'react'
import { useRequest } from 'ahooks'
import { useDispatch } from 'react-redux'

import { loginUserInfo } from '@/store/userSlice'
import useGetUserInfo from './useGetUserInfo'
import { getUserInfoApi } from '@/api/user'

const useLoadUserInfo = () => {
  const dispatch = useDispatch()
  const [isLogin, setIsLogin] = useState(true)

  // 请求用户信息
  const { run } = useRequest(getUserInfoApi, {
    manual: true,
    onSuccess(result) {
      const { username, nickname } = result
      console.log(result)
      dispatch(loginUserInfo({ username, nickname }))
    },
    onFinally() {
      setIsLogin(false)
    },
  })

  // 判断Redux中是否已经存在用户信息
  const { username } = useGetUserInfo()
  useEffect(() => {
    console.log(username)

    // 存在的话，直接返回
    if (username) {
      setIsLogin(false)
      return
    }
    // 不存在的话重新请求
    run()
  }, [username])
  return { isLogin }
}

export default useLoadUserInfo
