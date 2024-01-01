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
    restComponent: produce(
      (state: ComponentStateType, action: PayloadAction<ComponentStateType>) => {
        state.componentList = action.payload.componentList
      }
    ),
    // 当前选择id
    onSelectId: produce((draft: ComponentStateType, action: PayloadAction<string>) => {
      draft.selectId = action.payload
    }),
  },
})

export const { restComponent } = componentSlice.actions

export default componentSlice.reducer
