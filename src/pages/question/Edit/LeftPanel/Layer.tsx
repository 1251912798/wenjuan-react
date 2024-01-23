import { Input, message, Button, Space } from 'antd'
import { LockOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'

import { updateComponentTitle, lockComponent, hideComponent } from '@/store/componentSlice'
import useLoadComponentList from '@/hooks/useLoadComponentList'
import { onSelectId } from '@/store/componentSlice'

import styles from './Layer.module.scss'
import type { ChangeEvent, MouseEvent } from 'react'

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

  // 锁定组件
  const onLockComponent = (id: string, event: MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    if (!id) return
    dispatch(lockComponent({ fe_id: id }))
  }

  // 隐藏组件
  const onHeidComponent = (id: string, isHeid: boolean, event: MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    if (!id) return
    dispatch(hideComponent({ fe_id: id, isHeid: isHeid }))
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
                  className={isHeid ? '' : styles.btn}
                  type={isHeid ? 'primary' : 'text'}
                  onClick={event => onHeidComponent(fe_id, !isHeid as boolean, event)}
                ></Button>
                <Button
                  icon={<LockOutlined />}
                  shape="circle"
                  className={isLock ? '' : styles.btn}
                  type={isLock ? 'primary' : 'text'}
                  onClick={event => onLockComponent(fe_id, event)}
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
