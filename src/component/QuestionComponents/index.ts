import { FC } from 'react'
import QuestionInputConf from './QuestionInput/index'
import QuestionTitleConf from './QuestionTitle/index'
import QuestionParagraphConf from './QuestionParagraph'
import QuestionInfoConf from './QuestionInfo'
import QuestionTextareaConf from './QuestionTextarea'
import QuestionRadioConf from './QuestionRadio'

import type { InputPropsType } from './QuestionInput/index'
import type { TitlePropsType } from './QuestionTitle/index'
import type { ParagraphPropsType } from './QuestionParagraph'
import type { InfoPropsType } from './QuestionInfo'
import type { TextareaPropsType } from './QuestionTextarea'
import type { RadioPropsType } from './QuestionRadio'

// 各组件的props类型
export type CommentPropsType =
  | InputPropsType
  | TitlePropsType
  | ParagraphPropsType
  | InfoPropsType
  | TextareaPropsType
  | RadioPropsType

export type ComponentConfigType = {
  title: string
  type: string
  Component: FC<CommentPropsType>
  PropsComponent: FC<CommentPropsType>
  defaultProps: CommentPropsType
}

const componentConfList: ComponentConfigType[] = [
  QuestionInfoConf,
  QuestionInputConf,
  QuestionTitleConf,
  QuestionParagraphConf,
  QuestionTextareaConf,
  QuestionRadioConf,
]

// 组件分组
export const componentGroup = [
  {
    groupId: 'text',
    title: '文本显示',
    componentList: [QuestionInfoConf, QuestionTitleConf, QuestionParagraphConf],
  },
  {
    groupId: 'input',
    title: '用户输入',
    componentList: [QuestionInputConf, QuestionTextareaConf],
  },
  {
    groupId: 'select',
    title: '用户选择',
    componentList: [QuestionRadioConf],
  },
]

// 根据type获取组件配置
export const getComponentType = (type: string) => {
  return componentConfList.find(item => item.type === type)
}
