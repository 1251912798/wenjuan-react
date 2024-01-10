import { useDispatch } from 'react-redux'
import { useKeyPress } from 'ahooks'

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
    return activeEle === document.body
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

  // 上移下移组件
  useKeyPress('uparrow', () => {
    if (!isInputActive()) return
    dispatch(moveKeyComponent('up'))
  })
  useKeyPress('downarrow', () => {
    if (!isInputActive()) return
    dispatch(moveKeyComponent('down'))
  })
}

export default useCanvasShoortKeys
