import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import ComponentLib from './ComponentLib'
import Layer from './Layer'

const TabItem = [
  {
    key: 'componentLib',
    label: '组件库',
    children: <ComponentLib />,
    icon: <AppstoreOutlined />,
  },
  {
    key: 'layer',
    label: '图层',
    children: <Layer />,
    icon: <UnorderedListOutlined />,
  },
]

const LeftPanel = () => {
  return <Tabs defaultActiveKey="componentLib" items={TabItem} />
}

export default LeftPanel
