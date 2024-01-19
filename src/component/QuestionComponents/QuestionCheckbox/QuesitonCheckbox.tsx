import { Typography, Checkbox, Space } from 'antd'
import { CHECKBOX_DEFAULT_PROPS } from './checkbox'
import type { CheckboxPropsType } from './checkbox'

const { Paragraph } = Typography

const QuesitonCheckbox = (props: CheckboxPropsType) => {
  const { title, list = [], isColumn } = { ...CHECKBOX_DEFAULT_PROPS, ...props }

  return (
    <>
      <Paragraph strong>{title}</Paragraph>
      <Space direction={isColumn ? 'vertical' : 'horizontal'} wrap>
        {list.map(item => {
          const { value, label, checked } = item
          return (
            <Checkbox key={value} value={value} checked={checked}>
              {label}
            </Checkbox>
          )
        })}
      </Space>
    </>
  )
}

export default QuesitonCheckbox
