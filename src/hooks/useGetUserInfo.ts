import { useSelector } from 'react-redux'

import type { StateType } from '@/store/index'
import type { userType } from '@/store/userSlice'

const useGetUserInfo = () => {
  const { username, nickname } = useSelector<StateType>(state => state.user) as userType

  return { username, nickname }
}

export default useGetUserInfo
