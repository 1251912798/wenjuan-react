import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import componentReducer from './componentSlice'
import type { userType } from './userSlice'
import type { ComponentStateType } from './componentSlice'

export type StateType = {
  user: userType
  components: ComponentStateType
}

export const store = configureStore({
  reducer: {
    user: userReducer,
    components: componentReducer,
  },
})

export default store
