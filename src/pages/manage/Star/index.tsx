import { Spin, Empty } from 'antd'
import QuestionCard from '../../../component/QuestionCard'
import ListSearch from '../../../component/ListSearch'
import useLoadQusestionListData from '../../../hooks/useLoadQusestionListData'
import styles from '../common.module.scss'
import ListPage from '@/component/ListPage'

const Star = () => {
  const { data = {}, loading } = useLoadQusestionListData({ isStar: true })
  const { list = [], total = 0 } = data
  return (
    <>
      <div className={styles.header}>
        <h2>星标问卷 </h2>
        <div>
          <ListSearch />
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        {loading && <Spin />}
        {!loading && list.length === 0 && <Empty description="暂无数据" />}
        {list.length > 0 &&
          list.map((item: any) => <QuestionCard key={item._id} {...item}></QuestionCard>)}
      </div>
      {!!list.length && (
        <div className={styles.footer}>
          <ListPage total={total} />
        </div>
      )}
    </>
  )
}

export default Star
