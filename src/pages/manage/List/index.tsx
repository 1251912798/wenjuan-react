import { Spin, Empty } from 'antd'
import ListSearch from '../../../component/ListSearch'
import QuestionCard from '../../../component/QuestionCard'

import styles from '../common.module.scss'
import useLoadQusestionListData from '../../../hooks/useLoadQusestionListData'

const List = () => {
  // const { loading, data = {} } = useRequest(getQuestionListApi)

  const { data = {}, loading } = useLoadQusestionListData()
  const { list = [] } = data // total = 0

  // 问卷搜索
  return (
    <>
      <div className={styles.header}>
        <h2>我的问卷</h2>
        <div>
          <ListSearch />
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        {loading && <Spin />}
        {list.length < 0 && <Empty></Empty>}
        {!loading &&
          list.length &&
          list.map((item: any) => {
            return <QuestionCard key={item.id} {...item}></QuestionCard>
          })}
      </div>
      <div className={styles.footer}>Footer</div>
    </>
  )
}

export default List
