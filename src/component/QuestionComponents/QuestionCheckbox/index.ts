/**
 *  @description 多选组件
 *  @author yinp
 *  */
import PropsComponent from './PropsComponent'
import QuesitonCheckbox from './QuesitonCheckbox'

import { CHECKBOX_DEFAULT_PROPS } from './checkbox'

export * from './checkbox'

export default {
  title: '多选标题',
  type: 'quesitonCheckbox',
  Component: QuesitonCheckbox,
  PropsComponent,
  defaultProps: CHECKBOX_DEFAULT_PROPS,
}
