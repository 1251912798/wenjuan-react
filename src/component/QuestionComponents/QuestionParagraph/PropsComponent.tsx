import { Form, Input, Checkbox } from 'antd'

import type { ParagraphPropsType } from './index'
import { useEffect } from 'react'

const { TextArea } = Input
const PropsComponent = (props: ParagraphPropsType) => {
  const { text, isCenter, disabled, onChange } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ text, isCenter })
  }, [isCenter, text])

  const onChangeProps = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }
  return (
    <Form
      form={form}
      disabled={disabled}
      layout="vertical"
      onValuesChange={onChangeProps}
      initialValues={{ text, isCenter }}
    >
      <Form.Item label="内容" name="text" rules={[{ required: true, message: '请输入段落内容' }]}>
        <TextArea />
      </Form.Item>
      <Form.Item name="isCenter" valuePropName="checked">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default PropsComponent
