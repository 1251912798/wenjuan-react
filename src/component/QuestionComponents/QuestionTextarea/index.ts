/**
 *  @description 多行输入组件
 *  @author yinp
 */
import PropsComponent from './PropsComponent'
import QuestionTextarea from './QuestionTextarea'

import { TEXTAREA_DEFAULT_PROPS } from './textarea'

export * from './textarea'

export default {
  title: '多行输入',
  type: 'questionTextarea',
  Component: QuestionTextarea,
  PropsComponent,
  defaultProps: TEXTAREA_DEFAULT_PROPS,
}
