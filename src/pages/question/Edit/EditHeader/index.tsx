import { useState } from 'react'
import { Button, Space, Typography, Input } from 'antd'
import { useDispatch } from 'react-redux'
import { LeftOutlined, CheckOutlined, EditOutlined, LoadingOutlined } from '@ant-design/icons'

import EditToolbar from './EditToolbar'
import useGetPageInfo from '@/hooks/useGetPageInfo'
import { updatedPageTitle } from '@/store/pageInfoSlice'

import styles from './EditHeader.module.scss'

import type { ChangeEvent } from 'react'
import { useParams } from 'react-router-dom'
import useLoadComponentList from '@/hooks/useLoadComponentList'
import { useDebounceEffect, useKeyPress, useRequest } from 'ahooks'
import { updatedQusetionApi } from '@/api/question'

const { Title } = Typography

// 标题组件
const TitleComponent = () => {
  const { title } = useGetPageInfo()
  const dispatch = useDispatch()

  const [editState, setEditState] = useState(false)

  // 修改标题
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.trim()
    dispatch(updatedPageTitle(newValue))
  }

  // 编辑标题
  if (editState) {
    return (
      <Input
        value={title}
        onChange={onChangeValue}
        onPressEnter={() => setEditState(false)}
        onBlur={() => setEditState(false)}
      />
    )
  }

  return (
    <Space>
      <Title style={{ fontSize: '18px', margin: 0 }}>{title}</Title>
      <Button type="text" icon={<EditOutlined />} onClick={() => setEditState(true)}></Button>
    </Space>
  )
}

const PreserveQuestion = () => {
  const { id } = useParams()
  const pageInfo = useGetPageInfo()
  const { componentList = [] } = useLoadComponentList()

  const { loading, run: save } = useRequest(
    async () => {
      if (!id) return
      await updatedQusetionApi(id, { ...pageInfo, componentList })
    },
    { manual: true }
  )

  useKeyPress('ctrl.s', (event: KeyboardEvent) => {
    event.preventDefault()
    if (!loading) save()
  })

  useDebounceEffect(
    () => {
      save()
    },
    [componentList, pageInfo],
    { wait: 1000 }
  )

  return (
    <Button
      icon={loading ? <LoadingOutlined /> : <CheckOutlined />}
      disabled={loading}
      onClick={save}
    >
      保存
    </Button>
  )
}

// 编辑头部
const EditHeader = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Space>
            <Button icon={<LeftOutlined />} type="link">
              返回
            </Button>
            <TitleComponent />
          </Space>
        </div>
        <div className={styles.center}>
          <EditToolbar />
        </div>
        <div className={styles.right}>
          <Space>
            <PreserveQuestion />
            <Button type="primary">发布</Button>
          </Space>
        </div>
      </div>
    </>
  )
}

export default EditHeader
