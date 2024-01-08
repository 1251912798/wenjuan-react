import { useDispatch } from 'react-redux'
import { useKeyPress } from 'ahooks'

import { copySelectComponent, pasteComponent, deleteComponent } from '@/store/componentSlice'

const useCanvasShoortKeys = () => {
  const dispatch = useDispatch()

  // 判断当前是否正在进行其他操作
  // 比如输入框的删除，复制等
  const isInputActive = () => {
    const activeEle = document.activeElement
    return activeEle === document.body
  }

  useKeyPress(['backspace', 'delete'], () => {
    if (!isInputActive()) return
    dispatch(deleteComponent())
  })

  useKeyPress('ctrl.c', () => {
    if (!isInputActive()) return
    dispatch(copySelectComponent())
  })

  useKeyPress('ctrl.v', () => {
    if (!isInputActive()) return
    dispatch(pasteComponent())
  })
}

export default useCanvasShoortKeys
