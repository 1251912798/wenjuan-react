import { Button, Divider, Space } from 'antd'
import {
  UnorderedListOutlined,
  StarOutlined,
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styles from './MenuLayout.module.scss'
const MenuLayout = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const buttonType = (path: string) => {
    return pathname.split('/')[2] === path ? 'default' : 'text'
  }

  const handlePath = (path: string) => {
    if (path === pathname.split('/')[2]) return

    console.log('123')
    navigate(path)
  }
  return (
    <>
      <div className={styles.content}>
        <div className={styles.left}>
          <Button type="primary" icon={<PlusOutlined />}>
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
