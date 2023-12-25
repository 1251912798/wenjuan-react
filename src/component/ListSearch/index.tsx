import { useState } from 'react'
import { Input } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

import { LIST_SEARCH_KEY } from '../../consts/index'

import type { ChangeEvent } from 'react'

const { Search } = Input
const ListSearch = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [urlValue, setUrlValue] = useState('')

  // 监听输入框变化
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrlValue(e.target.value)
  }

  // 搜索
  const onSearch = (newVal: string) => {
    navigate({
      pathname,
      search: `${LIST_SEARCH_KEY}=${newVal}`,
    })
  }

  return (
    <Search
      value={urlValue}
      placeholder="请输入标题..."
      onSearch={(val: string) => onSearch(val)}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
      style={{ width: 200 }}
    />
  )
}

export default ListSearch
