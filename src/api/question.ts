import http from '../utils/request'

type questionListParamsType = {
  keyword: string
  isDeleted: boolean
  isStar: boolean
  page: number
  pageSize: number
}

// 创建问卷
export const createQuestionApi = () => http.post('/api/question')

// 获取问卷详情
export const getQuestionDetailApi = (id: number | string) => http.get(`/api/question/${id}`)

// 获取问卷列表
export const getQuestionListApi = (params: Partial<questionListParamsType>) =>
  http.get('/api/question', params)
