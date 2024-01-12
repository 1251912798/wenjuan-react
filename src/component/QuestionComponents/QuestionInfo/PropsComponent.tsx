import { useEffect } from 'react'
import { Form, Input } from 'antd'

import type { InfoPropsType } from './info'

const { TextArea } = Input
const PropsComponent = (props: InfoPropsType) => {
  const { title, text, onChange, disabled } = props
  const [form] = Form.useForm()

  const onChangeProps = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  useEffect(() => {
    form.setFieldsValue({ title, text })
  }, [title, text])
  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onValuesChange={onChangeProps}
        disabled={disabled}
        initialValues={{ title, text }}
      >
        <Form.Item
          label="标题"
          name="title"
          rules={[{ required: true, message: '请输入问卷标题' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="描述" name="text">
          <TextArea />
        </Form.Item>
      </Form>
    </>
  )
}

export default PropsComponent
