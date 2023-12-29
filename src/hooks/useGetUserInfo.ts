import { useSelector } from 'react-redux'

import type { UserType } from '@/store/index'
import type { userType } from '@/store/userSlice'

const useGetUserInfo = () => {
  const { username, nickname } = useSelector<UserType>(state => state.user) as userType

  return { username, nickname }
}

export default useGetUserInfo
