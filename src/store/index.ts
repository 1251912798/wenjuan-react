import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import type { userType } from './userSlice'

export type UserType = {
  user: userType
}

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export default store
