import { useSelector } from 'react-redux'
import { StateType } from '@/store/index'
import { ComponentStateType } from '@/store/componentSlice'

const useLoadComponentList = () => {
  const components = useSelector<StateType>(state => state.components) as ComponentStateType

  const { componentList = [], selectId = '' } = components

  const selectComponent = componentList.find(item => item.fe_id === selectId)

  return { componentList, selectId, selectComponent }
}

export default useLoadComponentList
