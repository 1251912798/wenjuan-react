import { useEffect } from 'react'
import { Form, Input, Select, Checkbox } from 'antd'

import type { TitlePropsType } from './title'
const PropsComponent = (props: TitlePropsType) => {
  const { title, isCenter, level, onChange, disabled } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, isCenter, level })
  }, [title, isCenter, level])

  const onChangeProps = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <Form
      form={form}
      layout="vertical"
      disabled={disabled}
      onValuesChange={onChangeProps}
      initialValues={{ title, isCenter, level }}
    >
      <Form.Item name="title" label="标题" rules={[{ required: true, message: '请输入标题' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="level" label="标题层级">
        <Select
          options={[
            { label: 1, value: 1 },
            { label: 2, value: 2 },
            { label: 3, value: 3 },
          ]}
        />
      </Form.Item>
      <Form.Item name="isCenter" valuePropName="checked">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default PropsComponent
