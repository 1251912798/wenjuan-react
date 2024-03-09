import { Typography, Select } from 'antd'
import { SELECTIONBOX_DEFAULT_PROPS } from './selectbox'

import type { SelectBoxPropsType } from './selectbox'

const { Paragraph } = Typography
const QusetionSelectBox = (props: SelectBoxPropsType) => {
  const {
    title,
    options = [],
    defaultValue = undefined,
  } = { ...SELECTIONBOX_DEFAULT_PROPS, ...props }

  return (
    <>
      <Paragraph strong>{title}</Paragraph>
      <Select
        style={{ width: '100%' }}
        value={defaultValue ? defaultValue : undefined}
        options={options}
        placeholder="请选择内容"
      ></Select>
    </>
  )
}

export default QusetionSelectBox
