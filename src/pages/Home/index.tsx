import { Button, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

import styles from './Hmoe.module.scss'
import { LOGIN_PATH } from '../../router/index'

const { Title, Paragraph } = Typography
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.content}>
      <Title>问卷调查 | 在线投票</Title>
      <Paragraph>已累计创建问卷1002份，发布问卷102份，收到答卷1002份</Paragraph>
      <div>
        <Button onClick={() => navigate(LOGIN_PATH)} type="primary" className={styles.btn}>
          开始使用
        </Button>
      </div>
    </div>
  )
}

export default Home
