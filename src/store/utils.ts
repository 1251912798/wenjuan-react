import { CommentInfoType } from './componentSlice'

export const getNextSelectId = (fe_id: string, componentList: CommentInfoType[]) => {
  const isHeidList = componentList.filter(item => !item.isHeid)

  const index = isHeidList.findIndex(item => item.fe_id === fe_id)
  if (index < 0) return ''

  let newSelectId = ''
  const length = isHeidList.length
  // 如果只有一个组件，则返回空
  if (length <= 1) {
    newSelectId = ''
  } else {
    // 如果当前是最后一个，则返回上一个
    if (length === index + 1) {
      newSelectId = isHeidList[index - 1].fe_id
    } else {
      // 如果不是最后一个，则返回下一个
      newSelectId = isHeidList[index + 1].fe_id
    }
  }
  return newSelectId
}
