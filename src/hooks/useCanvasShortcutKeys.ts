import { useDispatch } from 'react-redux'
import { useKeyPress } from 'ahooks'
import { ActionCreators } from 'redux-undo'

import {
  copySelectComponent,
  pasteComponent,
  deleteComponent,
  moveKeyComponent,
} from '@/store/componentSlice'

const useCanvasShoortKeys = () => {
  const dispatch = useDispatch()

  // 判断当前是否正在进行其他操作
  // 比如输入框的删除，复制等
  const isInputActive = () => {
    const activeEle = document.activeElement
    if (activeEle === document.body) return true
    if (activeEle?.matches('div[role="button"]')) return true
  }

  // 删除组件
  useKeyPress(['backspace', 'delete'], () => {
    if (!isInputActive()) return
    dispatch(deleteComponent())
  })

  // 复制组件
  useKeyPress('ctrl.c', () => {
    if (!isInputActive()) return
    dispatch(copySelectComponent())
  })

  // 粘贴组件
  useKeyPress('ctrl.v', () => {
    if (!isInputActive()) return
    dispatch(pasteComponent())
  })

  // 上移组件
  useKeyPress('uparrow', () => {
    if (!isInputActive()) return
    dispatch(moveKeyComponent('up'))
  })

  // 下移组件
  useKeyPress('downarrow', () => {
    if (!isInputActive()) return
    dispatch(moveKeyComponent('down'))
  })

  // 撤销
  useKeyPress('ctrl.z', () => {
    if (!isInputActive()) return
    dispatch(ActionCreators.undo())
  })

  // 重做
  useKeyPress('ctrl.y', () => {
    if (!isInputActive()) return
    dispatch(ActionCreators.redo())
  })
}

export default useCanvasShoortKeys
