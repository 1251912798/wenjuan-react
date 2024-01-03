import { Tabs } from 'antd'
import { AndroidOutlined } from '@ant-design/icons'
import PropComponent from './PropComponent'

const TabItem = [
  {
    key: 'attribute',
    label: '属性',
    children: <PropComponent />,
    icon: <AndroidOutlined />,
  },
  {
    key: 'setting',
    label: '页面设置',
    children: <div>页面设置</div>,
    icon: <AndroidOutlined />,
  },
]
const RightPanel = () => {
  return <Tabs defaultActiveKey="attribute" items={TabItem}></Tabs>
}

export default RightPanel
