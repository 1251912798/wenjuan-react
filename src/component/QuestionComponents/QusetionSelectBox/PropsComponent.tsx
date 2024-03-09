import React, { useEffect } from 'react'
import { Form, Input, Space, Tooltip, Select } from 'antd'
import { nanoid } from 'nanoid'
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'

import type { SelectBoxPropsType, optionsType } from './index'

const PropsComponent = (props: SelectBoxPropsType) => {
  const { title, options = [], defaultValue, onChange, disabled } = props

  const [form] = Form.useForm()

  const onValueChange = () => {
    if (onChange) {
      const newFrom = form.getFieldsValue()
      const { options = [] } = newFrom
      options.forEach((item: optionsType) => {
        if (item.value) return
        item.value = nanoid(5)
        item.label = '输入选项名称...'
      })
      onChange(form.getFieldsValue())
    }
  }

  useEffect(() => {}, [title, options])

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        disabled={disabled}
        onValuesChange={onValueChange}
        initialValues={{ title, options, defaultValue }}
      >
        <Form.Item
          name="title"
          label="选择框标题"
          rules={[{ required: true, message: '标题不能为空' }]}
        >
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

                        <Space>
                          <Tooltip title="在此选项下添加">
                            <PlusCircleOutlined
                              onClick={() => add({ label: '', value: '' }, name + 1)}
                            />
                          </Tooltip>

                          {fields.length > 2 && (
                            <MinusCircleOutlined onClick={() => remove(name)} />
                          )}
                        </Space>
                      </Space>
                    ))}
                  </Space>
                </>
              )
            }}
          </Form.List>
          <Form.Item label="默认选中" name="defaultValue">
            <Select allowClear options={options} placeholder="请选择"></Select>
          </Form.Item>
        </Form.Item>
      </Form>
    </>
  )
}

export default PropsComponent
