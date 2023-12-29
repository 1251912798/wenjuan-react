import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import useGetUserInfo from './useGetUserInfo'
import { isLoginResgiterPage, isNoLoginManagePage } from '@/router/index'
const useNavPage = (isLogin: boolean) => {
  const navigate = useNavigate()
  const { username } = useGetUserInfo()
  const { pathname } = useLocation()

  useEffect(() => {
    if (isLogin) return
    // 判断是否登录
    if (username) {
      if (isLoginResgiterPage(pathname)) {
        navigate('/manage/list')
      }
      return
    }
    //判断未登录
    if (isNoLoginManagePage(pathname)) {
      return
    } else {
      navigate('/login')
    }
  }, [isLogin, username, pathname])
}

export default useNavPage
