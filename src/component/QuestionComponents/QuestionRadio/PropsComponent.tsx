import { Form, Input, Checkbox, Select, Space, Button } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import type { RadioPropsType } from './radio'
import { useEffect } from 'react'
const PropsComponent = (props: RadioPropsType) => {
  const { title, options = [], isColumn, defaultValue, onChange, disabled } = props
  const [form] = Form.useForm()

  const onChangeProps = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  useEffect(() => {
    form.setFieldsValue({ title, isColumn, defaultValue, options })
  }, [title, isColumn, defaultValue, options])
  return (
    <>
      <Form
        form={form}
        initialValues={{ title, isColumn, defaultValue, options }}
        onValuesChange={onChangeProps}
        disabled={disabled}
        layout="vertical"
      >
        <Form.Item label="标题" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="选项">
          <Form.List name="options">
            {(fields, { add, remove }) => {
              return (
                <>
                  {fields.map(({ name, key }, index) => (
                    <Space key={key} align="baseline">
                      <Form.Item
                        name={[name, 'label']}
                        rules={[{ required: true, message: '请输入选项名称...' }]}
                      >
                        <Input placeholder="输入选项文字..." />
                      </Form.Item>

                      {index > 1 && <MinusCircleOutlined onClick={() => remove(name)} />}
                    </Space>
                  ))}

                  <Button type="link" icon={<PlusOutlined />} block onClick={() => add()}>
                    添加选项
                  </Button>
                </>
              )
            }}
          </Form.List>
        </Form.Item>
        <Form.Item label="默认选中" name="defaultValue">
          <Select options={options} value={defaultValue} />
        </Form.Item>
        <Form.Item name="isColumn" valuePropName="checked">
          <Checkbox>竖向排列</Checkbox>
        </Form.Item>
      </Form>
    </>
  )
}

export default PropsComponent
