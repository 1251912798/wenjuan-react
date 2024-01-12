/**
 *  @description 问卷信息组件
 *  @author yinp
 */
import PropsComponent from './PropsComponent'
import QuestionInfo from './QuestionInfo'

import { INFO_DEFAULT_PROPS } from './info'

export * from './info'

export default {
  title: '问卷信息',
  type: 'questionInfo',
  Component: QuestionInfo,
  PropsComponent,
  defaultProps: INFO_DEFAULT_PROPS,
}
