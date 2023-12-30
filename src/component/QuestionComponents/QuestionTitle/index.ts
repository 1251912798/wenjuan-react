/**
 *  @description 输入组件
 *  @author yinp
 */
import QuestionTitle from './QuestionTitle'
import { TITLE_DEFAULT_PROPS } from './title'

export * from './title'

export default {
  title: '输入框',
  type: 'questionTitle',
  Component: QuestionTitle,
  defaultProps: TITLE_DEFAULT_PROPS,
}
