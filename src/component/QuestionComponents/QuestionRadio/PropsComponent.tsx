import { Form, Input, Checkbox, Select, Space, Button } from 'antd'
import { useEffect } from 'react'
import { nanoid } from 'nanoid'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import type { RadioPropsType, optionsType } from './radio'

const PropsComponent = (props: RadioPropsType) => {
  const { title, options = [], isColumn, value, onChange, disabled } = props
  const [form] = Form.useForm()

  const onChangeProps = () => {
    if (onChange) {
      const newForm = form.getFieldsValue()
      const { options = [] } = newForm
      options.forEach((item: optionsType) => {
        if (item.value) return
        item.value = nanoid(5)
      })
      onChange(form.getFieldsValue())
    }
  }

  useEffect(() => {
    form.setFieldsValue({ title, isColumn, value, options })
  }, [title, isColumn, value, options])
  return (
    <>
      <Form
        form={form}
        initialValues={{ title, isColumn, value, options }}
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
                  <Space direction="vertical">
                    {fields.map(({ name, key }) => (
                      <Space key={key} align="baseline">
                        <Form.Item
                          name={[name, 'label']}
                          rules={[
                            { required: true, message: '请输入选项名称...' },
                            {
                              validator: (_, label) => {
                                const { options = [] } = form.getFieldsValue()
                                let num = 0
                                options.forEach((item: optionsType) => {
                                  if (item.label === label) num++
                                })
                                if (num === 1) return Promise.resolve()
                                return Promise.reject(new Error('选项名称不能重复'))
                              },
                            },
                          ]}
                        >
                          <Input placeholder="输入选项文字..." />
                        </Form.Item>

                        {fields.length > 2 && <MinusCircleOutlined onClick={() => remove(name)} />}
                      </Space>
                    ))}
                  </Space>

                  <Form.Item>
                    <Button
                      type="link"
                      icon={<PlusOutlined />}
                      block
                      onClick={() => add({ label: '', value: '' })}
                    >
                      添加选项
                    </Button>
                  </Form.Item>
                </>
              )
            }}
          </Form.List>
        </Form.Item>
        <Form.Item label="默认选中" name="value">
          <Select options={options} value={value} />
        </Form.Item>
        <Form.Item name="isColumn" valuePropName="checked">
          <Checkbox>竖向排列</Checkbox>
        </Form.Item>
      </Form>
    </>
  )
}

export default PropsComponent
