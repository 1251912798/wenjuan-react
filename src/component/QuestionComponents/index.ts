import { FC } from 'react'
import QuestionInputConf from './QuestionInput/index'
import QuestionTitleConf from './QuestionTitle/index'

import type { InputPropsType } from './QuestionInput/index'
import type { TitlePropsType } from './QuestionTitle/index'

// 各组件的props类型
export type CommentPropsType = InputPropsType | TitlePropsType

export type ComponentConfigType = {
  title: string
  type: string
  Component: FC<CommentPropsType>
  defaultProps: CommentPropsType
}

const componentConfList: ComponentConfigType[] = [QuestionInputConf, QuestionTitleConf]

// 根据type获取组件配置
export const getComponentType = (type: string) => {
  return componentConfList.find(item => item.type === type)
}
