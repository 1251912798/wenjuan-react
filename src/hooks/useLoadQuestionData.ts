import { useDispatch } from 'react-redux'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { restComponent } from '@/store/componentSlice'
import { getQuestionDetailApi } from '../api/question'
const useLoadQuestionData = () => {
  const dispatch = useDispatch()
  const { id = '' } = useParams()

  const { data, run, loading, error } = useRequest(
    async (id: string) => {
      if (!id) throw new TypeError('id is required')
      const data = await getQuestionDetailApi(id)
      return data
    },
    {
      manual: true,
    }
  )

  useEffect(() => {
    if (!data) return
    const { componentList = [] } = data
    dispatch(restComponent({ componentList }))
  }, [data])

  useEffect(() => {
    run(id)
  }, [id])

  return { loading, error }
}

export default useLoadQuestionData
