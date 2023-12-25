import { Card, Flex, Divider, Space, Tag, Button, Popconfirm, message } from 'antd'
import { Link } from 'react-router-dom'
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

  // 复制问卷
  const handleCopy = () => {
    message.success('复制成功')
  }

  // 删除问卷
  const handleDel = () => {
    message.success('删除成功')
  }

  return (
    <Card hoverable bordered={false} style={{ marginBottom: '15px' }}>
      <Flex>
        <div className={styles.title_left}>
          <Link to={isPublished ? `/question/stat/${id}` : `/question/edit/${id}`}>
            <Space>
              {isStar && <StarOutlined style={{ color: 'red' }} />}
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
            <Button type="text" icon={<StarOutlined />}>
              {isStar ? '取消标星' : '标星'}
            </Button>
            <Popconfirm
              onConfirm={handleCopy}
              title="确定复制该问卷?"
              okText="确认"
              cancelText="取消"
            >
              <Button type="text" icon={<CopyOutlined />}>
                复制
              </Button>
            </Popconfirm>

            <Popconfirm
              onConfirm={handleDel}
              title="确认删除该问卷?"
              okText="确认"
              cancelText="取消"
            >
              <Button type="text" icon={<DeleteOutlined />}>
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
