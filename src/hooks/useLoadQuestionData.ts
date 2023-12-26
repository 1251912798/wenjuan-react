import { getQuestionDetailApi } from '../api/question'
import { useRequest } from 'ahooks'
import { useParams } from 'react-router-dom'

const useLoadQuestionData = () => {
  const { id = '' } = useParams()

  const getQuestionDetail = async () => {
    const data = await getQuestionDetailApi(id)
    return data
  }
  const { loading, data, error } = useRequest(getQuestionDetail)
  return { loading, data, error }
}

export default useLoadQuestionData
