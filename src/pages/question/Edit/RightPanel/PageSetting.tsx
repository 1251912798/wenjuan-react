import { Form, Input } from 'antd'
import { useDispatch } from 'react-redux'

import useGetPageInfo from '@/hooks/useGetPageInfo'
import { restPageInfo } from '@/store/pageInfoSlice'
import { useEffect } from 'react'

const { TextArea } = Input
const PageSetting = () => {
  const pageInfo = useGetPageInfo()
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const { title, desc, js, css } = pageInfo

  useEffect(() => {
    form.setFieldsValue({ title, desc, js, css })
  }, [pageInfo])

  const onChangeProps = () => {
    dispatch(restPageInfo(form.getFieldsValue()))
  }
  return (
    <Form form={form} layout="vertical" onValuesChange={onChangeProps} initialValues={pageInfo}>
      <Form.Item name="title" label="页面标题">
        <Input placeholder="请输入页面标题..." />
      </Form.Item>
      <Form.Item name="desc" label="页面描述">
        <TextArea placeholder="请输入页面描述..." />
      </Form.Item>
      <Form.Item name="css" label="样式代码">
        <TextArea placeholder="请输入css代码..." />
      </Form.Item>
      <Form.Item name="js" label="脚本代码">
        <TextArea placeholder="请输入js代码..." />
      </Form.Item>
    </Form>
  )
}

export default PageSetting
