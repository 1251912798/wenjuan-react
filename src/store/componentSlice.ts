import { produce } from 'immer'
import { createSlice } from '@reduxjs/toolkit'
import { arrayMove } from '@dnd-kit/sortable'
import cloneDeep from 'lodash.clonedeep'
import { getNextSelectId, insertComponent } from './utils'
import type { CommentPropsType } from '@/component/QuestionComponents/index'

import type { PayloadAction } from '@reduxjs/toolkit'

export type CommentInfoType = {
  fe_id: string
  type: string
  title: string
  isHeid?: boolean
  isLock: boolean
  props: CommentPropsType
}

export type ComponentStateType = {
  selectId: string
  componentList: Array<CommentInfoType>
  copyComponent: CommentInfoType | null
}

const INIT_STATE: ComponentStateType = {
  selectId: '',
  componentList: [],
  copyComponent: null,
}

export const componentSlice = createSlice({
  name: 'components',
  initialState: INIT_STATE,
  reducers: {
    restComponent: (state: ComponentStateType, action: PayloadAction<ComponentStateType>) => {
      return action.payload
    },

    // 当前选择id
    onSelectId: produce((draft: ComponentStateType, action: PayloadAction<string>) => {
      draft.selectId = action.payload
    }),

    // 添加组件
    addComponent: produce((draft: ComponentStateType, action: PayloadAction<CommentInfoType>) => {
      insertComponent(draft, action.payload)
    }),

    // 更新组件props
    updatedComponentProps: produce(
      (
        draft: ComponentStateType,
        action: PayloadAction<{ fe_id: string; newProps: CommentPropsType }>
      ) => {
        const { fe_id, newProps } = action.payload
        const Component = draft.componentList.find(item => item.fe_id === fe_id)
        if (Component) {
          Component.props = {
            ...Component.props,
            ...newProps,
          }
        }
      }
    ),
    // 删除组件
    deleteComponent: produce((draft: ComponentStateType) => {
      const { selectId, componentList = [] } = draft

      const index = componentList.findIndex(item => item.fe_id === selectId)
      const selectIndex = getNextSelectId(selectId, componentList)

      if (index > -1) {
        draft.selectId = selectIndex
        componentList.splice(index, 1)
      }
    }),
    // 隐藏显示组件
    hideComponent: produce(
      (draft: ComponentStateType, action: PayloadAction<{ fe_id: string; isHeid: boolean }>) => {
        const { componentList = [] } = draft
        const { fe_id, isHeid } = action.payload
        let selectId = ''
        if (isHeid) {
          selectId = getNextSelectId(fe_id, componentList)
        } else {
          selectId = fe_id
        }
        draft.selectId = selectId
        const Component = componentList.find(item => item.fe_id === fe_id)

        if (Component) {
          Component.isHeid = isHeid
        }
      }
    ),
    // 锁定解锁组件
    lockComponent: produce(
      (draft: ComponentStateType, action: PayloadAction<{ fe_id: string }>) => {
        const { componentList = [] } = draft
        const { fe_id } = action.payload

        const Component = componentList.find(item => item.fe_id === fe_id)

        if (Component) {
          Component.isLock = !Component.isLock
        }
      }
    ),
    // 复制组件
    copySelectComponent: produce((draft: ComponentStateType) => {
      const { selectId, componentList = [] } = draft

      const Component = componentList.find(item => item.fe_id === selectId)

      if (Component) {
        draft.copyComponent = cloneDeep(Component)
      }
    }),
    // 粘贴组件
    pasteComponent: produce((draft: ComponentStateType) => {
      const { copyComponent } = draft
      if (copyComponent) {
        copyComponent.fe_id = +new Date() + ''
        insertComponent(draft, copyComponent)
      }
    }),
    // 方向键 移动按钮
    moveKeyComponent: produce((draft: ComponentStateType, action: PayloadAction<string>) => {
      const { componentList = [], selectId } = draft
      const index = componentList.findIndex(item => item.fe_id === selectId)
      const key = action.payload

      if (key === 'up') {
        // 向上移动
        if (index <= 0) return
        draft.selectId = componentList[index - 1].fe_id
      } else if (key === 'down') {
        // 向下移动
        if (index < 0) return
        if (index === componentList.length - 1) return
        draft.selectId = componentList[index + 1].fe_id
      }
    }),
    // 修改组件title
    updateComponentTitle: produce((draft: ComponentStateType, action: PayloadAction<string>) => {
      const { componentList = [], selectId } = draft
      const Component = componentList.find(item => item.fe_id === selectId)

      if (Component) {
        Component.title = action.payload
      }
    }),
    // 拖拽排序
    dragSorter: produce(
      (
        draft: ComponentStateType,
        action: PayloadAction<{ oldIndex: number; newIndex: number }>
      ) => {
        const { componentList = [] } = draft
        const { oldIndex, newIndex } = action.payload
        draft.componentList = arrayMove(componentList, oldIndex, newIndex)
      }
    ),
  },
})

export const {
  restComponent, //
  onSelectId, //
  addComponent,
  updatedComponentProps,
  deleteComponent,
  hideComponent,
  lockComponent,
  copySelectComponent,
  pasteComponent,
  moveKeyComponent, //
  updateComponentTitle,
  dragSorter,
} = componentSlice.actions

export default componentSlice.reducer
