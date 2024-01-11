/**
 *  @description 标题组件
 *  @author yinp
 */
import PropsComponent from './PropsComponent'
import QuestionTitle from './QuestionTitle'

import { TITLE_DEFAULT_PROPS } from './title'

export * from './title'

export default {
  title: '输入框',
  type: 'questionTitle',
  Component: QuestionTitle,
  PropsComponent,
  defaultProps: TITLE_DEFAULT_PROPS,
}
