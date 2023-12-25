/* eslint-disable no-unused-vars */
import { Table, Tag, Pagination, Space, Button } from 'antd'

import ListSearch from '../../../component/ListSearch'

import styles from '../common.module.scss'
import React, { useState } from 'react'

const questionData = [
  {
    id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: true,
    answerCount: 4,
    createTime: '3月09 日 13:11',
  },
  {
    id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStar: false,
    answerCount: 18,
    createTime: '3月12日 13:11',
  },
  {
    id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStar: true,
    answerCount: 10,
    createTime: '3月11日 13:11',
  },
  {
    id: 'q4',
    title: '问卷4',
    isPublished: true,
    isStar: false,
    answerCount: 21,
    createTime: '3月11日 13:11',
  },
  {
    id: 'q5',
    title: '问卷5',
    isPublished: true,
    isStar: false,
    answerCount: 55,
    createTime: '3月12日 13:11',
  },
]
const Trash = () => {
  const [questionList, setQuestionList] = useState(questionData)
  const [selectedIds, setSelectedIds] = useState<React.Key[]>([])
  const [current, setCurrent] = useState(1)

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

  // 问卷选中
  const onSelectChange = (selectedRowKeys: React.Key[]) => {
    console.log('selectedRo wKeys changed: ', selectedRowKeys)
    setSelectedIds(selectedRowKeys)
  }

  // 表格多选框
  const rowSelection = {
    selectedIds,
    onChange: onSelectChange,
  }
  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.left}>回收站</h2>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div>
        <Space style={{ marginBottom: '15px' }}>
          <Button type="primary" disabled={!selectedIds.length}>
            恢复
          </Button>
          <Button danger disabled={!selectedIds.length}>
            彻底删除
          </Button>
        </Space>
        <Table
          dataSource={questionList}
          columns={columns}
          rowSelection={rowSelection}
          pagination={false}
          rowKey={record => record.id}
        ></Table>
      </div>
      <div className={styles.footer}>
        <Pagination
          current={current}
          defaultCurrent={1}
          defaultPageSize={5}
          showSizeChanger={false}
          total={questionList.length}
        ></Pagination>
      </div>
    </>
  )
}

export default Trash
