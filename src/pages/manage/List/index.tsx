import { Spin, Empty } from 'antd'
import ListSearch from '../../../component/ListSearch'
import QuestionCard from '../../../component/QuestionCard'
import styles from '../common.module.scss'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDebounceFn, useRequest } from 'ahooks'
import { getQuestionListApi } from '@/api/question'
import { LIST_PAGE_SIZE_DEFAULT, LIST_SEARCH_KEY } from '@/consts'

const List = () => {
  const [searchParams] = useSearchParams()

  const [page, setPage] = useState(1) // 当前页码
  const [questionList, setQuesList] = useState([]) // 问卷列表
  const [total, setTotal] = useState(0) // 问卷总数
  const [firstLoad, setFirstLoad] = useState(false)
  const moreListData = total > questionList.length
  const keyword = searchParams.get(LIST_SEARCH_KEY) || ''
  const { loading, run: loadQusestion } = useRequest(
    async () => {
      const data = await getQuestionListApi({
        page,
        pageSize: LIST_PAGE_SIZE_DEFAULT,
        keyword,
      })
      return data
    },
    {
      manual: true,
      onSuccess: result => {
        const { list = [], total = 0 } = result
        setTotal(total)
        setQuesList(questionList.concat(list))
        setPage(page + 1)
      },
    }
  )

  // 搜索内容变化时，重置数据
  useEffect(() => {
    setFirstLoad(false)
    setPage(1)
    setQuesList([])
    setTotal(0)
  }, [keyword])

  const content = useRef<HTMLDivElement>(null)
  const { run: loadMore } = useDebounceFn(
    () => {
      const contentElm = content.current
      if (contentElm === null) return
      const domRect = contentElm.getBoundingClientRect()
      if (domRect === null) return
      // 获取DOM边界信息的bottom属性，即元素底部距离视口顶部的距离
      const { bottom } = domRect
      // 如果元素底部距离视口顶部的距离小于或等于文档的body高度，
      // 则表示该元素完全在视口中可见
      if (bottom <= document.body.clientHeight) {
        loadQusestion()
        setFirstLoad(true)
      }
    },
    { wait: 1000 }
  )

  useEffect(() => {
    loadMore()
  }, [searchParams])

  // 监听滚动事件
  useEffect(() => {
    if (moreListData) {
      window.addEventListener('scroll', loadMore)
    }
    return () => {
      window.removeEventListener('scroll', loadMore)
    }
  }, [searchParams, moreListData])

  // 加载数据
  const loadMoreElm = useMemo(() => {
    if (!firstLoad || loading) return <Spin />
    if (total === 0) return <Empty description="暂无数据" />
    if (!moreListData) return <div>没有更多数据了.....</div>
    return <span>正在加载下一页</span>
  }, [loading, moreListData])

  return (
    <>
      <div className={styles.header}>
        <h2>我的问卷</h2>
        <div>
          <ListSearch />
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        {questionList.length > 0 &&
          questionList.map((item: any) => {
            return <QuestionCard key={item._id} {...item}></QuestionCard>
          })}
      </div>
      <div className={styles.footer}>
        <div ref={content}>{loadMoreElm}</div>
      </div>
    </>
  )
}

export default List
