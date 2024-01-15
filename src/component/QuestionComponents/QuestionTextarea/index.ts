/**
 *  @description 多行输入组件
 *  @author yinp
 */
import PropsComponent from './PropsComponent'
import QuestionTextatea from './QuestionTextarea'

import { TEXTAREA_DEFAULT_PROPS } from './textarea'

export * from './textarea'

export default {
  title: '多行输入',
  type: 'questionTextatea',
  Component: QuestionTextatea,
  PropsComponent,
  defaultProps: TEXTAREA_DEFAULT_PROPS,
}
