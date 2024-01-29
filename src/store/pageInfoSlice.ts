import { createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'

import type { PayloadAction } from '@reduxjs/toolkit'

export type PageInfoType = {
  title: string
  desc?: string
  js?: string
  css?: string
  isPublished?: boolean
}

export const INIT_PAGE_INFO: PageInfoType = {
  title: '',
  desc: '',
  js: '',
  css: '',
}
export const pageInfoSlice = createSlice({
  name: 'pageInfo',
  initialState: INIT_PAGE_INFO,
  reducers: {
    restPageInfo: (state: PageInfoType, action: PayloadAction<PageInfoType>) => {
      return action.payload
    },
    // 修改页面标题
    updatedPageTitle: produce((draft: PageInfoType, action: PayloadAction<string>) => {
      draft.title = action.payload
    }),
  },
})

export const { restPageInfo, updatedPageTitle } = pageInfoSlice.actions

export default pageInfoSlice.reducer
