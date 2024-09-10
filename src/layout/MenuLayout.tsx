import { Button, Divider, Space, message } from 'antd'
import {
  UnorderedListOutlined,
  StarOutlined,
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { useRequest } from 'ahooks'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styles from './MenuLayout.module.scss'
import { createQuestionApi } from '../api/question'
const MenuLayout = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const buttonType = (path: string) => {
    return pathname.split('/')[2] === path ? 'default' : 'text'
  }
  // 切换问卷页Tab
  const handlePath = (path: string) => {
    if (path === pathname.split('/')[2]) return
    navigate(path)
  }

  // 点击新建问卷
  const { loading, run: onCreateQuestion } = useRequest(createQuestionApi, {
    manual: true,
    onSuccess: result => {
      navigate(`/question/edit/${result.id || result._id}`)
      message.success('创建成功~')
    },
  })

  return (
    <>
      <div className={styles.content}>
        <div className={styles.left}>
          <Button
            loading={loading}
            onClick={onCreateQuestion}
            type="primary"
            icon={<PlusOutlined />}
          >
            新建问卷
          </Button>
          <Divider />
          <Space direction="vertical">
            <Button
              onClick={() => handlePath('list')}
              type={buttonType('list')}
              icon={<UnorderedListOutlined />}
            >
              我的问卷
            </Button>
            <Button
              onClick={() => navigate('star')}
              type={buttonType('star')}
              icon={<StarOutlined />}
            >
              星标问卷
            </Button>
            <Button
              onClick={() => navigate('trash')}
              type={buttonType('trash')}
              icon={<DeleteOutlined />}
            >
              回 收 站
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}

export default MenuLayout
