import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type userType = {
  username: string
  nickname: string
}

const INIT_USER_INFO: userType = {
  username: '',
  nickname: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: INIT_USER_INFO,
  reducers: {
    loginUserInfo(state: userType, action: PayloadAction<userType>) {
      return action.payload
    },
    loginOut() {
      return INIT_USER_INFO
    },
  },
})

export const { loginUserInfo, loginOut } = userSlice.actions

export default userSlice.reducer
