import { Input, message, Button, Space } from 'antd'
import { LockOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'

import { updateComponentTitle } from '@/store/componentSlice'
import useLoadComponentList from '@/hooks/useLoadComponentList'
import { onSelectId } from '@/store/componentSlice'

import styles from './Layer.module.scss'
import type { ChangeEvent } from 'react'

const Layer = () => {
  const { componentList = [], selectId } = useLoadComponentList()
  const dispatch = useDispatch()
  // 记录当前选中的id
  const [recordTitleId, setRecordTitleId] = useState('')

  // 点击选中组件
  const onSelectCpmponent = (id: string) => {
    const nowComponent = componentList.find(item => item.fe_id === id)
    if (nowComponent && nowComponent.isHeid) {
      return message.info('不能选中隐藏组件')
    }
    if (id !== selectId) {
      dispatch(onSelectId(id))
      setRecordTitleId('')
      return
    }
    setRecordTitleId(id)
  }

  // 修改组件title
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim()
    if (value === undefined) return
    dispatch(updateComponentTitle(value))
  }
  return (
    <>
      {componentList.map(item => {
        const { fe_id, title, isHeid, isLock } = item
        const slectTitle = styles.active
        const titleTitle = classNames({ [slectTitle]: fe_id === selectId })

        return (
          <div key={fe_id} className={styles.wrap} onClick={() => onSelectCpmponent(fe_id)}>
            <div className={titleTitle}>
              {recordTitleId === fe_id ? (
                <Input
                  value={title}
                  onPressEnter={() => setRecordTitleId('')}
                  onBlur={() => setRecordTitleId('')}
                  onChange={onChangeTitle}
                />
              ) : (
                title
              )}
            </div>
            <div className={styles.hendler}>
              <Space>
                <Button
                  icon={<EyeInvisibleOutlined />}
                  shape="circle"
                  type={isHeid ? 'primary' : 'text'}
                ></Button>
                <Button
                  icon={<LockOutlined />}
                  shape="circle"
                  type={isLock ? 'primary' : 'text'}
                ></Button>
              </Space>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Layer
