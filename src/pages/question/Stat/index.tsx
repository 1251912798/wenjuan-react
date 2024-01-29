import { Spin, Result, Button } from 'antd'

import StatHeader from './StatHeader'
import useGetPageInfo from '@/hooks/useGetPageInfo'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import { useNavigate } from 'react-router-dom'

import styles from './index.module.scss'

const Stat = () => {
  const navigate = useNavigate()
  const { loading } = useLoadQuestionData()

  const { isPublished } = useGetPageInfo()

  const isLoadingComponent = (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <Spin />
    </div>
  )

  // 判断是否发布
  const isPublishComponent = () => {
    if (typeof isPublished === 'boolean' && !isPublished) {
      return (
        <div style={{ flex: 1 }}>
          <Result
            status="warning"
            subTitle="此问卷未发布！"
            extra={
              <Button onClick={() => navigate(-1)} type="primary">
                返 回
              </Button>
            }
          />
        </div>
      )
    }
    return (
      <>
        <div className={styles.left}>Left</div>
        <div className={styles.main}>Main</div>
        <div className={styles.right}>Right</div>
      </>
    )
  }

  return (
    <div className={styles.container}>
      <StatHeader />
      <div className={styles.wrap}>
        {loading && isLoadingComponent}
        {!loading && <div className={styles.content}>{isPublishComponent()}</div>}
      </div>
    </div>
  )
}

export default Stat
