import { Typography, Input } from 'antd'

import { INPUT_DEFAULT_PROPS } from './input'
import type { InputPropsType } from './input'

const { Paragraph } = Typography
const QuestionInput = (props: InputPropsType) => {
  const { title, placeholder } = { ...INPUT_DEFAULT_PROPS, ...props }

  return (
    <div>
      <Paragraph strong style={{ marginBottom: '5px' }}>
        {title}
      </Paragraph>
      <div>
        <Input type="text" placeholder={placeholder} />
      </div>
    </div>
  )
}

export default QuestionInput
