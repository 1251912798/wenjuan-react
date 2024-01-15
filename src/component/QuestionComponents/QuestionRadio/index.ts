/**
 *  @description 单选组件
 *  @author yinp
 *  */
import PropsComponent from './PropsComponent'
import QuestionRadio from './QuestionRadio'

import { RADIO_DEFAULT_PROPS } from './radio'

export * from './radio'

export default {
  title: '单选标题',
  type: 'questionRadio',
  Component: QuestionRadio,
  PropsComponent,
  defaultProps: RADIO_DEFAULT_PROPS,
}
