import { produce } from 'immer'
import { createSlice } from '@reduxjs/toolkit'
import type { CommentPropsType } from '@/component/QuestionComponents/index'

import type { PayloadAction } from '@reduxjs/toolkit'
export type CommentInfoType = {
  fe_id: string
  type: string
  title: string
  props: CommentPropsType
}

export type ComponentStateType = {
  selectId: string
  componentList: Array<CommentInfoType>
}

const INIT_STATE: ComponentStateType = {
  selectId: '',
  componentList: [],
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
      const { selectId } = draft
      // 找当前选择的id索引
      const index = draft.componentList.findIndex(item => item.fe_id === selectId)
      if (index < 0) {
        draft.componentList.push(action.payload)
      } else {
        draft.componentList.splice(index + 1, 0, action.payload)
      }
      draft.selectId = action.payload.fe_id
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
  },
})

export const { restComponent, onSelectId, addComponent, updatedComponentProps } =
  componentSlice.actions

export default componentSlice.reducer
