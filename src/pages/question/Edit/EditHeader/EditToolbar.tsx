import { Space, Button, Tooltip } from 'antd'
import { useDispatch } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import {
  deleteComponent,
  hideComponent,
  lockComponent,
  copySelectComponent,
  pasteComponent,
  dragSorter,
} from '@/store/componentSlice'
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  CopyOutlined,
  BlockOutlined,
  DownOutlined,
  UpOutlined,
  UndoOutlined,
  RedoOutlined,
} from '@ant-design/icons'

import useLoadComponentList from '@/hooks/useLoadComponentList'

const EditToolbar = () => {
  const dispatch = useDispatch()
  const { selectId, selectComponent, copyComponent, componentList = [] } = useLoadComponentList()
  const { isLock } = selectComponent || {}
  const selectIndex = componentList.findIndex(item => item.fe_id === selectId)
  const isFirst = selectIndex <= 0
  const isLast = selectIndex >= componentList.length - 1
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

  // 上移组件
  const onMoveUp = () => {
    dispatch(dragSorter({ oldIndex: selectIndex, newIndex: selectIndex - 1 }))
  }

  // 下移组件
  const onMoveDown = () => {
    dispatch(dragSorter({ oldIndex: selectIndex, newIndex: selectIndex + 1 }))
  }

  // 撤销
  const onUndo = () => {
    dispatch(ActionCreators.undo())
  }

  // 重做
  const onRedo = () => {
    dispatch(ActionCreators.redo())
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
      <Tooltip title="上移">
        <Button shape="circle" disabled={isFirst} icon={<UpOutlined />} onClick={onMoveUp} />
      </Tooltip>
      <Tooltip title="下移">
        <Button shape="circle" disabled={isLast} icon={<DownOutlined />} onClick={onMoveDown} />
      </Tooltip>
      <Tooltip title="撤销">
        <Button shape="circle" icon={<UndoOutlined />} onClick={onUndo} />
      </Tooltip>
      <Tooltip title="重做">
        <Button shape="circle" icon={<RedoOutlined />} onClick={onRedo} />
      </Tooltip>
    </Space>
  )
}

export default EditToolbar
