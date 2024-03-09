/**
 *  @description 单选组件
 *  @author yinp
 *  */
import PropsComponent from './PropsComponent'
import QuestionRadio from './QuestionRadio'

import { RADIO_DEFAULT_PROPS } from './radio'
import StatComponent from './StatComponent'

export * from './radio'

export default {
  title: '单选标题',
  type: 'questionRadio',
  Component: QuestionRadio,
  PropsComponent,
  StatComponent,
  defaultProps: RADIO_DEFAULT_PROPS,
}
