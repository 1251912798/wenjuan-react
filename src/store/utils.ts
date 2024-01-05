import { CommentInfoType } from './componentSlice'

export const getNextSelectId = (fe_id: string, componentList: CommentInfoType[]) => {
  const index = componentList.findIndex(item => item.fe_id === fe_id)
  if (index < 0) return ''

  let newSelectId = ''
  const length = componentList.length
  // 如果只有一个组件，则返回空
  if (length <= 1) {
    return ''
  } else {
    // 如果当前是最后一个，则返回上一个
    if (length === index + 1) {
      newSelectId = componentList[index - 1].fe_id
    } else {
      // 如果不是最后一个，则返回下一个
      newSelectId = componentList[index + 1].fe_id
    }
  }
  return newSelectId
}
