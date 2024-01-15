import { Form, Input } from 'antd'
import { useEffect } from 'react'

import type { TextareaPropsType } from './textarea'
const PropsComponent = (props: TextareaPropsType) => {
  const { title, placeholder, onChange, disabled } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, placeholder })
  }, [title, placeholder])

  const onChangeProps = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }
  return (
    <>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ title, placeholder }}
        disabled={disabled}
        onValuesChange={onChangeProps}
      >
        <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Placeholder" name="placeholder">
          <Input />
        </Form.Item>
      </Form>
    </>
  )
}

export default PropsComponent
