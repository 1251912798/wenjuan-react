import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import componentReducer from './componentSlice'
import pageInfoSlice from './pageInfoSlice'

import type { userType } from './userSlice'
import type { ComponentStateType } from './componentSlice'
import type { PageInfoType } from './pageInfoSlice'

export type StateType = {
  user: userType
  components: ComponentStateType
  pageInfo: PageInfoType
}

export const store = configureStore({
  reducer: {
    user: userReducer,
    components: componentReducer,
    pageInfo: pageInfoSlice,
  },
})

export default store
