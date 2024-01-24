import { useSelector } from 'react-redux'

import type { PageInfoType } from '@/store/pageInfoSlice'
import type { StateType } from '@/store/index'

const useGetPageInfo = () => {
  const pageInfo = useSelector<StateType>(state => state.pageInfo) as PageInfoType
  return pageInfo
}

export default useGetPageInfo
