import { useSelector } from 'react-redux'
import { StateType } from '@/store/index'
import { ComponentStateType } from '@/store/componentSlice'

const useLoadComponentList = () => {
  const components = useSelector<StateType>(state => {
    return state.components.present
  }) as ComponentStateType

  const { componentList = [], selectId = '', copyComponent } = components

  const selectComponent = componentList.find(item => item.fe_id === selectId)

  return { componentList, selectId, selectComponent, copyComponent }
}

export default useLoadComponentList
