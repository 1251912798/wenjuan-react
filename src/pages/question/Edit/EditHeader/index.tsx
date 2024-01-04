import { Button, Space, Typography } from 'antd'
import { LeftOutlined, CheckOutlined, EditOutlined } from '@ant-design/icons'

import styles from './EditHeader.module.scss'
import EditToolbar from './EditToolbar'

const { Title } = Typography
const EditHeader = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Space>
            <Button icon={<LeftOutlined />} type="link">
              返回
            </Button>
            <Title style={{ fontSize: '18px', margin: 0 }}>问卷标题</Title>
            <Button type="text" icon={<EditOutlined />}></Button>
          </Space>
        </div>
        <div className={styles.center}>
          <EditToolbar />
        </div>
        <div className={styles.right}>
          <Space>
            <Button icon={<CheckOutlined />}>保存</Button>
            <Button type="primary">发布</Button>
          </Space>
        </div>
      </div>
    </>
  )
}

export default EditHeader
