/**
 *  @description 下拉框组件
 *  @author yinp
 *  */
import PropsComponent from './PropsComponent'
import QusetionSelectBox from './QusetionSelectBox'
import StatComponent from './StatComponent'

import { SELECTIONBOX_DEFAULT_PROPS } from './selectbox'

export * from './selectbox'

export default {
  title: '下拉框标题',
  type: 'questionSelectBox',
  Component: QusetionSelectBox,
  PropsComponent,
  defaultProps: SELECTIONBOX_DEFAULT_PROPS,
  StatComponent,
}
