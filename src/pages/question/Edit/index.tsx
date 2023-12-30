// import { Spin } from 'antd'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'

import styles from './Edit.module.scss'

import EditCanvas from '@/pages/question/Edit/EditCanvas'

const Edit = () => {
  const { loading } = useLoadQuestionData()

  return (
    <div className={styles.content}>
      <div className={styles['content-header']}>Header</div>
      <div className={styles['content-wrapper']}>
        <div className={styles['content-wrapper__main']}>
          <div className={styles['main-left']}>组件</div>
          <div className={styles['main-center']}>
            <div style={{ textAlign: 'center', marginTop: '200px' }}>
              {loading ? '' : ''}
              <EditCanvas />
            </div>
          </div>
          <div className={styles['main-right']}>详情</div>
        </div>
      </div>
    </div>
  )
}

export default Edit
