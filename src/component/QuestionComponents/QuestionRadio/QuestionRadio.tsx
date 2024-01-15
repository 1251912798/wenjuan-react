import { Radio, Typography, Space } from 'antd'

import { RADIO_DEFAULT_PROPS } from './radio'
import type { RadioPropsType } from './radio'
const { Paragraph } = Typography
const QuestionRadio = (props: RadioPropsType) => {
  const { title, options = [], isColumn, defaultValue } = { ...RADIO_DEFAULT_PROPS, ...props }
  return (
    <>
      <div>
        <Paragraph strong>{title}</Paragraph>
      </div>
      <Radio.Group value={defaultValue}>
        <Space direction={isColumn ? 'vertical' : 'horizontal'}>
          {options.map(item => {
            return (
              <Radio key={item.value} value={item.value}>
                {item.label}
              </Radio>
            )
          })}
        </Space>
      </Radio.Group>
    </>
  )
}

export default QuestionRadio
