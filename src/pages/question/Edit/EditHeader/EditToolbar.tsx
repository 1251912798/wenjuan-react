import { Space, Button, Tooltip } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const EditToolbar = () => {
  return (
    <Space>
      <Tooltip title="删除">
        <Button shape="circle" icon={<DeleteOutlined />} />
      </Tooltip>
      <Tooltip title="隐藏">
        <Button shape="circle" icon={<DeleteOutlined />} />
      </Tooltip>
      <Tooltip title="锁定">
        <Button shape="circle" icon={<DeleteOutlined />} />
      </Tooltip>
      <Tooltip title="复制">
        <Button shape="circle" icon={<DeleteOutlined />} />
      </Tooltip>
      <Tooltip title="上移">
        <Button shape="circle" icon={<DeleteOutlined />} />
      </Tooltip>
      <Tooltip title="下移">
        <Button shape="circle" icon={<DeleteOutlined />} />
      </Tooltip>
      <Tooltip title="撤销">
        <Button shape="circle" icon={<DeleteOutlined />} />
      </Tooltip>
      <Tooltip title="重做">
        <Button shape="circle" icon={<DeleteOutlined />} />
      </Tooltip>
    </Space>
  )
}

export default EditToolbar
