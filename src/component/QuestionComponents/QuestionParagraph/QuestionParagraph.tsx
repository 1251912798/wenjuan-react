import { Typography } from 'antd'

import { PARAGRAPH_DEFAULT_PROPS } from './index'
import type { ParagraphPropsType } from './index'

const { Paragraph } = Typography
const QuestionParagraph = (props: ParagraphPropsType) => {
  const { text = '', isCenter } = { ...PARAGRAPH_DEFAULT_PROPS, ...props }
  return (
    <>
      <Paragraph style={{ textAlign: isCenter ? 'center' : 'start', marginBottom: '0' }}>
        {text}
      </Paragraph>
    </>
  )
}

export default QuestionParagraph
