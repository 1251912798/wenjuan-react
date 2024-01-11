import { FC } from 'react'
import QuestionInputConf from './QuestionInput/index'
import QuestionTitleConf from './QuestionTitle/index'
import QuestionParagraphConf from './QuestionParagraph'

import type { InputPropsType } from './QuestionInput/index'
import type { TitlePropsType } from './QuestionTitle/index'
import type { ParagraphPropsType } from './QuestionParagraph'

// 各组件的props类型
export type CommentPropsType = InputPropsType | TitlePropsType | ParagraphPropsType

export type ComponentConfigType = {
  title: string
  type: string
  Component: FC<CommentPropsType>
  PropsComponent: FC<CommentPropsType>
  defaultProps: CommentPropsType
}

const componentConfList: ComponentConfigType[] = [
  QuestionInputConf,
  QuestionTitleConf,
  QuestionParagraphConf,
]

// 组件分组
export const componentGroup = [
  {
    groupId: 'text',
    title: '文本显示',
    componentList: [QuestionTitleConf, QuestionParagraphConf],
  },
  {
    groupId: 'input',
    title: '用户输入',
    componentList: [QuestionInputConf],
  },
]

// 根据type获取组件配置
export const getComponentType = (type: string) => {
  return componentConfList.find(item => item.type === type)
}
