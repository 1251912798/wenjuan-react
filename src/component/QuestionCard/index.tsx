import { Card, Flex, Divider, Space, Tag, Button, Popconfirm, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useRequest } from 'ahooks'

import { updatedQusetionApi, copyQuestionApi } from '@/api/question'

import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
} from '@ant-design/icons'

import styles from './QuestionCard.module.scss'

type PropsType = {
  id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createTime: string
}

const QuestionCard = (props: PropsType) => {
  const { id, title, isPublished, isStar, answerCount, createTime } = props
  const navigate = useNavigate()
  const [isStart, setIsStart] = useState(isStar)

  // 复制问卷
  const { loading: copyLoading, run: onCopy } = useRequest(async () => await copyQuestionApi(id), {
    manual: true,
    onSuccess(result) {
      console.log(result)

      navigate(`/question/edit/${result.id}`)
      message.success('复制成功')
    },
  })

  const [isDeletedState, setIsDeletedState] = useState(false)
  // 删除问卷
  const { run: onDel, loading: delLoading } = useRequest(
    async () => {
      await updatedQusetionApi(id, { isDeleted: true })
    },
    {
      manual: true,
      onSuccess() {
        message.success('删除成功')
        setIsDeletedState(true)
      },
    }
  )

  // 更新星标
  const { loading: changeStarLoading, run: onUpdateStar } = useRequest(
    async () => {
      await updatedQusetionApi(id, { isStar: !isStart })
    },
    {
      manual: true,
      onSuccess: () => {
        setIsStart(!isStart)
        message.success('更新成功~')
      },
    }
  )

  if (isDeletedState) return null
  return (
    <Card hoverable bordered={false} style={{ marginBottom: '15px' }}>
      <Flex>
        <div className={styles.title_left}>
          <Link to={isPublished ? `/question/stat/${id}` : `/question/edit/${id}`}>
            <Space>
              {isStart && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.title_right}>
          <Space>
            {isPublished ? <Tag color="blue">已发布</Tag> : <Tag>未发布</Tag>}
            <p>答卷:{answerCount}</p>
            <p>{createTime}</p>
          </Space>
        </div>
      </Flex>
      <Divider style={{ margin: '15px 0' }}></Divider>
      <Flex justify="space-between">
        <div className={styles.operation_left}>
          <Space>
            <Button icon={<EditOutlined />} type="text">
              编辑问卷
            </Button>
            <Button icon={<LineChartOutlined />} disabled={!isPublished} type="text">
              数据统计
            </Button>
          </Space>
        </div>
        <div className={styles.operation_right}>
          <Space style={{ color: '#666' }}>
            <Button
              onClick={onUpdateStar}
              type="text"
              loading={changeStarLoading}
              icon={<StarOutlined />}
            >
              {isStart ? '取消标星' : '标星'}
            </Button>
            <Popconfirm
              onConfirm={() => onCopy()}
              title="确定复制该问卷?"
              okText="确认"
              cancelText="取消"
            >
              <Button loading={copyLoading} type="text" icon={<CopyOutlined />}>
                复制
              </Button>
            </Popconfirm>

            <Popconfirm onConfirm={onDel} title="确认删除该问卷?" okText="确认" cancelText="取消">
              <Button loading={delLoading} type="text" icon={<DeleteOutlined />}>
                删除
              </Button>
            </Popconfirm>
          </Space>
        </div>
      </Flex>
    </Card>
  )
}

export default QuestionCard
