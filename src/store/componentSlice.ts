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
  componentList: Array<CommentInfoType>
}

const INIT_STATE: ComponentStateType = {
  componentList: [],
}

export const componentSlice = createSlice({
  name: 'components',
  initialState: INIT_STATE,
  reducers: {
    restComponent(state: ComponentStateType, action: PayloadAction<ComponentStateType>) {
      return action.payload
    },
  },
})

export const { restComponent } = componentSlice.actions

export default componentSlice.reducer
