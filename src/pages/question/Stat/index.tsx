import { Spin, Result, Button } from 'antd'

import StatHeader from './StatHeader'
import ComponentList from './ComponentList'
import QuestionStatTable from './QuestionStatTable'
import useGetPageInfo from '@/hooks/useGetPageInfo'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import { useNavigate } from 'react-router-dom'

import styles from './index.module.scss'
import { useState } from 'react'

const Stat = () => {
  const navigate = useNavigate()
  const { loading } = useLoadQuestionData()
  const { isPublished } = useGetPageInfo()
  const [statSelectId, setStatSelectId] = useState('')

  const [selectComponentType, setSelectComponentType] = useState('')

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
        <div className={styles.left}>
          <ComponentList
            statSelectId={statSelectId}
            setStatSelectId={setStatSelectId}
            setSelectComponentType={setSelectComponentType}
          />
        </div>
        <div className={styles.main}>
          <QuestionStatTable selectComponentType={selectComponentType} />
        </div>
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
