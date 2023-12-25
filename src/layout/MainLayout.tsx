import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Space } from 'antd'
import { FormOutlined } from '@ant-design/icons'
const { Header, Footer, Content } = Layout
Space
import styles from './MainLayout.module.scss'
import UserInfo from '../component/UserInfo/UserInfo'

const MainLayout = () => {
  return (
    <Layout style={{ minWidth: '800px' }}>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Space>
            <FormOutlined />
            调查宝
          </Space>
        </div>
        <UserInfo />
      </Header>
      <Content className={styles.content}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>调查宝 &copy;2023 Created by Yinp</Footer>
    </Layout>
  )
}

export default MainLayout
