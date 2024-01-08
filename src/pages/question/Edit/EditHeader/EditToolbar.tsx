import { Space, Button, Tooltip } from 'antd'
import { useDispatch } from 'react-redux'

import {
  deleteComponent,
  hideComponent,
  lockComponent,
  copySelectComponent,
  pasteComponent,
} from '@/store/componentSlice'
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  CopyOutlined,
  BlockOutlined,
} from '@ant-design/icons'
import useLoadComponentList from '@/hooks/useLoadComponentList'

const EditToolbar = () => {
  const dispatch = useDispatch()
  const { selectId, selectComponent, copyComponent } = useLoadComponentList()
  const { isLock } = selectComponent || {}

  // 删除组件
  const onDelete = () => {
    dispatch(deleteComponent())
  }

  // 隐藏组件
  const onHeid = () => {
    dispatch(hideComponent({ fe_id: selectId, isHeid: true }))
  }
  // 锁定/解锁 组件
  const toggleLock = () => {
    dispatch(lockComponent({ fe_id: selectId }))
  }

  // 复制组件
  const onCopy = () => {
    dispatch(copySelectComponent())
  }

  // 粘贴组件
  const onPaste = () => {
    dispatch(pasteComponent())
  }
  return (
    <Space>
      <Tooltip title="删除">
        <Button shape="circle" onClick={onDelete} icon={<DeleteOutlined />} />
      </Tooltip>
      <Tooltip title="隐藏">
        <Button shape="circle" onClick={onHeid} icon={<EyeInvisibleOutlined />} />
      </Tooltip>
      <Tooltip title="锁定">
        <Button
          shape="circle"
          onClick={toggleLock}
          icon={<LockOutlined />}
          type={isLock ? 'primary' : 'default'}
        />
      </Tooltip>
      <Tooltip title="复制">
        <Button shape="circle" onClick={onCopy} icon={<CopyOutlined />} />
      </Tooltip>
      <Tooltip title="粘贴">
        <Button
          shape="circle"
          onClick={onPaste}
          icon={<BlockOutlined />}
          disabled={!copyComponent}
        />
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
