// import { Spin } from 'antd'
import { useDispatch } from 'react-redux'
import { onSelectId } from '@/store/componentSlice'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
import EditCanvas from '@/pages/question/Edit/EditCanvas'

import styles from './Edit.module.scss'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const Edit = () => {
  const dispatch = useDispatch()
  const { loading } = useLoadQuestionData()
  const onCancel = () => {
    dispatch(onSelectId(''))
  }
  return (
    <div className={styles.content}>
      <div className={styles['content-header']}>Header</div>
      <div className={styles['content-wrapper']}>
        <div className={styles['content-wrapper__main']}>
          <div className={styles['main-left']}>
            <LeftPanel />
          </div>
          <div onClick={onCancel} className={styles['main-center']}>
            <div className={styles.canvas_box}>
              <EditCanvas loading={loading} />
            </div>
          </div>
          <div className={styles['main-right']}>
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
