/**
 *  @description 输入组件
 *  @author yinp
 */
import PropsComponent from './PropsComponent'
import QuestionInput from './QuestionInput'

import { INPUT_DEFAULT_PROPS } from './input'

export * from './input'

export default {
  title: '输入框',
  type: 'questionInput',
  Component: QuestionInput,
  PropsComponent,
  defaultProps: INPUT_DEFAULT_PROPS,
}
