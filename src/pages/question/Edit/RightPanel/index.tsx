import { Tabs } from 'antd'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'
import PropComponent from './PropComponent'

const TabItem = [
  {
    key: 'attribute',
    label: '属性',
    children: <PropComponent />,
    icon: <FileTextOutlined />,
  },
  {
    key: 'setting',
    label: '页面设置',
    children: <div>页面设置</div>,
    icon: <SettingOutlined />,
  },
]
const RightPanel = () => {
  return <Tabs defaultActiveKey="attribute" items={TabItem}></Tabs>
}

export default RightPanel
