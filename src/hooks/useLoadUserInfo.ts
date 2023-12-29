import { useEffect, useState } from 'react'
import { useRequest } from 'ahooks'
import { useDispatch } from 'react-redux'

import { loginUserInfo } from '@/store/userSlice'
import useGetUserInfo from './useGetUserInfo'
import { getUserInfoApi } from '@/api/user'
import { getToken } from '@/utils/user-token'

const useLoadUserInfo = () => {
  const dispatch = useDispatch()
  const [isLogin, setIsLogin] = useState(true)
  const { username } = useGetUserInfo()

  const { run } = useRequest(getUserInfoApi, {
    manual: true,
    onSuccess(result) {
      const { username, nickname } = result
      dispatch(loginUserInfo({ username, nickname }))
    },
    onFinally() {
      setIsLogin(false)
    },
  })

  useEffect(() => {
    if (username) {
      setIsLogin(false)
      return
    }
    if (getToken()) {
      run()
    }
  }, [username])
  return { isLogin }
}

export default useLoadUserInfo
