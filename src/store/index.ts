import { configureStore } from '@reduxjs/toolkit'
import undoable, { includeAction } from 'redux-undo'

import userReducer from './userSlice'
import componentReducer from './componentSlice'
import pageInfoSlice from './pageInfoSlice'

import type { StateWithHistory } from 'redux-undo'
import type { userType } from './userSlice'
import type { ComponentStateType } from './componentSlice'
import type { PageInfoType } from './pageInfoSlice'

export type StateType = {
  user: userType
  components: StateWithHistory<ComponentStateType>
  pageInfo: PageInfoType
}

export const store = configureStore({
  reducer: {
    user: userReducer,
    // components: componentReducer,
    components: undoable(componentReducer, {
      limit: 15,
      // 屏蔽不需要撤销的操作
      filter: includeAction([
        'components/addComponent',
        'components/updatedComponentProps',
        'components/deleteComponent',
        'components/hideComponent',
        'components/lockComponent',
        'components/copySelectComponent',
        'components/pasteComponent',
        'components/updateComponentTitle',
        'components/dragSorter',
      ]),
    }),
    pageInfo: pageInfoSlice,
  },
})

export default store
