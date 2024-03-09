/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Spin, Typography, Table, Pagination } from 'antd'
import { useRequest } from 'ahooks'

import { getStatListApi } from '@/api/stat'
import { useParams } from 'react-router-dom'
import useLoadComponentList from '@/hooks/useLoadComponentList'
import { STAT_PAGE_SIZE } from '@/consts/index'

const { Title } = Typography

type PropsTyps = {
  statSelectId: string
  setStatSelectId: (id: string) => void
  setSelectComponentType: (type: string) => void
}

const QuestionStatTable = (props: PropsTyps) => {
  const { statSelectId, setStatSelectId, setSelectComponentType } = props
  const { id = '' } = useParams()
  const [total, setTotal] = useState(0)
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(STAT_PAGE_SIZE)

  // 请求数据
  const { loading } = useRequest(
    async () => {
      const res = await getStatListApi(id, { page: page, pageSize: pageSize })

      return res
    },
    {
      refreshDeps: [id, page, pageSize],
      onSuccess(res) {
        const { total, list = [] } = res
        setTotal(total)
        setList(list)
      },
    }
  )

  // 表格dataSource
  const { componentList = [] } = useLoadComponentList()

  const columns = componentList.map(item => {
    const { fe_id, type, title, props = {} } = item

    return {
      title: (
        <div
          style={{ cursor: 'pointer', color: statSelectId === fe_id ? 'skyblue' : '' }}
          onClick={() => {
            setStatSelectId(fe_id)
            setSelectComponentType(type)
          }}
        >
          {props!.title || title}
        </div>
      ),
      dataIndex: fe_id,
    }
  })

  const dataSource = list.map((item: any) => ({ ...item, key: item.id }))

  const TbaleComponent = () => (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false}></Table>
      <Pagination
        style={{ textAlign: 'center', marginTop: 10 }}
        current={page}
        pageSize={pageSize}
        pageSizeOptions={[5, 10, 20, 30]}
        total={total}
        onChange={page => setPage(page)}
        onShowSizeChange={(page, pageSize) => {
          setPage(page)
          setPageSize(pageSize)
        }}
      ></Pagination>
    </>
  )

  return (
    <>
      {loading ? <Spin></Spin> : <Title level={3}>答卷数量：{total}</Title>}
      {!loading && <TbaleComponent />}
    </>
  )
}

export default QuestionStatTable
