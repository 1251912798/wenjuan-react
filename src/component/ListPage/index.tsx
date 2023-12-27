import { LIST_PAGE_SIZE_DEFAULT, LIST_PAGE_KEY, LIST_PAGE_SIZE_KEY } from '@/consts'
import { Pagination } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

type PropsType = {
  total: number
}
const ListPage = (props: PropsType) => {
  const { total } = props
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(LIST_PAGE_SIZE_DEFAULT)
  const pageSizeOptions = [5, 10, 20, 30]

  const [searchParams] = useSearchParams()
  useEffect(() => {
    const page = +(searchParams.get(LIST_PAGE_KEY) || '') || 1
    setCurrent(page)
    const pageSize = +(searchParams.get(LIST_PAGE_SIZE_KEY) || '') || LIST_PAGE_SIZE_DEFAULT
    setPageSize(pageSize)
  }, [searchParams])

  // 页码改变
  const onPageChange = (current: number, size: number) => {
    searchParams.set(LIST_PAGE_KEY, current.toString())
    searchParams.set(LIST_PAGE_SIZE_KEY, size.toString())
    navigate({
      pathname,
      search: searchParams.toString(),
    })
  }

  return (
    <Pagination
      current={current}
      pageSize={pageSize}
      pageSizeOptions={pageSizeOptions}
      total={total}
      onChange={onPageChange}
    />
  )
}

export default ListPage
