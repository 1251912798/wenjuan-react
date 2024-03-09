/**
 *  @description 多选组件
 *  @author yinp
 *  */
import PropsComponent from './PropsComponent'
import QuesitonCheckbox from './QuesitonCheckbox'

import { CHECKBOX_DEFAULT_PROPS } from './checkbox'
import StatComponent from './StatComponent'
export * from './checkbox'

export default {
  title: '多选标题',
  type: 'questionCheckbox',
  Component: QuesitonCheckbox,
  PropsComponent,
  defaultProps: CHECKBOX_DEFAULT_PROPS,
  StatComponent,
}
