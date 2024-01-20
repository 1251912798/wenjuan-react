import { useDispatch } from 'react-redux'
import classNames from 'classnames'
import useLoadComponentList from '@/hooks/useLoadComponentList'
import { onSelectId } from '@/store/componentSlice'

import styles from './Layer.module.scss'
import { Input, message } from 'antd'
import { useState } from 'react'

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
  return (
    <>
      {componentList.map(item => {
        const { fe_id, title } = item
        const slectTitle = styles.active
        const titleTitle = classNames({ [slectTitle]: fe_id === selectId })

        return (
          <div key={fe_id} className={styles.wrap} onClick={() => onSelectCpmponent(fe_id)}>
            <div className={titleTitle}>
              {recordTitleId === fe_id ? <Input value={title} /> : title}
            </div>
            <div className={styles.hendler}>按钮</div>
          </div>
        )
      })}
    </>
  )
}

export default Layer
