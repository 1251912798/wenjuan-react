/**
 *  @description 输入组件
 *  @author yinp
 */
import QuestionInput from './QuestionInput'
import { INPUT_DEFAULT_PROPS } from './input'

export * from './input'

export default {
  title: '输入框',
  type: 'questionInput',
  Component: QuestionInput,
  defaultProps: INPUT_DEFAULT_PROPS,
}
