/**
 *  @description 段落组件
 *  @author yinp
 */
// 表单组件
import PropsComponent from './PropsComponent'
// 组件
import QuestionParagraph from './QuestionParagraph'
// 默认配置
import { PARAGRAPH_DEFAULT_PROPS } from './paragraph'

export * from './paragraph'

export default {
  title: '段落',
  type: 'questionParagraph',
  Component: QuestionParagraph,
  PropsComponent,
  defaultProps: PARAGRAPH_DEFAULT_PROPS,
}
