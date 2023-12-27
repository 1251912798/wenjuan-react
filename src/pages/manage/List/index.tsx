import { Spin, Empty } from 'antd'
import ListSearch from '../../../component/ListSearch'
import QuestionCard from '../../../component/QuestionCard'
import ListPage from '@/component/ListPage'
import useLoadQusestionListData from '../../../hooks/useLoadQusestionListData'
import styles from '../common.module.scss'

const List = () => {
  const { data = {}, loading } = useLoadQusestionListData()
  const { list = [], total = 0 } = data //

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
      <div className={styles.footer}>
        <ListPage total={total} />
      </div>
    </>
  )
}

export default List
