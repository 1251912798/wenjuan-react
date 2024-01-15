import { Typography, Input } from 'antd'

import { TEXTAREA_DEFAULT_PROPS } from './textarea'
import type { TextareaPropsType } from './textarea'

const { Paragraph } = Typography
const { TextArea } = Input
const QuestionTextarea = (props: TextareaPropsType) => {
  const { title, placeholder } = { ...TEXTAREA_DEFAULT_PROPS, ...props }

  return (
    <>
      <div>
        <Paragraph strong>{title}</Paragraph>
      </div>
      <div>
        <TextArea placeholder={placeholder}></TextArea>
      </div>
    </>
  )
}

export default QuestionTextarea
