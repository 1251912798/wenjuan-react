import { useDispatch } from 'react-redux'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { restComponent } from '@/store/componentSlice'
import { getQuestionDetailApi } from '../api/question'
const useLoadQuestionData = () => {
  const dispatch = useDispatch()
  const { id = '' } = useParams()

  // 获取组件列表
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

  // 组件列表加载完成，更新redux
  useEffect(() => {
    if (!data) return
    const { componentList = [] } = data

    // 默认选中第一个组件
    let selectId = ''
    if (componentList.length) {
      selectId = componentList[0].fe_id
    }

    dispatch(restComponent({ componentList, selectId }))
  }, [data])

  // 进入编辑页面时(id就已经发生改变)，获取组件列表
  useEffect(() => {
    run(id)
  }, [id])

  return { loading, error }
}

export default useLoadQuestionData
