/* eslint-disable no-unused-vars */
import { Table, Tag, Pagination, Space, Button, Spin, Empty, Divider, message } from 'antd'

import ListSearch from '../../../component/ListSearch'
import useLoadQusestionListData from '../../../hooks/useLoadQusestionListData'
import styles from '../common.module.scss'
import React, { useState } from 'react'
import ListPage from '@/component/ListPage'
import { updatedQusetionApi } from '@/api/question'
import { useRequest } from 'ahooks'

const Trash = () => {
  const [selectedIds, setSelectedIds] = useState<React.Key[]>([])

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (state: boolean) => {
        return state ? <Tag color="blue">已发布</Tag> : <Tag>未发布</Tag>
      },
    },
    {
      title: '答卷',
      dataIndex: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
  ]
  const { data = {}, loading, refresh } = useLoadQusestionListData({ isDeleted: true })
  const { list = [], total = 0 } = data

  // 问卷选中
  const onSelectChange = (selectedRowKeys: React.Key[]) => {
    console.log(selectedRowKeys)
    console.log(selectedIds)

    setSelectedIds(selectedRowKeys)
  }

  // 表格多选框
  const rowSelection = {
    selectedIds,
    onChange: onSelectChange,
  }

  // 恢复
  const { run: recover, loading: recoverLoading } = useRequest(
    async () => {
      for await (const id of selectedIds) {
        await updatedQusetionApi(id as string | number, { isDeleted: false })
      }
    },
    {
      manual: true,
      onSuccess: () => {
        message.success('恢复成功')
        setSelectedIds([])
        refresh()
      },
    }
  )

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.left}>回收站</h2>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      {loading && (
        <div style={{ textAlign: 'center' }}>
          <Spin />
        </div>
      )}
      {!loading && list.length === 0 && <Empty description="暂无数据"></Empty>}
      {list.length > 0 && (
        <>
          <div>
            <Space style={{ marginBottom: '15px' }}>
              <Button
                loading={recoverLoading}
                onClick={recover}
                type="primary"
                disabled={selectedIds.length == 0}
              >
                恢复
              </Button>
              <Button danger disabled={selectedIds.length == 0}>
                彻底删除
              </Button>
            </Space>
            <Table
              dataSource={list}
              columns={columns}
              rowSelection={rowSelection}
              pagination={false}
              rowKey={record => record.id}
            ></Table>
          </div>
          <div className={styles.footer}>
            <ListPage total={total} />
          </div>
        </>
      )}
    </>
  )
}

export default Trash
