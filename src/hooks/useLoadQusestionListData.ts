import { useSearchParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getQuestionListApi } from '../api/question'
import {
  LIST_SEARCH_KEY,
  LIST_PAGE_SIZE_DEFAULT,
  LIST_PAGE_SIZE_KEY,
  LIST_PAGE_KEY,
} from '../consts'

type optionsType = {
  isDeleted: boolean
  isStar: boolean
}

const useLoadQusestionListData = (options: Partial<optionsType> = {}) => {
  const [searchParams] = useSearchParams()
  const { isDeleted, isStar } = options

  const { loading, data, error } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_KEY) || ''
      const page = +(searchParams.get(LIST_PAGE_KEY) || '') || 1
      const pageSize = +(searchParams.get(LIST_PAGE_SIZE_KEY) || '') || LIST_PAGE_SIZE_DEFAULT
      const data = await getQuestionListApi({ keyword, isDeleted, isStar, page, pageSize })
      return data
    },
    {
      refreshDeps: [searchParams], // 依赖项
    }
  )

  return { loading, data, error }
}

export default useLoadQusestionListData
