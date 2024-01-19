import { Radio, Typography, Space } from 'antd'

import { RADIO_DEFAULT_PROPS } from './radio'
import type { RadioPropsType } from './radio'

const { Paragraph } = Typography

const QuestionRadio = (props: RadioPropsType) => {
  const { title, options = [], isColumn, value } = { ...RADIO_DEFAULT_PROPS, ...props }
  return (
    <>
      <Paragraph strong>{title}</Paragraph>
      <Radio.Group value={value}>
        <Space direction={isColumn ? 'vertical' : 'horizontal'} wrap>
          {options.map(item => {
            const { value, label } = item
            return (
              <Radio key={value} value={value}>
                {label}
              </Radio>
            )
          })}
        </Space>
      </Radio.Group>
    </>
  )
}

export default QuestionRadio
