import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Layout, Space, Spin } from 'antd'
import { FormOutlined } from '@ant-design/icons'

import UserInfo from '../component/UserInfo/UserInfo'
import useLoadUserInfo from '@/hooks/useLoadUserInfo'
import styles from './MainLayout.module.scss'
import useGetUserInfo from '@/hooks/useGetUserInfo'
import useNavPage from '@/hooks/useNavPage'

const { Header, Footer, Content } = Layout
const MainLayout = () => {
  const { isLogin } = useLoadUserInfo()
  const { username } = useGetUserInfo() // 获取用户信息
  const [path, setPath] = useState('/')
  useNavPage(isLogin)
  useEffect(() => {
    if (username) {
      setPath('/login')
    }
  }, [username])
  return (
    <Layout style={{ minWidth: '800px' }}>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Link to={path}>
            <Space>
              <FormOutlined />
              调查宝
            </Space>
          </Link>
        </div>
        <UserInfo />
      </Header>
      <Content className={styles.content}>
        {isLogin ? (
          <div
            style={{
              textAlign: 'center',
              marginTop: '300px',
            }}
          >
            <Spin />
          </div>
        ) : (
          <Outlet />
        )}
      </Content>
      <Footer className={styles.footer}>调查宝 &copy;2023 Created by Yinp</Footer>
    </Layout>
  )
}

export default MainLayout
