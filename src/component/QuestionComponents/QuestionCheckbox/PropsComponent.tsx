import { Form, Input, Checkbox, Space, Button } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { nanoid } from 'nanoid'

import type { CheckboxPropsType, optionsType } from './checkbox'
import { useEffect } from 'react'

const PropsComponent = (props: CheckboxPropsType) => {
  const { title, isColumn, list = [], disabled } = props
  const { onChange } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, isColumn, list })
  }, [title, isColumn, list])

  const onChangeProps = () => {
    if (onChange) {
      const newForm = form.getFieldsValue() as CheckboxPropsType

      if (newForm.list) {
        newForm.list = newForm.list.filter(item => !(item.label == null))
      }
      const { list = [] } = newForm
      list.forEach((item: optionsType) => {
        if (item.value) return
        item.value = nanoid(5)
      })
      onChange(newForm)
    }
  }

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        disabled={disabled}
        onValuesChange={onChangeProps}
        initialValues={{ title, isColumn, list }}
      >
        <Form.Item name="title" label="标题" rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="选项">
          <Form.List name="list">
            {(fields, { add, remove }) => {
              return (
                <>
                  <Space direction="vertical">
                    {fields.map(({ name, key }) => (
                      <Space key={key} align="baseline">
                        <Form.Item name={[name, 'checked']} valuePropName="checked">
                          <Checkbox />
                        </Form.Item>

                        <Form.Item
                          name={[name, 'label']}
                          rules={[
                            { required: true, message: '请输入选项文字' },
                            {
                              validator: (_, label) => {
                                const { list = [] } = form.getFieldsValue()
                                let num = 0
                                list.forEach((item: optionsType) => {
                                  if (item.label === label) num++
                                })
                                if (num === 1) return Promise.resolve()
                                return Promise.reject(new Error('选项名称不能重复'))
                              },
                            },
                          ]}
                        >
                          <Input placeholder="请输入选项文字" />
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
                      onClick={() => add({ label: '', value: '', Checkbox: false })}
                    >
                      添加选项
                    </Button>
                  </Form.Item>
                </>
              )
            }}
          </Form.List>
        </Form.Item>
        <Form.Item name="isColumn" valuePropName="checked">
          <Checkbox>竖向排列</Checkbox>
        </Form.Item>
      </Form>
    </>
  )
}

export default PropsComponent
