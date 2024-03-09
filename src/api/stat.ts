import http from '../utils/request'

// 创建问卷
export const getStatListApi = (qusetionId: string, options: { page: number; pageSize: number }) =>
  http.get(`/api/stat/${qusetionId}`, options)

export const getStatDatasApi = (questionId: string, componentId: string) =>
  http.get(`/api/stat/${questionId}/${componentId}`)
