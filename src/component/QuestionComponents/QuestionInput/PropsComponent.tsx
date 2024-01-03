import { Form, Input } from 'antd'
import { InputPropsType } from './input'
import { useEffect } from 'react'

const PropsComponent = (props: InputPropsType) => {
  const { title, placeholder } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, placeholder })
  }, [title, placeholder])

  return (
    <>
      <Form form={form} layout="vertical" initialValues={{ title, placeholder }}>
        <Form.Item name="title" label="标题" rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="placeholder" label="Placeholder">
          <Input />
        </Form.Item>
      </Form>
    </>
  )
}

export default PropsComponent
