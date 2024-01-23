/* eslint-disable no-unused-vars */
import { Tabs } from 'antd'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'

import useLoadComponentList from '@/hooks/useLoadComponentList'
import PropComponent from './PropComponent'
import PageSetting from './PageSetting'
import { useEffect, useState } from 'react'

enum TABS_KEY {
  ATTRIBYTE = 'attribute',
  SETTING = 'setting',
}

const TabItem = [
  {
    key: TABS_KEY.ATTRIBYTE,
    label: '属性',
    children: <PropComponent />,
    icon: <FileTextOutlined />,
  },
  {
    key: TABS_KEY.SETTING,
    label: '页面设置',
    children: <PageSetting />,
    icon: <SettingOutlined />,
  },
]

const RightPanel = () => {
  const { selectId } = useLoadComponentList()
  const [activeKey, setActiveKey] = useState(TABS_KEY.ATTRIBYTE)

  useEffect(() => {
    if (selectId) {
      setActiveKey(TABS_KEY.ATTRIBYTE)
    } else {
      setActiveKey(TABS_KEY.SETTING)
    }
  }, [selectId])

  return <Tabs activeKey={activeKey} items={TabItem}></Tabs>
}

export default RightPanel
