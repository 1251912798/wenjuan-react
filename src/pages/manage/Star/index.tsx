import { Spin, Empty } from 'antd'
import QuestionCard from '../../../component/QuestionCard'
import ListSearch from '../../../component/ListSearch'
import useLoadQusestionListData from '../../../hooks/useLoadQusestionListData'
import styles from '../common.module.scss'

const Star = () => {
  const { data = {}, loading } = useLoadQusestionListData({ isStar: true })
  const { list = [] } = data // total = 0
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
        {list.length < 0 && <Empty></Empty>}
        {list.map((item: any) => (
          <QuestionCard key={item.id} {...item}></QuestionCard>
        ))}
      </div>
      <div className={styles.footer}>Footer</div>
    </>
  )
}

export default Star
