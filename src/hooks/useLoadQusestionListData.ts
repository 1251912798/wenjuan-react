import { useSearchParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getQuestionListApi } from '../api/question'
import { LIST_SEARCH_KEY } from '../consts'
LIST_SEARCH_KEY
const useLoadQusestionListData = () => {
  const [searchParams] = useSearchParams()

  const { loading, data, error } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_KEY) || ''

      const data = await getQuestionListApi({ keyword })
      return data
    },
    {
      refreshDeps: [searchParams], // 依赖项
    }
  )

  return { loading, data, error }
}

export default useLoadQusestionListData
