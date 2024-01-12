import { Typography } from 'antd'

import { PARAGRAPH_DEFAULT_PROPS } from './index'
import type { ParagraphPropsType } from './index'

const { Paragraph } = Typography
const QuestionParagraph = (props: ParagraphPropsType) => {
  const { text = '', isCenter } = { ...PARAGRAPH_DEFAULT_PROPS, ...props }

  const textList = text.split('\n')

  return (
    <>
      <Paragraph style={{ textAlign: isCenter ? 'center' : 'start', marginBottom: '0' }}>
        {textList.map((item, index) => (
          <span key={index}>
            {index > 0 && <br />}
            {item}
          </span>
        ))}
      </Paragraph>
    </>
  )
}

export default QuestionParagraph
